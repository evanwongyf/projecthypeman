import { useEffect, useMemo, useState } from 'react'
import type { Block } from '../../lib/archive/guide'
import { PlotChart } from '../finance/PlotChart'
import { Btn, Card, Pills, Select, Slider, Stat, fmt, soft } from './kit'
import { NativeSelect } from '../../../components/NativeSelect'

type SecBlockType = Extract<Block, { t: 'sec-viz' }>

export default function SecBlock({ block, color }: { block: SecBlockType; color: string }) {
  switch (block.viz) {
    case 'password-entropy':
      return <PasswordEntropy color={color} />
    case 'hash-avalanche':
      return <HashAvalanche color={color} />
    case 'birthday':
      return <Birthday color={color} />
    case 'diffie-hellman':
      return <DiffieHellman color={color} />
    case 'rsa-toy':
      return <RsaToy color={color} />
    case 'risk-matrix':
      return <RiskMatrix color={color} />
    case 'cvss':
      return <Cvss color={color} />
    case 'base-rate':
      return <BaseRate color={color} />
    case 'freq-analysis':
      return <FreqAnalysis color={color} />
    case 'coverage':
      return <Coverage color={color} />
  }
}

// ── passwords ──────────────────────────────────────────────────────────────

const human = (secs: number) => {
  if (!Number.isFinite(secs)) return 'effectively never'
  if (secs < 1) return 'under a second'
  const units: [string, number][] = [['years', 31557600], ['days', 86400], ['hours', 3600], ['minutes', 60], ['seconds', 1]]
  if (secs > 31557600 * 1e9) return 'longer than the age of the universe'
  for (const [u, n] of units) {
    if (secs >= n) {
      const v = secs / n
      return `${v >= 1e6 ? v.toExponential(1) : v >= 100 ? v.toFixed(0) : v.toFixed(1)} ${u}`
    }
  }
  return `${secs.toFixed(0)} seconds`
}

function PasswordEntropy({ color }: { color: string }) {
  const [mode, setMode] = useState<'chars' | 'words' | 'typed'>('chars')
  const [len, setLen] = useState(12)
  const [lower, setLower] = useState(true)
  const [upper, setUpper] = useState(true)
  const [digits, setDigits] = useState(true)
  const [symbols, setSymbols] = useState(false)
  const [words, setWords] = useState(5)
  const [typed, setTyped] = useState('Tr0ub4dor&3')
  const pool = (lower ? 26 : 0) + (upper ? 26 : 0) + (digits ? 10 : 0) + (symbols ? 33 : 0)
  const typedPool = (/[a-z]/.test(typed) ? 26 : 0) + (/[A-Z]/.test(typed) ? 26 : 0) + (/[0-9]/.test(typed) ? 10 : 0) + (/[^a-zA-Z0-9]/.test(typed) ? 33 : 0)
  const bits = mode === 'chars' ? len * Math.log2(Math.max(pool, 1)) : mode === 'words' ? words * Math.log2(7776) : typed.length * Math.log2(Math.max(typedPool, 1))
  const guesses = 2 ** (bits - 1) // on average the attacker searches half the space
  const rates: [string, number][] = [['Online, rate-limited (10 guesses/s)', 10], ['Offline, slow hash such as bcrypt (10³/s on one GPU)', 1e3], ['Offline, fast hash such as MD5 or NTLM (10¹¹/s on one GPU)', 1e11]]
  return (
    <Card title="Password entropy and time to guess" color={color} note="Entropy in bits is log₂ of the number of equally likely possibilities. A truly random password of length L from an alphabet of N symbols has L·log₂N bits, and an attacker searching in random order needs on average half the space. Typed passwords are not random, so the 'typed' figure overstates their strength: it is an upper bound. Nothing you type here leaves the page.">
      <Pills label="Mode" value={mode} options={[['chars', 'Random characters'], ['words', 'Random words (diceware)'], ['typed', 'A password I type']]} onChange={setMode} />
      {mode === 'chars' && (
        <div className="flex flex-wrap items-center gap-3">
          <Slider label="length" value={len} min={4} max={32} step={1} onChange={setLen} />
          <Btn active={lower} onClick={() => setLower(!lower)}>a–z</Btn>
          <Btn active={upper} onClick={() => setUpper(!upper)}>A–Z</Btn>
          <Btn active={digits} onClick={() => setDigits(!digits)}>0–9</Btn>
          <Btn active={symbols} onClick={() => setSymbols(!symbols)}>symbols</Btn>
        </div>
      )}
      {mode === 'words' && <Slider label="number of random words (from a 7,776-word list)" value={words} min={2} max={10} step={1} onChange={setWords} />}
      {mode === 'typed' && (
        <label className="flex flex-col gap-1 text-xs font-bold">
          Type a password (a throwaway one!)
          <input value={typed} onChange={(e) => setTyped(e.target.value)} className="rounded-[var(--radius)] border px-2 py-1.5 font-mono text-sm" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }} spellCheck={false} autoComplete="off" />
        </label>
      )}
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        <Stat label="entropy" value={`${fmt(bits, 1)} bits`} tone={color} />
        <Stat label="possibilities" value={`2^${fmt(bits, 0)} ≈ ${(2 ** bits).toExponential(1)}`} />
        <Stat label="average guesses needed" value={guesses.toExponential(1)} />
      </div>
      <div className="flex flex-col gap-1.5">
        {rates.map(([label, rate]) => (
          <div key={label} className="flex flex-wrap items-baseline justify-between gap-2 rounded-[var(--radius)] border px-2.5 py-1.5 text-sm" style={{ borderColor: 'var(--line)' }}>
            <span>{label}</span>
            <strong className="font-mono">{human(guesses / rate)}</strong>
          </div>
        ))}
      </div>
      <p className="text-xs" style={soft}>The rates are order-of-magnitude figures for one modern GPU, and attackers can use many. The lesson is the gap between rows: the same password can be safe against an online attack and trivial against a stolen fast-hash database, which is why storing passwords with a slow, salted hash matters as much as choosing them well.</p>
    </Card>
  )
}

// ── hashing ────────────────────────────────────────────────────────────────

async function sha256(text: string): Promise<string> {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text))
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, '0')).join('')
}

function HashAvalanche({ color }: { color: string }) {
  const [text, setText] = useState('The quick brown fox jumps over the lazy dog')
  const [a, setA] = useState('')
  const [b, setB] = useState('')
  // Flip the lowest bit of the last character: the smallest possible change to the input.
  const changed = text.length ? text.slice(0, -1) + String.fromCharCode(text.charCodeAt(text.length - 1) ^ 1) : '\u0001'
  useEffect(() => {
    let live = true
    Promise.all([sha256(text), sha256(changed)]).then(([x, y]) => {
      if (live) {
        setA(x)
        setB(y)
      }
    })
    return () => {
      live = false
    }
  }, [text, changed])
  const bitsOf = (h: string) => h.split('').map((c) => parseInt(c, 16).toString(2).padStart(4, '0')).join('')
  const ba = bitsOf(a)
  const bb = bitsOf(b)
  let diff = 0
  for (let i = 0; i < ba.length; i++) if (ba[i] !== bb[i]) diff++
  return (
    <Card title="The avalanche effect in SHA-256" color={color} note="A good hash function changes about half of its output bits when any single input bit changes. Below, the second input differs from the first by exactly one bit (the lowest bit of the last character), yet the two 256-bit digests look unrelated. This is what makes a hash useful as a fingerprint and useless for guessing what is 'close' to the original.">
      <label className="flex flex-col gap-1 text-xs font-bold">
        Input
        <input value={text} onChange={(e) => setText(e.target.value)} className="rounded-[var(--radius)] border px-2 py-1.5 font-mono text-sm" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }} />
      </label>
      <div className="flex flex-col gap-1.5 font-mono text-[11px] leading-relaxed break-all">
        <p><span className="font-sans font-bold">SHA-256(input)</span><br />{a}</p>
        <p><span className="font-sans font-bold">SHA-256(input with one bit flipped: “{changed}”)</span><br />{b}</p>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <Stat label="bits in a digest" value="256" />
        <Stat label="bits that differ" value={ba.length ? String(diff) : '–'} tone={color} />
        <Stat label="share that differ" value={ba.length ? `${fmt((diff / 256) * 100, 1)}%` : '–'} />
      </div>
      <div className="flex flex-wrap gap-px" aria-hidden>
        {ba.split('').map((x, i) => (
          <span key={i} className="inline-block h-2.5 w-2.5" style={{ background: x !== bb[i] ? color : 'var(--paper-2)' }} />
        ))}
      </div>
    </Card>
  )
}

// ── the birthday bound ─────────────────────────────────────────────────────

function Birthday({ color }: { color: string }) {
  const [bits, setBits] = useState(64)
  const prob = (b: number, log2n: number) => 1 - Math.exp(-(2 ** (2 * log2n - b - 1)))
  const half = 1.1774 * 2 ** (bits / 2)
  const curves = [32, 64, 128, 256].map((b, i) => ({ f: (k: number) => prob(b, k), color: ['#d9534f', '#e07b2a', '#2f9e6e', '#3b6fd8'][i], label: `${b}-bit hash`, dashed: b !== bits && ![32, 64, 128, 256].includes(bits) ? false : false }))
  const mine = { f: (k: number) => prob(bits, k), color: '#000', label: `your ${bits}-bit hash`, dashed: true }
  return (
    <Card title="The birthday bound: how many hashes until two collide?" color={color} note="Among n random values from N possibilities, the chance that two match is about 1 − e^(−n²/2N). That is 50% when n ≈ 1.18·√N, so a b-bit hash collides after about 2^(b/2) items, not 2^b. In a room of 23 people there is already a 50% chance of a shared birthday (N = 365). This is why 128-bit hashes give only 64 bits of collision resistance, and why MD5 and SHA-1 collisions became practical.">
      <PlotChart block={{ t: 'plot', x: [0, 140], y: [0, 1], xLabel: 'log₂ of the number of hashes computed', yLabel: 'probability of at least one collision', curves: [...curves, mine] }} />
      <Slider label="hash length (bits)" value={bits} min={16} max={256} step={8} onChange={setBits} />
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        <Stat label="possible outputs N" value={`2^${bits}`} />
        <Stat label="items for a 50% collision" value={`≈ 2^${fmt(Math.log2(half), 1)}`} tone={color} />
        <Stat label="that is about" value={half < 1e15 ? Math.round(half).toLocaleString('en-US') : half.toExponential(1)} />
      </div>
    </Card>
  )
}

// ── Diffie–Hellman and RSA with toy numbers ────────────────────────────────

const powmod = (b: bigint, e: bigint, m: bigint) => {
  let r = 1n
  b %= m
  while (e > 0n) {
    if (e & 1n) r = (r * b) % m
    b = (b * b) % m
    e >>= 1n
  }
  return r
}

function DiffieHellman({ color }: { color: string }) {
  const [pi, setPi] = useState('23')
  const [g, setG] = useState(5)
  const [a, setA] = useState(6)
  const [b, setB] = useState(15)
  const p = BigInt(pi)
  const A = powmod(BigInt(g), BigInt(a), p)
  const B = powmod(BigInt(g), BigInt(b), p)
  const sA = powmod(B, BigInt(a), p)
  const sB = powmod(A, BigInt(b), p)
  // Eve sees p, g, A, B and tries every exponent.
  let tries = 0
  let found = 0
  for (let x = 1; x < Number(p); x++) {
    tries++
    if (powmod(BigInt(g), BigInt(x), p) === A) {
      found = x
      break
    }
  }
  return (
    <Card title="Diffie–Hellman key exchange with toy numbers" color={color} note="Alice and Bob agree on a public prime p and generator g. Each keeps a secret exponent (a, b) and publishes g^a mod p and g^b mod p. Each then raises the other's public value to their own secret and, because (g^b)^a = (g^a)^b, they arrive at the same shared secret without ever sending it. An eavesdropper sees p, g, A and B but must solve the discrete logarithm problem. With a 5-digit prime that is a few thousand tries; with a 2,048-bit prime it is infeasible.">
      <div className="flex flex-wrap gap-3">
        <Select label="public prime p" value={pi} onChange={setPi} options={['23', '101', '1019', '10007', '104729'].map((v) => [v, v] as [string, string])} />
        <Slider label="generator g" value={g} min={2} max={20} step={1} onChange={setG} />
        <Slider label="Alice's secret a" value={a} min={2} max={Math.min(Number(p) - 2, 200)} step={1} onChange={setA} />
        <Slider label="Bob's secret b" value={b} min={2} max={Math.min(Number(p) - 2, 200)} step={1} onChange={setB} />
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="Alice publishes A = g^a mod p" value={String(A)} />
        <Stat label="Bob publishes B = g^b mod p" value={String(B)} />
        <Stat label="Alice computes B^a mod p" value={String(sA)} tone={color} />
        <Stat label="Bob computes A^b mod p" value={String(sB)} tone={color} />
      </div>
      <p className="text-sm">{sA === sB ? <strong>Both arrive at {String(sA)}: the same shared secret.</strong> : 'The secrets differ: check that p is prime.'} An eavesdropper who tries every exponent finds <code>a = {found}</code> after {tries.toLocaleString('en-US')} tries.</p>
    </Card>
  )
}

const PRIMES = [11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113]
const gcd = (a: bigint, b: bigint): bigint => (b === 0n ? a : gcd(b, a % b))
const inv = (e: bigint, phi: bigint) => {
  let [r0, r1, t0, t1] = [phi, e, 0n, 1n]
  while (r1 !== 0n) {
    const q = r0 / r1
    ;[r0, r1] = [r1, r0 - q * r1]
    ;[t0, t1] = [t1, t0 - q * t1]
  }
  return ((t0 % phi) + phi) % phi
}

function RsaToy({ color }: { color: string }) {
  const [pi, setPi] = useState(8)
  const [qi, setQi] = useState(12)
  const [msg, setMsg] = useState(42)
  const p = BigInt(PRIMES[pi])
  const q = BigInt(PRIMES[qi === pi ? (qi + 1) % PRIMES.length : qi])
  const n = p * q
  const phi = (p - 1n) * (q - 1n)
  let e = 65537n
  if (e >= phi || gcd(e, phi) !== 1n) {
    e = 3n
    while (gcd(e, phi) !== 1n) e += 2n
  }
  const d = inv(e, phi)
  const m = BigInt(msg) % n
  const c = powmod(m, e, n)
  const back = powmod(c, d, n)
  // Trial division: how hard is it to recover p and q from n alone?
  let steps = 0
  for (let f = 2n; f * f <= n; f++) {
    steps++
    if (n % f === 0n) break
  }
  return (
    <Card title="RSA with toy numbers" color={color} note="Pick two primes p and q and publish n = p·q and an exponent e. Encrypt a message m as c = m^e mod n. Only someone who knows φ = (p−1)(q−1) can find d with e·d ≡ 1 (mod φ) and decrypt as c^d mod n. Security rests on the difficulty of factoring n back into p and q. Here n is tiny and trial division cracks it instantly; real keys use primes of 1,024 bits or more, and this toy has no padding, so it must never be used for anything real.">
      <div className="flex flex-wrap gap-3">
        <Slider label="prime p" value={pi} min={0} max={PRIMES.length - 1} step={1} onChange={setPi} show={String(PRIMES[pi])} />
        <Slider label="prime q" value={qi} min={0} max={PRIMES.length - 1} step={1} onChange={setQi} show={String(q)} />
        <Slider label="message m (a number below n)" value={msg} min={2} max={Math.min(Number(n) - 1, 2000)} step={1} onChange={setMsg} />
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="public modulus n = p·q" value={String(n)} />
        <Stat label="φ = (p−1)(q−1)" value={String(phi)} />
        <Stat label="public e / private d" value={`${e} / ${d}`} tone={color} />
        <Stat label="ciphertext c = m^e mod n" value={String(c)} />
      </div>
      <p className="text-sm">Decrypting: <code>c^d mod n = {String(back)}</code> {back === m ? '(the original message).' : '(mismatch: pick different primes).'} An attacker who only knows n factors it by trial division in <strong>{steps.toLocaleString('en-US')}</strong> steps. For a 2,048-bit n the same method needs about 2^1024 steps.</p>
    </Card>
  )
}

// ── risk: matrix and annualised loss ───────────────────────────────────────

const LIK = ['Rare', 'Unlikely', 'Possible', 'Likely', 'Almost certain']
const IMP = ['Negligible', 'Minor', 'Moderate', 'Major', 'Severe']
const bandOf = (s: number) => (s >= 15 ? ['Critical', '#d9534f'] : s >= 10 ? ['High', '#e07b2a'] : s >= 5 ? ['Medium', '#e0a82a'] : ['Low', '#2f9e6e'])

function RiskMatrix({ color }: { color: string }) {
  const [risks, setRisks] = useState([
    { name: 'Phishing leads to stolen credentials', l: 4, i: 3 },
    { name: 'Unpatched public web server exploited', l: 3, i: 4 },
    { name: 'Laptop lost with unencrypted disk', l: 3, i: 3 },
    { name: 'Ransomware on the file server', l: 2, i: 5 },
    { name: 'Insider copies customer data', l: 2, i: 4 },
  ])
  const [sle, setSle] = useState(50000)
  const [aro, setAro] = useState(0.3)
  const [ctl, setCtl] = useState(0.6)
  const ale = sle * aro
  const residual = ale * (1 - ctl)
  const set = (k: number, f: 'l' | 'i', v: number) => setRisks(risks.map((r, j) => (j === k ? { ...r, [f]: v } : r)))
  return (
    <Card title="Risk = likelihood × impact" color={color} note="Qualitative risk matrices rank risks by multiplying a 1–5 likelihood by a 1–5 impact. Quantitative risk asks for money instead: single loss expectancy (SLE, the cost of one incident) times annualised rate of occurrence (ARO) gives the annualised loss expectancy (ALE). A control is worth buying if it reduces ALE by more than it costs per year. Both are only as good as their inputs: they turn judgement into numbers, they do not remove the judgement.">
      <div className="grid gap-3 lg:grid-cols-[auto_1fr]">
        <div className="grid grid-cols-[auto_repeat(5,2.6rem)] gap-0.5 self-start text-[10px]" role="img" aria-label="5 by 5 risk matrix">
          <span />
          {IMP.map((x) => (
            <span key={x} className="text-center font-bold">{x.slice(0, 4)}.</span>
          ))}
          {[4, 3, 2, 1, 0].map((l) => (
            <div key={l} className="contents">
              <span className="pr-1 text-right font-bold leading-[2.6rem]">{LIK[l]}</span>
              {IMP.map((_, i) => {
                const s = (l + 1) * (i + 1)
                const hits = risks.map((r, k) => (r.l - 1 === l && r.i - 1 === i ? k + 1 : 0)).filter(Boolean)
                return (
                  <span key={i} className="flex h-[2.6rem] items-center justify-center gap-0.5 rounded-sm font-bold" style={{ background: `color-mix(in srgb, ${bandOf(s)[1]} 35%, var(--surface))` }}>
                    {hits.map((h) => (
                      <span key={h} className="flex h-5 w-5 items-center justify-center rounded-full text-[10px]" style={{ background: 'var(--ink)', color: 'var(--surface)' }}>{h}</span>
                    ))}
                  </span>
                )
              })}
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-1.5">
          {risks.map((r, k) => {
            const [band, col] = bandOf(r.l * r.i)
            return (
              <div key={r.name} className="flex flex-wrap items-center gap-2 rounded-[var(--radius)] border px-2 py-1.5 text-xs" style={{ borderColor: 'var(--line)' }}>
                <span className="flex h-5 w-5 items-center justify-center rounded-full font-bold" style={{ background: 'var(--ink)', color: 'var(--surface)' }}>{k + 1}</span>
                <span className="min-w-40 flex-1 font-bold">{r.name}</span>
                <NativeSelect aria-label="likelihood" value={r.l} onChange={(e) => set(k, 'l', Number(e.target.value))} className="rounded border px-1 py-0.5" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }}>
                  {LIK.map((x, j) => <option key={x} value={j + 1}>{x}</option>)}
                </NativeSelect>
                <NativeSelect aria-label="impact" value={r.i} onChange={(e) => set(k, 'i', Number(e.target.value))} className="rounded border px-1 py-0.5" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }}>
                  {IMP.map((x, j) => <option key={x} value={j + 1}>{x}</option>)}
                </NativeSelect>
                <strong className="rounded px-1.5 py-0.5" style={{ background: `color-mix(in srgb, ${col} 35%, var(--surface))` }}>{r.l * r.i} {band}</strong>
              </div>
            )
          })}
        </div>
      </div>
      <p className="font-bold">Quantitative: annualised loss expectancy</p>
      <div className="flex flex-wrap gap-3">
        <Slider label="cost of one incident, SLE ($)" value={sle} min={1000} max={1000000} step={1000} onChange={setSle} show={`$${sle.toLocaleString('en-US')}`} />
        <Slider label="incidents per year, ARO" value={aro} min={0.01} max={4} step={0.01} onChange={setAro} show={aro.toFixed(2)} />
        <Slider label="control effectiveness (share of loss avoided)" value={ctl} min={0} max={1} step={0.05} onChange={setCtl} show={`${Math.round(ctl * 100)}%`} />
      </div>
      <div className="grid grid-cols-3 gap-2">
        <Stat label="ALE = SLE × ARO" value={`$${Math.round(ale).toLocaleString('en-US')}`} tone={color} />
        <Stat label="after the control" value={`$${Math.round(residual).toLocaleString('en-US')}`} />
        <Stat label="worth paying up to (per year)" value={`$${Math.round(ale - residual).toLocaleString('en-US')}`} />
      </div>
    </Card>
  )
}

// ── CVSS v3.1 ──────────────────────────────────────────────────────────────

const roundup = (x: number) => {
  const i = Math.round(x * 100000)
  return i % 10000 === 0 ? i / 100000 : (Math.floor(i / 10000) + 1) / 10
}

function Cvss({ color }: { color: string }) {
  const [m, setM] = useState({ AV: 'N', AC: 'L', PR: 'N', UI: 'N', S: 'U', C: 'H', I: 'H', A: 'H' })
  const AV: Record<string, number> = { N: 0.85, A: 0.62, L: 0.55, P: 0.2 }
  const AC: Record<string, number> = { L: 0.77, H: 0.44 }
  const UI: Record<string, number> = { N: 0.85, R: 0.62 }
  const CIA: Record<string, number> = { H: 0.56, L: 0.22, N: 0 }
  const changed = m.S === 'C'
  const PR = m.PR === 'N' ? 0.85 : m.PR === 'L' ? (changed ? 0.68 : 0.62) : changed ? 0.5 : 0.27
  const iss = 1 - (1 - CIA[m.C]) * (1 - CIA[m.I]) * (1 - CIA[m.A])
  const impact = changed ? 7.52 * (iss - 0.029) - 3.25 * (iss - 0.02) ** 15 : 6.42 * iss
  const expl = 8.22 * AV[m.AV] * AC[m.AC] * PR * UI[m.UI]
  const base = impact <= 0 ? 0 : changed ? roundup(Math.min(1.08 * (impact + expl), 10)) : roundup(Math.min(impact + expl, 10))
  const sev = base === 0 ? ['None', '#8a8478'] : base < 4 ? ['Low', '#2f9e6e'] : base < 7 ? ['Medium', '#e0a82a'] : base < 9 ? ['High', '#e07b2a'] : ['Critical', '#d9534f']
  const opts: [string, string, [string, string][]][] = [
    ['AV', 'Attack vector', [['N', 'Network'], ['A', 'Adjacent'], ['L', 'Local'], ['P', 'Physical']]],
    ['AC', 'Attack complexity', [['L', 'Low'], ['H', 'High']]],
    ['PR', 'Privileges required', [['N', 'None'], ['L', 'Low'], ['H', 'High']]],
    ['UI', 'User interaction', [['N', 'None'], ['R', 'Required']]],
    ['S', 'Scope', [['U', 'Unchanged'], ['C', 'Changed']]],
    ['C', 'Confidentiality', [['H', 'High'], ['L', 'Low'], ['N', 'None']]],
    ['I', 'Integrity', [['H', 'High'], ['L', 'Low'], ['N', 'None']]],
    ['A', 'Availability', [['H', 'High'], ['L', 'Low'], ['N', 'None']]],
  ]
  return (
    <Card title="CVSS v3.1 base score calculator" color={color} note="The Common Vulnerability Scoring System rates how severe a vulnerability is in the abstract. Eight metrics feed two sub-scores, exploitability (how easy it is to attack) and impact (what it costs if it works), which are combined and rounded up to one decimal. It measures severity, not risk to you: it ignores whether the flaw is reachable in your environment or already being exploited, which is why teams add exploit data such as EPSS and asset context.">
      <div className="grid gap-2 sm:grid-cols-2">
        {opts.map(([k, label, vals]) => (
          <div key={k} className="flex flex-col gap-1">
            <span className="text-xs font-bold">{label}</span>
            <Pills label={label} value={m[k as keyof typeof m]} options={vals} onChange={(v) => setM({ ...m, [k]: v })} />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="base score" value={fmt(base, 1)} tone={sev[1]} />
        <Stat label="severity" value={String(sev[0])} tone={sev[1]} />
        <Stat label="exploitability 8.22·AV·AC·PR·UI" value={fmt(expl, 2)} />
        <Stat label="impact sub-score" value={fmt(Math.max(impact, 0), 2)} />
      </div>
      <p className="font-mono text-xs break-all">CVSS:3.1/AV:{m.AV}/AC:{m.AC}/PR:{m.PR}/UI:{m.UI}/S:{m.S}/C:{m.C}/I:{m.I}/A:{m.A}</p>
    </Card>
  )
}

// ── the base-rate fallacy in detection ─────────────────────────────────────

function BaseRate({ color }: { color: string }) {
  const [prev, setPrev] = useState(-4) // log10 of the share of events that are malicious
  const [tpr, setTpr] = useState(0.95)
  const [fpr, setFpr] = useState(0.01)
  const p = 10 ** prev
  const ppv = (tpr * p) / (tpr * p + fpr * (1 - p))
  const N = 1_000_000
  const bad = N * p
  const tp = bad * tpr
  const fp = (N - bad) * fpr
  const curves = [-2, -3, -4, -5].map((lp, i) => ({ f: (lf: number) => { const q = 10 ** lp; const f = 10 ** lf; return (tpr * q) / (tpr * q + f * (1 - q)) }, color: ['#2f9e6e', '#3b6fd8', '#e07b2a', '#d9534f'][i], label: `1 in ${10 ** -lp} malicious` }))
  return (
    <Card title="Why most alerts are false alarms: the base-rate fallacy" color={color} note="A detector that catches 95% of attacks and wrongly flags only 1% of harmless events sounds excellent. But if only 1 event in 10,000 is malicious, then of every 1,000,000 events there are 100 attacks (95 caught) and about 9,999 false alarms: fewer than 1 alert in 100 is real. The probability that an alert is real (precision, or positive predictive value) depends on the base rate as much as on the detector. This is Bayes' theorem, and it is why alert fatigue exists.">
      <div className="flex flex-wrap gap-3">
        <Slider label="share of events that are malicious" value={prev} min={-6} max={-1} step={0.25} onChange={setPrev} show={`1 in ${Math.round(1 / p).toLocaleString('en-US')}`} />
        <Slider label="true positive rate (catches attacks)" value={tpr} min={0.5} max={1} step={0.01} onChange={setTpr} show={`${Math.round(tpr * 100)}%`} />
        <Slider label="false positive rate (flags harmless events)" value={fpr} min={0.0001} max={0.1} step={0.0001} onChange={setFpr} show={`${(fpr * 100).toFixed(2)}%`} />
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="of 1,000,000 events: attacks" value={Math.round(bad).toLocaleString('en-US')} />
        <Stat label="true alerts" value={Math.round(tp).toLocaleString('en-US')} tone="#2f9e6e" />
        <Stat label="false alerts" value={Math.round(fp).toLocaleString('en-US')} tone="#d9534f" />
        <Stat label="chance an alert is real" value={`${fmt(ppv * 100, ppv < 0.1 ? 2 : 0)}%`} tone={color} />
      </div>
      <PlotChart block={{ t: 'plot', x: [-4, -1], y: [0, 1], xLabel: 'false positive rate (log₁₀)', yLabel: 'chance an alert is real', curves, vlines: [{ x: Math.log10(fpr), label: 'your detector' }] }} />
    </Card>
  )
}

// ── frequency analysis of a Caesar cipher ──────────────────────────────────

const ENGLISH = [8.2, 1.5, 2.8, 4.3, 12.7, 2.2, 2.0, 6.1, 7.0, 0.15, 0.77, 4.0, 2.4, 6.7, 7.5, 1.9, 0.095, 6.0, 6.3, 9.1, 2.8, 0.98, 2.4, 0.15, 2.0, 0.074]
const SAMPLE = 'The security of a system should not depend on keeping its design secret. Auguste Kerckhoffs wrote in 1883 that a cipher must remain safe even if everything about it except the key is public. A simple shift cipher fails this test because the pattern of letter frequencies in the language survives the encryption, and a patient analyst can read it.'

function FreqAnalysis({ color }: { color: string }) {
  const [shift, setShift] = useState(7)
  const plain = SAMPLE.toLowerCase().replace(/[^a-z]/g, '')
  const cipher = plain.split('').map((c) => String.fromCharCode(((c.charCodeAt(0) - 97 + shift) % 26) + 97)).join('')
  const freq = (s: string) => {
    const f = new Array(26).fill(0)
    for (const c of s) f[c.charCodeAt(0) - 97]++
    return f.map((x) => (x / s.length) * 100)
  }
  const fc = freq(cipher)
  // Chi-squared of the cipher text decrypted with each candidate shift against English.
  const chi = Array.from({ length: 26 }, (_, k) => {
    let x = 0
    for (let i = 0; i < 26; i++) {
      const obs = fc[(i + k) % 26]
      x += (obs - ENGLISH[i]) ** 2 / ENGLISH[i]
    }
    return x
  })
  const guess = chi.indexOf(Math.min(...chi))
  const top = Math.ceil(Math.max(...fc, ...ENGLISH) / 5) * 5
  return (
    <Card title="Breaking a Caesar cipher with letter frequencies" color={color} note="A Caesar cipher shifts every letter by a fixed amount, which only slides the letter-frequency histogram sideways. English has a distinctive shape (E, T, A, O, N are common; Z, Q, J are rare), so the shift that best lines the ciphertext histogram up with English is the key. Statistics beat the cipher without ever trying the 26 keys by hand. Modern ciphers are designed so that ciphertext looks uniformly random and carries no such shape.">
      <Slider label="the secret shift (key)" value={shift} min={1} max={25} step={1} onChange={setShift} />
      <p className="font-mono text-xs break-all" style={soft}>{cipher.slice(0, 120)}…</p>
      <svg viewBox="0 0 640 180" className="block h-auto w-full rounded-[var(--radius)] border" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }} role="img" aria-label="Letter frequencies of the ciphertext against English">
        {Array.from({ length: 26 }, (_, i) => {
          const x = 24 + i * 23.2
          return (
            <g key={i}>
              <rect x={x} y={150 - (ENGLISH[i] / top) * 120} width={9} height={(ENGLISH[i] / top) * 120} fill="#8a8478" opacity={0.6} />
              <rect x={x + 9.5} y={150 - (fc[i] / top) * 120} width={9} height={(fc[i] / top) * 120} fill={color} />
              <text x={x + 9} y={166} fontSize={10} textAnchor="middle" fill="var(--ink)">{String.fromCharCode(97 + i)}</text>
            </g>
          )
        })}
        <text x={30} y={16} fontSize={11} fill="#8a8478" fontWeight={700}>■ English</text>
        <text x={100} y={16} fontSize={11} fill={color} fontWeight={700}>■ ciphertext</text>
      </svg>
      <div className="grid grid-cols-2 gap-2">
        <Stat label="best-fit shift (smallest χ²)" value={`${guess} (χ² = ${fmt(chi[guess], 1)})`} tone={guess === shift ? '#2f9e6e' : '#d9534f'} />
        <Stat label="second-best shift" value={`${[...chi.keys()].sort((a, b) => chi[a] - chi[b])[1]} (χ² = ${fmt([...chi].sort((a, b) => a - b)[1], 0)})`} />
      </div>
      <p className="font-mono text-xs break-all">Decrypted with shift {guess}: {cipher.split('').map((c) => String.fromCharCode(((c.charCodeAt(0) - 97 - guess + 26) % 26) + 97)).join('').slice(0, 90)}…</p>
    </Card>
  )
}

// ── how much does testing find? ────────────────────────────────────────────

function Coverage({ color }: { color: string }) {
  const [days, setDays] = useState(10)
  const [vulns, setVulns] = useState(24)
  const [hard, setHard] = useState(0.4)
  const classes = useMemo(
    () => [
      { name: 'Easy (found in about a day)', share: 1 - hard - 0.3 * (1 - hard), rate: 1, color: '#2f9e6e' },
      { name: 'Moderate (about 10 days)', share: 0.3 * (1 - hard), rate: 0.1, color: '#e0a82a' },
      { name: 'Hard (about 100 days)', share: hard, rate: 0.01, color: '#d9534f' },
    ],
    [hard],
  )
  const found = (t: number) => classes.reduce((s, c) => s + vulns * c.share * (1 - Math.exp(-c.rate * t)), 0)
  const curves = classes.map((c) => ({ f: (t: number) => vulns * c.share * (1 - Math.exp(-c.rate * t)), color: c.color, label: c.name, dashed: true }))
  return (
    <Card title="Why 'no findings' is not 'no vulnerabilities'" color={color} note="Model a security test as a search: each vulnerability has a discovery rate, so after t days of effort the chance it has been found is 1 − e^(−rt). Easy flaws are found almost at once; hard ones may need a hundred days. The curves flatten, giving diminishing returns, and whatever the tester has not found is still there. A report is evidence of what was found in the time and scope given, not proof of what is absent. The mix of easy and hard vulnerabilities is an assumption you can change.">
      <PlotChart block={{ t: 'plot', x: [0, 120], y: [0, vulns], xLabel: 'days of testing', yLabel: 'vulnerabilities found', curves: [...curves, { f: found, color: '#000', label: 'total found' }], vlines: [{ x: days, label: `${days} days` }] }} />
      <div className="flex flex-wrap gap-3">
        <Slider label="days of testing" value={days} min={1} max={120} step={1} onChange={setDays} />
        <Slider label="vulnerabilities present" value={vulns} min={5} max={100} step={1} onChange={setVulns} />
        <Slider label="share that are hard to find" value={hard} min={0} max={0.8} step={0.05} onChange={setHard} show={`${Math.round(hard * 100)}%`} />
      </div>
      <div className="grid grid-cols-3 gap-2">
        <Stat label="expected found" value={fmt(found(days), 1)} tone={color} />
        <Stat label="still undiscovered" value={fmt(vulns - found(days), 1)} tone="#d9534f" />
        <Stat label="chance the test finds nothing at all" value={`${fmt(Math.exp(-days * classes.reduce((a, c) => a + vulns * c.share * c.rate, 0)) * 100, 1)}%`} />
      </div>
    </Card>
  )
}
