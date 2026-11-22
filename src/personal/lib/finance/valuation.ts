// Money maths for the finance tools. Rates are decimals (0.07 = 7%).

export const futureValue = (pv: number, r: number, years: number, perYear = 1) => pv * (1 + r / perYear) ** (perYear * years)

// Future value of regular contributions made at the end of each period.
export const annuityFV = (payment: number, r: number, periods: number) => (r === 0 ? payment * periods : (payment * ((1 + r) ** periods - 1)) / r)

export const presentValue = (fv: number, r: number, years: number) => fv / (1 + r) ** years

// Years for money to double: exact, and the rule-of-72 estimate.
export const doublingTime = (r: number) => Math.log(2) / Math.log(1 + r)
export const ruleOf72 = (r: number) => 72 / (r * 100)

export const cagr = (start: number, end: number, years: number) => (end / start) ** (1 / years) - 1

// Gordon growth model: value of a stream growing at g forever, discounted at r.
export const gordon = (nextCashFlow: number, r: number, g: number) => (r > g ? nextCashFlow / (r - g) : NaN)

// Cost of equity from CAPM.
export const capm = (riskFree: number, beta: number, marketPremium: number) => riskFree + beta * marketPremium

export const wacc = (equity: number, debt: number, costEquity: number, costDebt: number, tax: number) => {
  const v = equity + debt
  return (equity / v) * costEquity + (debt / v) * costDebt * (1 - tax)
}

export type DcfInput = { fcf: number; growth: number; years: number; discount: number; terminalGrowth: number; netDebt: number; shares: number }

export function dcf(x: DcfInput) {
  const rows: { year: number; fcf: number; factor: number; pv: number }[] = []
  let f = x.fcf
  let sum = 0
  for (let t = 1; t <= x.years; t++) {
    f *= 1 + x.growth
    const factor = 1 / (1 + x.discount) ** t
    rows.push({ year: t, fcf: f, factor, pv: f * factor })
    sum += f * factor
  }
  const terminal = gordon(f * (1 + x.terminalGrowth), x.discount, x.terminalGrowth)
  const pvTerminal = terminal / (1 + x.discount) ** x.years
  const ev = sum + pvTerminal
  const equity = ev - x.netDebt
  return { rows, sumPv: sum, terminal, pvTerminal, ev, equity, perShare: equity / x.shares, terminalShare: pvTerminal / ev }
}

// Altman Z-score (1968) for listed manufacturing companies.
export type AltmanInput = { workingCapital: number; retained: number; ebit: number; marketEquity: number; sales: number; assets: number; liabilities: number }

export function altman(x: AltmanInput) {
  const A = x.workingCapital / x.assets
  const B = x.retained / x.assets
  const C = x.ebit / x.assets
  const D = x.marketEquity / x.liabilities
  const E = x.sales / x.assets
  const z = 1.2 * A + 1.4 * B + 3.3 * C + 0.6 * D + 1.0 * E
  return { A, B, C, D, E, z, zone: z > 2.99 ? 'Safe' : z >= 1.81 ? 'Grey' : 'Distress' }
}

// Shares to buy so that hitting the stop loses `riskShare` of the account.
export function positionSize(account: number, riskShare: number, entry: number, stop: number) {
  const perShare = Math.abs(entry - stop)
  const risk = account * riskShare
  const shares = perShare > 0 ? Math.floor(risk / perShare) : 0
  return { perShare, risk, shares, value: shares * entry, valueShare: (shares * entry) / account }
}

// Expected result per trade, in units of the amount risked (R).
export const expectancy = (winRate: number, avgWinR: number, avgLossR = 1) => winRate * avgWinR - (1 - winRate) * avgLossR

// Kelly fraction for a bet that wins b times the stake with probability p.
export const kelly = (p: number, b: number) => p - (1 - p) / b
