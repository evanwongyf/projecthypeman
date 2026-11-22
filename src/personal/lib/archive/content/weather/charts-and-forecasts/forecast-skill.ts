import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Is a forecast any good? "It rained, so the forecast was right" is the wrong test. A forecast of "70% chance of rain" cannot be judged on one day, and a forecaster who always says "no" to a rare storm is right 98% of the time and useless. Forecast verification is the discipline of measuring forecast quality properly. This guide covers hits, misses and false alarms and the scores built from them, why accuracy misleads for rare events, the Brier score and skill against climatology and persistence, reliability and calibration, and how to use these ideas to judge a forecast source and to decide whether to trust a forecast.',
  nutshell: [
    'A yes/no forecast has four outcomes: **hit, miss, false alarm, correct negative**. Scores: **POD** = hits/(hits + misses), **FAR** = false alarms/(hits + false alarms), **CSI** = hits/(hits + misses + false alarms).',
    '**Accuracy** (the share of correct forecasts) is misleading for rare events: "never forecast heavy rain" can be 98% accurate.',
    'A probability forecast is scored by the **Brier score** \\(BS=\\frac1N\\sum(p_i-o_i)^2\\) (lower is better); **skill** is the improvement over a simple reference: \\(BSS=1-BS/BS_{\\text{ref}}\\).',
    '**Reliability**: when you say 30%, it should happen about 30% of the time. A good forecast is both **reliable** and **sharp** (it gives probabilities near 0 or 1 when it can).',
    'References: **climatology** (the long-run average) and **persistence** (tomorrow equals today). In the tropics, beating persistence at short range is a real achievement.',
  ],
  sections: [
    {
      id: 'table',
      title: 'Hits, misses and false alarms',
      lead: 'The 2×2 table.',
      blocks: [
        {
          t: 'table',
          head: ['', 'Event observed', 'Event not observed'],
          rows: [['Forecast yes', 'Hit (H)', 'False alarm (F)'], ['Forecast no', 'Miss (M)', 'Correct negative (N)']],
        },
        {
          t: 'math',
          tex: String.raw`\text{POD}=\frac{H}{H+M},\quad \text{FAR}=\frac{F}{H+F},\quad \text{POFD}=\frac{F}{F+N},\quad \text{CSI}=\frac{H}{H+M+F},\quad \text{Bias}=\frac{H+F}{H+M},\quad \text{Acc}=\frac{H+N}{H+M+F+N}`,
          caption: 'The main scores from a contingency table.',
          where: [{ sym: 'H,M,F,N', def: 'counts of hits, misses, false alarms and correct negatives' }],
          syntax: [
            { sym: 'H/(H+M)', say: 'probability of detection: of all events that happened, how many were forecast. Effect: a high POD means few misses. Why: the denominator is the number of actual events.' },
            { sym: 'F/(H+F)', say: 'false alarm ratio: of all forecasts of an event, how many were wrong. Effect: a high FAR erodes trust ("crying wolf"). Why: the denominator is the number of forecast events.' },
            { sym: 'H/(H+M+F)', say: 'critical success index: hits among all cases where an event was forecast or observed, ignoring correct negatives. Effect: unlike accuracy, it is not inflated by the many easy "no event" days. Why: for rare events, N dominates accuracy.' },
            { sym: '(H+F)/(H+M)', say: 'frequency bias: the number of times an event was forecast relative to how often it occurred. Effect: above 1 means over-forecasting. Why: a forecaster can raise POD by predicting more, at the cost of FAR.' },
          ],
          worked: {
            title: 'Forecasting heavy rain on 1,000 days',
            steps: ['There are 20 heavy-rain days. The forecaster hits 12, misses 8, and gives 10 false alarms: N = 1,000 − 12 − 8 − 10 = 970.', 'POD = 12/20 = 0.60; FAR = 10/22 = 0.45; CSI = 12/30 = 0.40; Bias = 22/20 = 1.1.', 'Accuracy = (12 + 970)/1,000 = 98.2%. A forecast of "never" scores (0 + 980)/1,000 = 98.0%.'],
            answer: 'Accuracy of 98.2% looks superb but is only 0.2 points better than saying "no" every day, when the real value of the forecast is in catching 60% of the storms. For rare events use POD, FAR and CSI.',
          },
        },
      ],
    },
    {
      id: 'brier',
      title: 'Probability forecasts and the Brier score',
      lead: 'Scoring a percentage.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`BS=\frac1N\sum_{i=1}^{N}(p_i-o_i)^2,\qquad BSS=1-\frac{BS}{BS_{\text{ref}}},\qquad BS_{\text{clim}}=\bar o\,(1-\bar o)`,
          caption: 'The Brier score for probability forecasts of an event, the Brier skill score against a reference, and the score of a climatological forecast.',
          where: [{ sym: 'p_i', def: 'the forecast probability on occasion i (0 to 1)' }, { sym: 'o_i', def: 'what happened: 1 if the event occurred, 0 if not' }, { sym: '\\bar o', def: 'the observed base rate (climatological frequency) of the event' }],
          syntax: [
            { sym: '(p-o)^2', say: 'the squared error. Effect: forecasting 0.9 and having it rain scores 0.01; forecasting 0.9 and having it stay dry scores 0.81. Why: squaring penalises confident mistakes heavily.' },
            { sym: 'BS_{\\text{clim}}=\\bar o(1-\\bar o)', say: 'what you get by always forecasting the average frequency. Effect: it is the reference to beat: if rain occurs on 40% of days, always saying 40% scores 0.24. Why: the expected squared error of a constant forecast is the variance of the outcome.' },
            { sym: 'BSS=1-BS/BS_{\\text{ref}}', say: 'the fraction of the reference score removed. Effect: 0 means no better than the reference, 1 is perfect, and negative is worse. Why: it puts forecasts on different days or places on a common scale.' },
          ],
          worked: {
            title: 'Rain forecasts for the afternoon',
            steps: ['Afternoon showers occur on 40% of days: \\(BS_{\\text{clim}}=0.4\\times0.6=0.24\\).', 'A forecaster achieves BS = 0.15: \\(BSS=1-0.15/0.24=0.375\\): a 37.5% improvement on climatology.', 'A forecaster who always says 50%: \\(0.4(0.5)^2+0.6(0.5)^2=0.25\\): slightly worse than climatology (BSS = −0.04).'],
            answer: 'The Brier score rewards both calibration and sharpness: a forecaster who uses 10% and 90% when justified scores far better than one who hedges at 50%.',
          },
        },
        { t: 'wx-viz', viz: 'brier' },
        { t: 'callout', tone: 'note', title: 'A "proper" score', text: 'The Brier score is proper: the forecaster’s best expected score comes from stating their true belief. The lab shows that the expected score is lowest when the stated probability equals the real frequency, and that exaggerating confidence is penalised.' },
      ],
    },
    {
      id: 'rel',
      title: 'Reliability, sharpness and persistence',
      lead: 'Quality has several dimensions.',
      blocks: [
        {
          t: 'table',
          head: ['Property', 'Question', 'Example'],
          rows: [
            ['Reliability (calibration)', 'When the forecast says p, does the event occur with frequency p?', 'Of 100 days with "30% chance of rain", rain falls on about 30'],
            ['Resolution', 'Do forecasts separate different situations?', 'Days with 80% have much more rain than days with 10%'],
            ['Sharpness', 'Do forecasts go toward 0 or 100% when justified?', 'A forecast that always says 40% is perfectly reliable (in a 40% climate) but has no sharpness and no skill'],
            ['Skill', 'Is it better than a reference?', 'Better than climatology and persistence'],
            ['Discrimination', 'Can it tell wet days from dry days?', 'Measured by ROC curves'],
          ],
        },
        {
          t: 'math',
          tex: String.raw`BS=\underbrace{\tfrac1N\sum_k n_k(\bar o_k-p_k)^2}_{\text{reliability}}-\underbrace{\tfrac1N\sum_k n_k(\bar o_k-\bar o)^2}_{\text{resolution}}+\underbrace{\bar o(1-\bar o)}_{\text{uncertainty}}`,
          caption: 'The Murphy decomposition of the Brier score, grouping forecasts into bins k with forecast probability p_k and observed frequency ō_k.',
          where: [{ sym: 'n_k', def: 'number of forecasts in bin k' }, { sym: '\\bar o_k', def: 'observed frequency of the event in bin k' }],
          syntax: [{ sym: '\\text{reliability}', say: 'the average gap between stated and observed frequencies. Effect: smaller is better. Why: it measures calibration error.' }, { sym: '\\text{resolution}', say: 'how far the observed frequencies in the bins differ from the overall average. Effect: larger is better; it is subtracted. Why: it measures the forecast’s ability to separate situations.' }, { sym: '\\bar o(1-\\bar o)', say: 'the inherent unpredictability of the event; no forecaster can change it.' }],
          worked: {
            title: 'A calibrated but useless forecast',
            steps: ['A forecaster always says 40% in a 40% climate: reliability = 0 (perfect); resolution = 0 (no discrimination).', 'BS = 0 − 0 + 0.24 = 0.24: no better than climatology.'],
            answer: 'Reliable is not the same as useful. Skill requires resolution as well.',
          },
        },
        { t: 'p', text: '**Persistence** is a surprisingly tough baseline for a few hours: "it will do the same as it is doing now". A skilled nowcast must beat it. For next-day forecasts in Singapore the baseline is often **climatology of the month and time of day**, since afternoon storms are so frequent; the added value of a forecast is in saying *which* afternoons and *where*. Remember also that forecast value depends on the user: the same forecast can be excellent for a planner who can act on probabilities and poor for a user who needs certainty.' },
      ],
    },
  ],
  sources: [
    'Brier, G. W. (1950). Verification of forecasts expressed in terms of probability. *Monthly Weather Review*, 78(1).',
    'Murphy, A. H. (1973). A new vector partition of the probability score. *Journal of Applied Meteorology*, 12(4).',
    'Jolliffe, I. T. & Stephenson, D. B. (Eds.) (2012). *Forecast Verification: A Practitioner’s Guide in Atmospheric Science* (2nd ed.). Wiley.',
    'Murphy, A. H. (1993). What is a good forecast? An essay on the nature of goodness in weather forecasting. *Weather and Forecasting*, 8(2).',
    'Wilks, D. S. (2019). *Statistical Methods in the Atmospheric Sciences* (4th ed.). Elsevier.',
  ],
  related: ['weather/charts-and-forecasts/models-and-ensembles', 'weather/singapore/forecasts-and-warnings', 'finance/quant/backtesting-and-overfitting', 'cybersecurity/maths-and-reasoning/security-maths'],
}

export default guide
