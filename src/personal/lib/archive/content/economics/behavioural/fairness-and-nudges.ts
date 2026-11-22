import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'If people cared only about their own money, they would accept any free money offered, give nothing away, and treat a dollar the same whatever account it sat in. Laboratory games and field experiments show otherwise: people punish unfair offers at a cost to themselves, give to strangers, reward trust, sort money into mental pots and are swayed by irrelevant numbers. This guide works through the ultimatum, dictator and trust games and a model of fairness that explains them, then mental accounting and anchoring, and finally choice architecture: how defaults, framing and social norms can be used to help people make the choices they want to make, the idea Richard Thaler and Cass Sunstein called nudging, and its limits.',
  nutshell: [
    'In the **ultimatum game**, offers below about **20%** of the pie are often **rejected**, though rejecting means getting nothing: people pay to punish unfairness.',
    '**Inequity aversion** (Fehr–Schmidt) models people who dislike being behind (and, less, being ahead); it predicts which offers are accepted.',
    '**Mental accounting**: money is not fungible in people’s minds; losing a ticket and losing its cash value feel different.',
    '**Anchoring**: arbitrary numbers pull estimates and prices towards them.',
    '**Defaults** are the most powerful nudge: automatic enrolment raised pension participation from about **37% to 86%** in one firm. Nudges work best when they help people do what they already intend.',
  ],
  sections: [
    {
      id: 'ultimatum',
      title: 'The ultimatum game and inequity aversion',
      lead: 'Rejecting free money.',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'The pie', body: 'The experimenter gives the proposer $10.' },
            { title: 'The offer', body: 'The proposer offers the responder any share s of it.' },
            { title: 'The response', body: 'If the responder accepts, they get s and the proposer gets 10 − s. If the responder rejects, both get nothing.' },
          ],
        },
        {
          t: 'p',
          text: 'A purely selfish responder accepts any positive offer, since something beats nothing, so a selfish proposer offers one cent. In experiments across many countries, the most common offers are 40–50% of the pie, and offers below about 20% are rejected roughly half the time (Camerer, 2003). Responders give up real money to punish what they see as unfair; proposers anticipate it.',
        },
        {
          t: 'math',
          tex: String.raw`U_i = x_i - \alpha\,\max(x_j - x_i, 0) - \beta\,\max(x_i - x_j, 0), \qquad \beta \le \alpha`,
          plain: 'Ernst Fehr and Klaus Schmidt (1999) proposed that people care about their own payoff and about inequality. Being behind someone costs α per dollar of gap (envy); being ahead costs β per dollar (guilt), usually less. With enough envy, a responder prefers both getting nothing to accepting a very unequal split.',
          syntax: [
            { sym: String.raw`x_i, x_j`, say: 'Your payoff and the other player’s.' },
            { sym: String.raw`\alpha`, say: 'Read "alpha": how much you dislike being behind.' },
            { sym: String.raw`\beta`, say: 'Read "beta": how much you dislike being ahead.' },
          ],
          worked: {
            title: 'Which offers does an inequity-averse responder accept?',
            steps: [
              String.raw`Pie $10, offer \(s < 5\). Accepting gives the responder \(U = s - \alpha(10 - s - s) = s - \alpha(10 - 2s)\). Rejecting gives 0.`,
              String.raw`Accept if \(s - \alpha(10 - 2s) \ge 0\), i.e. \(s \ge \dfrac{10\alpha}{1 + 2\alpha}\).`,
              String.raw`\(\alpha = 0.5\): accept offers of at least \(5/2 = \$2.50\). \(\alpha = 1\): at least \(10/3 \approx \$3.33\).`,
              String.raw`\(\alpha = 0\) (selfish): accept anything above 0.`,
            ],
            why: ['the responder’s utility from accepting', 'compare with rejecting', 'moderate and strong envy', 'the standard model as a special case'],
            answer: 'With a mix of people in the population, a proposer who does not know the responder’s α maximises expected payoff by offering a substantial share, matching the 40–50% offers seen in experiments.',
          },
        },
        { t: 'game-lab', viz: 'payoff', preset: 'custom' },
        {
          t: 'cards',
          cols: 3,
          items: [
            { title: 'The dictator game', tag: 'pure giving', body: 'The responder must accept whatever is offered. Selfish proposers would give nothing, yet a meta-analysis of over 600 studies found dictators give about 28% of the pie on average (Engel, 2011).' },
            { title: 'The trust game', tag: 'reciprocity', body: 'An investor sends money to a trustee; it is tripled; the trustee decides how much to return. Selfish players would send and return nothing; most investors send about half and trustees typically return about what was sent, so trust roughly pays.' },
            { title: 'Gift exchange', tag: 'labour markets', body: 'In experimental labour markets, employers who offer above-market wages receive more effort in return (Fehr, Kirchsteiger and Riedl, 1993), a behavioural basis for [efficiency wages](@economics/information/moral-hazard-and-agency).' },
          ],
        },
        {
          t: 'callout',
          tone: 'fact',
          title: 'Fairness and prices',
          text: 'Kahneman, Knetsch and Thaler (1986) found that 82% of people considered it unfair for a hardware store to raise the price of snow shovels the morning after a snowstorm. Firms that raise prices sharply in shortages risk lasting damage to their reputation, one reason prices often do not rise to clear markets after disasters, and a reason anti-gouging laws are popular. See [price controls](@economics/welfare/price-controls).',
        },
      ],
    },
    {
      id: 'accounting',
      title: 'Mental accounting',
      lead: 'A dollar is not always a dollar.',
      blocks: [
        {
          t: 'example',
          title: 'The lost theatre ticket (Tversky and Kahneman, 1981)',
          lines: [
            { label: 'Version 1', text: 'You arrive at the theatre and find you have lost a $10 note. Would you still buy a $10 ticket? 88% said yes.' },
            { label: 'Version 2', text: 'You arrive and find you have lost the $10 ticket you bought earlier. Would you buy another? 54% said no.' },
            { label: 'Why', text: 'Financially the two are identical. But a lost ticket is charged to the "theatre" account, making the show feel like it costs $20; lost cash goes to a general account.' },
          ],
        },
        {
          t: 'math',
          tex: String.raw`\text{saving } \$5 \text{ on a } \$15 \text{ item} = 33\% \qquad\text{vs}\qquad \$5 \text{ on a } \$125 \text{ item} = 4\%`,
          plain: 'People judge savings as proportions, not amounts, so they will travel to save $5 on a cheap item but not on an expensive one, although $5 is $5 and the trip costs the same.',
          syntax: [{ sym: String.raw`\%`, say: 'The saving as a share of the price.' }],
          worked: {
            steps: [
              String.raw`Tversky and Kahneman asked whether people would drive 20 minutes to another store to save $5.`,
              String.raw`On a $15 calculator: 68% would go.`,
              String.raw`On a $125 jacket (same $5 saving): only 29% would.`,
            ],
            why: ['the question', 'a third off feels big', 'four percent feels small'],
            answer: 'The value of 20 minutes should not depend on what you are buying. Judging by percentages leads people to haggle over small purchases and overspend on big ones (the extras on a car or a house).',
          },
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Labels on money', body: 'Households keep low-interest savings for a "holiday fund" while carrying expensive card debt, which fungible money would never do.' },
            { title: 'House money', body: 'Gamblers who are ahead take bigger risks with "the casino’s money" than with their own.' },
            { title: 'Payment decoupling', body: 'Paying by card or subscription separates the pain of paying from the pleasure of consuming, so people spend more than with cash.' },
            { title: 'Windfalls', body: 'Tax refunds and bonuses are spent more freely than the same sum in regular pay.' },
          ],
        },
      ],
    },
    {
      id: 'anchoring',
      title: 'Anchoring',
      lead: 'The pull of an irrelevant number.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{estimate} \approx w \cdot \text{anchor} + (1 - w)\cdot \text{own guess}, \qquad 0 < w < 1`,
          plain: 'People start from a number they have just seen and adjust away from it, but not far enough. A simple way to picture it: their answer is a weighted average of the anchor and the guess they would have made without it.',
          syntax: [{ sym: String.raw`w`, say: 'The weight on the anchor: how strongly it pulls the estimate.' }],
          worked: {
            steps: [
              String.raw`Tversky and Kahneman (1974) spun a wheel rigged to stop at 10 or 65, then asked the percentage of African countries in the UN.`,
              String.raw`Median estimates: 25% after seeing 10, 45% after seeing 65.`,
              String.raw`A 55-point difference in an obviously random number moved estimates by 20 points: an implied anchor weight of about \(20/55 \approx 0.36\).`,
            ],
            why: ['a random anchor', 'the effect', 'the size of the pull'],
            answer: 'Anchors work even when people know they are random. In negotiations, the first number on the table shapes the final price; in shops, a high "was" price makes the sale price feel cheap.',
          },
        },
      ],
    },
    {
      id: 'nudges',
      title: 'Nudges and choice architecture',
      lead: 'Designing the choice, not banning options.',
      blocks: [
        { t: 'p', text: 'Richard Thaler (Nobel 2017) and Cass Sunstein defined a **nudge** as any aspect of how a choice is presented that changes behaviour predictably without forbidding options or significantly changing incentives. Putting fruit at eye level is a nudge; banning sweets is not. They called the approach libertarian paternalism: steer people towards choices they would endorse, while leaving them free to choose otherwise.' },
        {
          t: 'bars',
          title: 'The power of defaults',
          items: [
            { label: 'Opt-in (choose to join)', value: 37, group: 'Pension plan participation, new hires (Madrian and Shea, 2001)' },
            { label: 'Automatic enrolment (choose to leave)', value: 86 },
            { label: 'Opt-in countries (range ~4–28%)', value: 15, group: 'Organ donor consent (Johnson and Goldstein, 2003)' },
            { label: 'Opt-out countries (range ~86–100%)', value: 98 },
          ],
          unit: '%',
          min: 0,
          max: 100,
          caption: 'Defaults change outcomes enormously because of inertia, procrastination, the implied endorsement of the default and loss aversion (leaving it feels like giving something up). The organ-donor bars are rough midpoints of the published ranges. Singapore’s Human Organ Transplant Act has used an opt-out system since 1987.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Easy', tag: 'EAST framework', body: 'Remove friction: pre-fill forms, simplify letters, make the good option the default. Small hassles ("sludge") deter people far more than their cost would suggest.' },
            { title: 'Attractive', tag: 'EAST framework', body: 'Draw attention with salience, personalisation and well-designed rewards.' },
            { title: 'Social', tag: 'EAST framework', body: 'Tell people what others do. Letters telling late taxpayers that most people in their area pay on time raised payment rates in UK trials by several percentage points.' },
            { title: 'Timely', tag: 'EAST framework', body: 'Prompt people when they are most receptive: at a pay rise, a move, a birthday, the start of a year.' },
          ],
        },
        {
          t: 'math',
          tex: String.raw`\text{effect at scale} \ll \text{effect in published trials}: \quad 1.4 \text{ points vs } 8.7 \text{ points}`,
          plain: 'Stefano DellaVigna and Elizabeth Linos (2022) compared 126 trials run by government nudge units in the US with nudges published in academic journals. The average nudge-unit effect was 1.4 percentage points; the academic average was 8.7. Much of the gap reflected publication bias and smaller academic samples.',
          syntax: [{ sym: String.raw`\ll`, say: 'Read "is much less than".' }],
          worked: {
            steps: [
              String.raw`A letter campaign raises vaccination uptake from 50% to 51.4%: a 1.4-point effect.`,
              String.raw`Sent to a million people, that is 14,000 more vaccinations.`,
              String.raw`At a cost of a few cents per letter, the cost per extra vaccination is low.`,
            ],
            why: ['a typical nudge-unit effect', 'scale', 'cost-effectiveness'],
            answer: 'Real-world nudges usually have small effects, but they are cheap, so they can still be highly cost-effective. Defaults are the exception: their effects are large and robust.',
          },
        },
        {
          t: 'dodont',
          do: ['Make the default the option most people would choose with full information and time', 'Test nudges with randomised trials before rolling them out', 'Remove sludge from good choices (benefits, savings, health) and keep a little in harmful ones', 'Be transparent: a nudge you would be embarrassed to disclose is manipulation'],
          dont: ['Use nudges where people’s interests differ from the designer’s (a "dark pattern" that makes cancelling a subscription hard is a nudge too)', 'Expect small nudges to fix problems that need prices, rules or money', 'Treat a striking published effect as the effect you will get at scale'],
        },
      ],
    },
  ],
  sources: [
    'Güth, W., Schmittberger, R., and Schwarze, B. (1982). An experimental analysis of ultimatum bargaining. *Journal of Economic Behavior and Organization*, 3(4), 367–388.',
    'Fehr, E., and Schmidt, K. M. (1999). A theory of fairness, competition, and cooperation. *Quarterly Journal of Economics*, 114(3), 817–868.',
    'Camerer, C. F. (2003). *Behavioral Game Theory*. Princeton University Press.',
    'Engel, C. (2011). Dictator games: A meta study. *Experimental Economics*, 14(4), 583–610.',
    'Thaler, R. H. (1999). Mental accounting matters. *Journal of Behavioral Decision Making*, 12(3), 183–206.',
    'Tversky, A., and Kahneman, D. (1974). Judgment under uncertainty: Heuristics and biases. *Science*, 185(4157), 1124–1131.',
    'Madrian, B. C., and Shea, D. F. (2001). The power of suggestion: Inertia in 401(k) participation and savings behavior. *Quarterly Journal of Economics*, 116(4), 1149–1187.',
    'Johnson, E. J., and Goldstein, D. (2003). Do defaults save lives? *Science*, 302(5649), 1338–1339.',
    'Thaler, R. H., and Sunstein, C. R. (2008). *Nudge*. Yale University Press.',
    'DellaVigna, S., and Linos, E. (2022). RCTs to scale: Comprehensive evidence from two nudge units. *Econometrica*, 90(1), 81–116.',
  ],
  related: ['economics/behavioural/prospect-theory', 'economics/behavioural/present-bias', 'game-theory/start-here'],
}

export default guide
