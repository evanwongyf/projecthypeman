import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Professional investors do not rely on insight alone; they rely on process, a sequence of steps that makes good decisions more likely and catches mistakes before they cost money. The process has stages: finding ideas, a quick first pass to reject most of them, a deep dive on the few that survive, a valuation with a range of scenarios, a pre-mortem that asks what could go wrong, a decision about the size of the position, and a plan for monitoring and for selling. This guide describes each stage, gives a worked example of a scenario-weighted valuation, shows the pre-mortem and the decision journal, and explains why checklists, which are boring, are among the most effective tools an investor has.',
  nutshell: [
    'The stages: **idea → first pass → deep dive → valuation → pre-mortem → decision and size → monitoring → sell discipline**.',
    'Most ideas should be **rejected in minutes**: the first pass checks the business, the balance sheet, the management and the price.',
    'Value with **scenarios**: bull, base and bear with probabilities; the expected return is the probability-weighted average (for example 12.5% in the worked example).',
    'A **pre-mortem** (Gary Klein) imagines that the investment has failed a year from now and asks why; it surfaces risks that optimism hides.',
    'A **decision journal** records the reasons, the expected outcome and the probability *before* the result is known, so that you can learn from the process and not the outcome.',
  ],
  sections: [
    {
      id: 'stages',
      title: 'The stages',
      lead: 'From idea to decision.',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: '1. Generate ideas', body: 'Screens, industry reading, annual reports, insider buying, 52-week lows, other investors’ holdings. Keep a watchlist and a reason for each name.' },
            { title: '2. The first pass (15 minutes)', body: 'Does it make money? Is the balance sheet sound? Who owns it and who runs it? Is the price plausible? Reject most names here.' },
            { title: '3. The deep dive', body: 'Read several years of reports, understand the business model and unit economics, the competitive position and the capital allocation; write a one-page thesis.' },
            { title: '4. Valuation', body: 'Estimate a range of values with scenarios and a margin of safety; compare with the price (see the reverse DCF guide).' },
            { title: '5. The pre-mortem', body: 'Assume the position has lost 40%. Write down the five most likely reasons. Decide which ones you can monitor.' },
            { title: '6. Decide and size', body: 'Buy only if the expected return and margin of safety justify the risk; size by conviction and by what a loss would do to the portfolio.' },
            { title: '7. Monitor', body: 'Track the few indicators that would show the thesis is wrong (margins, market share, debt, management actions).' },
            { title: '8. Sell rules', body: 'Write in advance what would make you sell: the thesis breaks, the price exceeds value, or a better idea needs the money.' },
          ],
        },
        {
          t: 'math',
          tex: String.raw`\mathbb{E}[R]=\sum_i p_i R_i,\qquad \text{margin of safety}=1-\frac{P}{V}`,
          caption: 'The scenario-weighted expected return and the margin of safety of a price P below an estimated value V.',
          where: [{ sym: 'p_i,\\ R_i', def: 'the probability and return in scenario i (probabilities sum to 1)' }, { sym: 'P,\\ V', def: 'the market price and the estimated intrinsic value' }],
          syntax: [{ sym: '\\sum_i p_iR_i', say: 'the average over scenarios. Effect: a large possible loss in the bear case pulls the expectation down even if the base case is good. Why: expected value weights each outcome by its likelihood.' }],
          worked: {
            title: 'A three-scenario valuation',
            steps: ['Bull (25%): +60%; base (50%): +15%; bear (25%): −40%.', 'E[R] = 0.25 × 60 + 0.5 × 15 + 0.25 × (−40) = 15 + 7.5 − 10 = +12.5%.', 'If the price is S$40 and the base-case value is S$55, the margin of safety is 1 − 40/55 = 27%.'],
            answer: 'The expected return is positive but the range is wide (−40% to +60%): the position should be sized so that the bear case is survivable, for example no more than 3% to 5% of the portfolio. The probabilities are judgement, so keep them honest by writing them down before you buy.',
          },
        },
        {
          t: 'bars',
          title: 'The worked example: returns by scenario',
          items: [{ label: 'Bull (25%)', value: 60 }, { label: 'Base (50%)', value: 15 }, { label: 'Bear (25%)', value: -40 }, { label: 'Expected value', value: 12.5 }],
          unit: '%',
          zero: true,
          min: -50,
          max: 70,
          decimals: 1,
        },
      ],
    },
    {
      id: 'tools',
      title: 'Checklists, pre-mortems and journals',
      lead: 'Tools against the usual mistakes.',
      blocks: [
        {
          t: 'checklist',
          items: [
            'What does the company sell, to whom, and why do they pay?',
            'How does it make money per unit, and does that improve with scale?',
            'Has revenue, margin and free cash flow been stable or growing for 5 years?',
            'Net debt to EBITDA and interest cover: can it survive a bad year?',
            'Who runs it, how are they paid, do they own shares, how did they use past capital?',
            'What is priced in? (P/E, EV/EBITDA, implied growth in a reverse DCF)',
            'What are the three biggest risks and what would show that they are happening?',
            'What is my edge here: better information, analysis or temperament?',
            'What is my range of value, and what is the position size if the bear case occurs?',
          ],
        },
        {
          t: 'example',
          title: 'A decision journal entry',
          lines: [
            { label: 'Date, name, price', text: '10 March, Company X, S$40.' },
            { label: 'Thesis (one paragraph)', text: 'A market leader in a growing niche, with 20% ROE, net cash and a new product that could add 5% to revenue; priced at 12× earnings.' },
            { label: 'Probabilities', text: 'Bull 25%, base 50%, bear 25%; expected return +12.5%; I expect to be right about 60% of the time on ideas like this.' },
            { label: 'What would make me wrong', text: 'Margins below 15% for two quarters; loss of a top-3 customer; a large acquisition.' },
            { label: 'Position and sell rule', text: '3% of the portfolio; review at S$55 or if the thesis breaks.' },
            { label: 'Mood and state', text: 'Calm; no recent big win or loss; not rushed.' },
          ],
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Outcome versus process', tag: 'learning', body: 'A good decision can lose and a bad one can win. Judge the decision by the reasoning and the information at the time, then check outcomes over many decisions.' },
            { title: 'Base rates', tag: 'anchor on the outside view', body: 'Before the story, ask how often companies like this achieve what is expected. Most growth forecasts fade towards the average.' },
            { title: 'Pre-mortem', tag: 'prospective hindsight', body: 'Gary Klein’s technique: imagine the project has failed and write down why. Research suggests that it improves the identification of risks by about 30%.' },
            { title: 'Checklists', tag: 'the aviation lesson', body: 'Atul Gawande’s work on checklists shows that simple lists reduce errors by experts; investment checklists catch omissions rather than add knowledge.' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Klein, G. (2007). Performing a project premortem. *Harvard Business Review*, 85(9), 18–19.',
    'Gawande, A. (2009). *The Checklist Manifesto*. Metropolitan Books.',
    'Mauboussin, M. J. (2012). *The Success Equation*. Harvard Business Review Press (skill and luck, base rates).',
    'Klarman, S. (1991). *Margin of Safety*. HarperBusiness.',
  ],
  related: ['finance/investing-analysis/company-analysis-workflow', 'finance/investing-analysis/reverse-dcf-and-expectations', 'finance/foundations/behavioural'],
}

export default guide
