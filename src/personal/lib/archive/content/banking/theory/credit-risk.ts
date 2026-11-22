import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Lending is the bank’s core business and credit risk, the chance that a borrower does not repay, is its core risk. Banks manage it in layers: they judge borrowers before lending, price the expected loss into the interest rate, set aside provisions for the losses they expect, and hold capital against the losses they cannot predict. This guide explains the standard measures (probability of default, loss given default, exposure at default), expected and unexpected loss, how a credit score or scorecard works, how IFRS 9 provisions are staged, how the Basel capital formula turns correlation into a capital charge, and how loans are priced to cover all of it, with a calculator for each.',
  nutshell: [
    '**Expected loss** \\(EL=PD\\times LGD\\times EAD\\): the average loss, priced into the loan and provisioned.',
    '**Unexpected loss** is the extra loss in a bad year when many borrowers default together; capital covers it. The Basel formula depends on **correlation**: more correlation, more capital.',
    '**Credit scoring** converts borrower data into a probability of default; a score card is often a logistic regression whose points add up.',
    '**IFRS 9** provisions: Stage 1 (12-month expected loss), Stage 2 (lifetime loss after a significant rise in risk), Stage 3 (credit-impaired, e.g. 90+ days past due).',
    '**Loan price** ≈ funding cost + expected loss + operating cost + a charge for the capital held.',
  ],
  sections: [
    {
      id: 'el',
      title: 'Expected loss: PD, LGD and EAD',
      lead: 'Three numbers per loan.',
      blocks: [
        {
          t: 'terms',
          items: [
            { term: 'Probability of default (PD)', def: 'The chance that the borrower fails to pay within a year (or over the loan’s life). A 90-day payment delay is a common definition of default. Typical: prime mortgages 0.2 to 0.5%; unsecured consumer loans 2 to 6%; weak corporates 5 to 15%.' },
            { term: 'Loss given default (LGD)', def: 'The fraction of the exposure lost if default occurs, after recoveries from collateral and collection. Typical: well-secured mortgages 10 to 25%; unsecured loans 60 to 85%; senior corporate loans 40 to 45% (the Basel foundation value).' },
            { term: 'Exposure at default (EAD)', def: 'The amount owed at default, including drawn balance and expected further drawings on credit lines.' },
            { term: 'Maturity (M)', def: 'The loan’s remaining term; longer loans carry more risk.' },
          ],
        },
        {
          t: 'math',
          tex: String.raw`EL=PD\times LGD\times EAD,\qquad \text{portfolio EL}=\sum_i PD_i\,LGD_i\,EAD_i`,
          caption: 'Expected loss for a loan and for a portfolio (the sum of the expected losses).',
          where: [{ sym: 'PD,\\ LGD,\\ EAD', def: 'as defined above; PD and LGD as fractions, EAD in dollars' }],
          syntax: [{ sym: 'PD\\times LGD', say: 'the expected loss rate: the chance of default times the share lost. Effect: a 2% PD and 40% LGD is an expected loss of 0.8% of exposure. Why: expected value of a loss that happens with probability PD and costs LGD.' }, { sym: '\\sum_i', say: 'portfolio expected loss is the sum of the loans’ expected losses, whatever the correlation. Effect: correlation does not change the average but changes the spread. Why: expectation is linear.' }],
          worked: {
            title: 'A small-business loan book',
            steps: ['1,000 loans of S$100,000 each: EAD = S$100 million. PD 2%, LGD 40%.', 'EL = 100,000,000 × 0.02 × 0.40 = S$800,000 a year (0.8% of the portfolio).', 'Expected defaults: 20 loans. If defaults were independent, the number of defaults has standard deviation \\(\\sqrt{1000\\times0.02\\times0.98}=4.4\\), so 20 ± 9 at 95%.', 'If defaults are correlated (a recession), the number can easily be 60.'],
            answer: 'Independent risks diversify away; correlated risks do not. The expected loss is covered by pricing; the swing in a recession is covered by capital.',
          },
        },
      ],
    },
    {
      id: 'ul',
      title: 'Unexpected loss and capital',
      lead: 'The Vasicek model.',
      blocks: [
        { t: 'p', text: 'Basel’s internal-ratings formula comes from a one-factor model by Vasicek (2002): each borrower’s default depends on a common economic factor (the state of the economy) and an individual factor. A single parameter, the **asset correlation** ρ, sets how much borrowers move together. In a very bad year (a 1-in-1,000 event, 99.9th percentile), the share of borrowers who default is far above the average PD, and capital must absorb the difference.' },
        {
          t: 'math',
          tex: String.raw`PD_{99.9}=\Phi\!\left(\frac{\Phi^{-1}(PD)+\sqrt{\rho}\,\Phi^{-1}(0.999)}{\sqrt{1-\rho}}\right),\qquad K=LGD\,\big(PD_{99.9}-PD\big)`,
          caption: 'The conditional default rate in a 1-in-1,000 year, and the capital requirement as a fraction of exposure (without maturity and size adjustments).',
          where: [{ sym: '\\Phi,\\ \\Phi^{-1}', def: 'the standard normal cumulative distribution and its inverse' }, { sym: '\\rho', def: 'asset correlation: about 0.12 to 0.24 for corporates, 0.15 for residential mortgages, 0.03 to 0.16 for retail revolving credit under Basel' }],
          syntax: [
            { sym: '\\Phi^{-1}(PD)', say: 'the default threshold on the standard normal scale. Effect: PD 2% corresponds to −2.05 standard deviations. Why: a borrower defaults when a normally distributed asset value falls below this level.' },
            { sym: '\\sqrt{\\rho}\\,\\Phi^{-1}(0.999)', say: 'the shift from a bad common factor: 3.09 standard deviations times the square root of correlation. Effect: higher correlation shifts more borrowers over the threshold at once. Why: the bad economy pushes everyone down together.' },
            { sym: 'LGD(PD_{99.9}-PD)', say: 'the loss in the bad year beyond the expected loss. Effect: the capital requirement per dollar of exposure. Why: expected losses are already covered by provisions and pricing; capital is for the excess.' },
          ],
          worked: {
            title: 'PD 2%, LGD 40%, correlation 15%',
            steps: ['\\(\\Phi^{-1}(0.02)=-2.054\\); \\(\\Phi^{-1}(0.999)=3.090\\); \\(\\sqrt{0.15}=0.387\\).', 'Numerator: −2.054 + 0.387 × 3.090 = −0.858; denominator \\(\\sqrt{0.85}=0.922\\): ratio −0.930.', '\\(\\Phi(-0.930)=0.176\\): 17.6% of the borrowers default in the 1-in-1,000 year (versus 2% on average).', 'K = 0.40 × (0.176 − 0.02) = 6.2% of exposure.'],
            answer: 'Capital of about 6% of the loan book covers a severe downturn; with a correlation of 25% it would be about 10%. This is the logic behind risk-based capital, and why concentrated or correlated lending (property, a single industry) needs more.',
          },
        },
        { t: 'bank-viz', viz: 'credit-risk' },
      ],
    },
    {
      id: 'score',
      title: 'Scoring borrowers and staging provisions',
      lead: 'From data to PD, and from PD to provisions.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\ln\frac{PD}{1-PD}=\beta_0+\sum_j\beta_j x_j,\qquad PD=\frac{1}{1+e^{-(\beta_0+\sum\beta_jx_j)}}`,
          caption: 'A logistic-regression credit scorecard: the log odds of default are a weighted sum of borrower characteristics.',
          where: [{ sym: 'x_j', def: 'borrower characteristics: income, debt ratio, payment history, age of credit file, utilisation' }, { sym: '\\beta_j', def: 'weights estimated from past loans and their outcomes' }],
          syntax: [{ sym: '\\ln\\frac{PD}{1-PD}', say: 'the log-odds of default. Effect: turns a probability bounded between 0 and 1 into a quantity that can be a weighted sum. Why: logistic regression models the log-odds linearly.' }, { sym: '1/(1+e^{-z})', say: 'the logistic function converts the score back to a probability. Effect: each extra unit of a risky factor multiplies the odds of default by \\(e^{\\beta_j}\\).' }],
          worked: {
            title: 'A tiny scorecard',
            steps: ['\\(\\beta_0=-4.0\\); a high debt-to-income ratio adds +1.2; a missed payment in the last year adds +1.5; a stable job of 3+ years subtracts 0.8.', 'A borrower with high debt and one missed payment, with a stable job: \\(z=-4.0+1.2+1.5-0.8=-2.1\\); PD = 1/(1 + e^{2.1}) = 10.9%.', 'A borrower with none of the risk factors and a stable job: \\(z=-4.8\\): PD = 0.8%.'],
            answer: 'Scorecards add transparency: each factor’s contribution is visible. Modern lenders add machine-learning models, with strict controls for fairness, explainability and model risk.',
          },
        },
        {
          t: 'table',
          head: ['IFRS 9 stage', 'Trigger', 'Provision', 'Interest recognised on'],
          rows: [
            ['Stage 1: performing', 'No significant increase in credit risk since origination', '12-month expected credit loss', 'Gross carrying amount'],
            ['Stage 2: underperforming', 'Significant increase in risk (for example 30+ days past due or a big rise in PD)', 'Lifetime expected credit loss', 'Gross carrying amount'],
            ['Stage 3: impaired', 'Default (for example 90+ days past due) or other evidence of impairment', 'Lifetime expected credit loss', 'Net carrying amount (after provisions)'],
          ],
          caption: 'The IFRS 9 expected-credit-loss model, which replaced the older "incurred loss" approach, so provisions are raised earlier. Singapore banks also follow MAS Notice 612 on credit files, grading and provisioning, with additional general provisions.',
        },
        {
          t: 'math',
          tex: String.raw`r_{\text{loan}}\approx r_{\text{fund}}+\underbrace{PD\cdot LGD}_{\text{expected loss}}+c_{\text{opex}}+\underbrace{K\cdot r_{E}}_{\text{capital charge}}`,
          caption: 'A rough build-up of the interest rate on a loan: funding cost, expected loss, operating cost and the cost of the capital that must be held against it.',
          where: [{ sym: 'K', def: 'capital held as a fraction of the loan' }, { sym: 'r_E', def: 'the cost of equity (the return shareholders require), say 10 to 12%' }],
          syntax: [{ sym: 'PD\\cdot LGD', say: 'the expected loss rate. Effect: a loan with 2% PD and 40% LGD costs 0.8 points a year in losses. Why: the borrowers who repay must pay for those who do not.' }, { sym: 'K\\,r_E', say: 'the capital charge. Effect: 6% capital at a 10% required return adds 0.6 points. Why: shareholders fund the capital buffer and want a return for the risk.' }],
          worked: {
            title: 'Pricing the loan book above',
            steps: ['Funding cost 3.0%; expected loss 0.8%; operating cost 0.6%; capital 6.2% × 10% = 0.62%.', 'Break-even rate: 3.0 + 0.8 + 0.6 + 0.62 = 5.0%.', 'A rate of 5% only breaks even; a profit margin on top gives about 5.5 to 6%.'],
            answer: 'Riskier borrowers pay more because their expected loss and capital charge are larger. Setting rates by risk (risk-based pricing) is why borrowers with strong credit histories get better rates.',
          },
        },
      ],
    },
  ],
  sources: [
    'Vasicek, O. A. (2002). The distribution of loan portfolio value. *Risk*, 15(12).',
    'Basel Committee on Banking Supervision (2006). *International Convergence of Capital Measurement and Capital Standards* (Basel II), internal-ratings-based approach; and the 2017 finalisation.',
    'International Accounting Standards Board (2014). *IFRS 9 Financial Instruments*; Monetary Authority of Singapore, *Notice 612: Credit Files, Grading and Provisioning*.',
    'Thomas, L. C., Edelman, D. B. & Crook, J. N. (2002). *Credit Scoring and Its Applications*. SIAM.',
    'Altman, E. I. (1968). Financial ratios, discriminant analysis and the prediction of corporate bankruptcy. *Journal of Finance*, 23(4).',
    'Bluhm, C., Overbeck, L. & Wagner, C. (2016). *Introduction to Credit Risk Modeling* (2nd ed.). CRC Press.',
  ],
  related: ['banking/theory/capital-and-leverage', 'banking/consumer/credit-scores-and-reports', 'finance/fundamental/ratios', 'finance/quant/risk-measures', 'finance/quant/returns-and-distributions'],
}

export default guide
