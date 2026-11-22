// Options, bonds, futures and currency maths for the finance tools. Rates and volatilities
// are decimals (0.05 = 5%); times are in years.

// Standard normal cumulative distribution (Abramowitz & Stegun 26.2.17; error < 7.5e-8).
export function normCdf(x: number): number {
  const t = 1 / (1 + 0.2316419 * Math.abs(x))
  const d = 0.3989422804014327 * Math.exp((-x * x) / 2)
  const p = d * t * (0.31938153 + t * (-0.356563782 + t * (1.781477937 + t * (-1.821255978 + t * 1.330274429))))
  return x >= 0 ? 1 - p : p
}

export const normPdf = (x: number) => Math.exp((-x * x) / 2) / Math.sqrt(2 * Math.PI)

export type OptionType = 'call' | 'put'

// Black–Scholes–Merton price and Greeks for a European option on an asset paying a
// continuous yield q. Vega and rho are per 1 percentage point; theta is per calendar day.
export function blackScholes(type: OptionType, S: number, K: number, T: number, r: number, sigma: number, q = 0) {
  const sqrtT = Math.sqrt(T)
  const d1 = (Math.log(S / K) + (r - q + (sigma * sigma) / 2) * T) / (sigma * sqrtT)
  const d2 = d1 - sigma * sqrtT
  const dq = Math.exp(-q * T)
  const dr = Math.exp(-r * T)
  const call = type === 'call'
  const price = call ? S * dq * normCdf(d1) - K * dr * normCdf(d2) : K * dr * normCdf(-d2) - S * dq * normCdf(-d1)
  const delta = call ? dq * normCdf(d1) : dq * (normCdf(d1) - 1)
  const gamma = (dq * normPdf(d1)) / (S * sigma * sqrtT)
  const vega = (S * dq * normPdf(d1) * sqrtT) / 100
  const thetaYear = call
    ? (-S * dq * normPdf(d1) * sigma) / (2 * sqrtT) - r * K * dr * normCdf(d2) + q * S * dq * normCdf(d1)
    : (-S * dq * normPdf(d1) * sigma) / (2 * sqrtT) + r * K * dr * normCdf(-d2) - q * S * dq * normCdf(-d1)
  const rho = (call ? K * T * dr * normCdf(d2) : -K * T * dr * normCdf(-d2)) / 100
  return { price, d1, d2, delta, gamma, vega, theta: thetaYear / 365, rho, probITM: call ? normCdf(d2) : normCdf(-d2) }
}

// The volatility that makes Black–Scholes match a market price (bisection).
export function impliedVol(type: OptionType, price: number, S: number, K: number, T: number, r: number, q = 0) {
  let lo = 0.001
  let hi = 5
  for (let i = 0; i < 80; i++) {
    const mid = (lo + hi) / 2
    if (blackScholes(type, S, K, T, r, mid, q).price > price) hi = mid
    else lo = mid
  }
  return (lo + hi) / 2
}

// Cox–Ross–Rubinstein binomial tree; American exercise optional.
export function binomial(type: OptionType, S: number, K: number, T: number, r: number, sigma: number, steps = 200, american = false) {
  const dt = T / steps
  const u = Math.exp(sigma * Math.sqrt(dt))
  const d = 1 / u
  const p = (Math.exp(r * dt) - d) / (u - d)
  const disc = Math.exp(-r * dt)
  const pay = (s: number) => Math.max(0, type === 'call' ? s - K : K - s)
  let v = Array.from({ length: steps + 1 }, (_, j) => pay(S * u ** j * d ** (steps - j)))
  for (let i = steps - 1; i >= 0; i--) {
    v = v.slice(0, i + 1).map((_, j) => {
      const cont = disc * (p * v[j + 1] + (1 - p) * v[j])
      return american ? Math.max(cont, pay(S * u ** j * d ** (i - j))) : cont
    })
  }
  return { price: v[0], u, d, p }
}

// One leg of an options strategy, valued at expiry. Premiums are per share.
export type Leg = { kind: 'call' | 'put' | 'stock'; qty: number; strike: number; premium: number }

export function payoffAt(legs: Leg[], S: number) {
  return legs.reduce((sum, l) => {
    if (l.kind === 'stock') return sum + l.qty * (S - l.strike)
    const intrinsic = l.kind === 'call' ? Math.max(0, S - l.strike) : Math.max(0, l.strike - S)
    return sum + l.qty * (intrinsic - l.premium)
  }, 0)
}

// ── bonds ───────────────────────────────────────────────────────────────────

export function bondPrice(face: number, couponRate: number, ytm: number, years: number, freq = 2) {
  const n = Math.round(years * freq)
  const c = (face * couponRate) / freq
  const y = ytm / freq
  let p = 0
  for (let t = 1; t <= n; t++) p += c / (1 + y) ** t
  return p + face / (1 + y) ** n
}

export function bondYield(price: number, face: number, couponRate: number, years: number, freq = 2) {
  let lo = -0.05
  let hi = 1
  for (let i = 0; i < 100; i++) {
    const mid = (lo + hi) / 2
    if (bondPrice(face, couponRate, mid, years, freq) > price) lo = mid
    else hi = mid
  }
  return (lo + hi) / 2
}

// Macaulay and modified duration (years) and convexity.
export function bondRisk(face: number, couponRate: number, ytm: number, years: number, freq = 2) {
  const n = Math.round(years * freq)
  const c = (face * couponRate) / freq
  const y = ytm / freq
  const P = bondPrice(face, couponRate, ytm, years, freq)
  let mac = 0
  let conv = 0
  for (let t = 1; t <= n; t++) {
    const cf = c + (t === n ? face : 0)
    const pv = cf / (1 + y) ** t
    mac += (t / freq) * pv
    conv += (cf * t * (t + 1)) / (1 + y) ** (t + 2)
  }
  mac /= P
  return { price: P, macaulay: mac, modified: mac / (1 + y), convexity: conv / (P * freq * freq) }
}

// ── futures and currencies ─────────────────────────────────────────────────

// Cost-of-carry fair value: storage cost u and income yield q, continuously compounded.
export const futuresFair = (spot: number, r: number, T: number, q = 0, u = 0) => spot * Math.exp((r + u - q) * T)

// Covered interest parity: forward rate for a pair quoted as quote currency per base unit.
export const forwardRate = (spot: number, rQuote: number, rBase: number, T: number) => spot * ((1 + rQuote * T) / (1 + rBase * T))

// Value of one pip, in the quote currency, for a position of `units` of the base currency.
export const pipValue = (units: number, pip = 0.0001) => units * pip
