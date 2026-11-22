import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Wealth is not one number. It is investments, a business, property, insurance, the structures that hold them, the taxes that apply to them, the family that will inherit them and the values that guide how they are used. Private banks organise their advice around the dimensions of a client’s wealth and the way those dimensions interact: a business sale creates a tax question, an inheritance creates a governance question, a move abroad creates a residency question. This guide sets out the main dimensions, the sustainable-spending and generational arithmetic that sit under wealth planning, estate and succession tools in Singapore (wills, trusts, lasting powers of attorney), philanthropy and family governance, and how they fit together in a plan.',
  nutshell: [
    'The **dimensions** of wealth planning: **investments and liquidity, banking and credit, business and real assets, estate and succession, tax and residency, insurance and risk, philanthropy, and family governance**.',
    'A fortune is **spent, taxed and divided**: it lasts only if the real net return exceeds spending, and each generation’s division by its number of heirs must be offset by growth.',
    '**Sustainable spending**: with real return \\(r\\), a fund can sustain withdrawals up to \\(\\tfrac{r}{1+r}\\) of its value each year indefinitely; higher spending depletes it.',
    '**Succession tools**: a **will**, **trusts**, a **Lasting Power of Attorney**, CPF and insurance **nominations**, shareholder agreements and a **family charter**.',
    'Singapore has **no estate duty** (abolished in 2008) and **no capital gains tax**, but assets and heirs abroad may face foreign taxes and forced-heirship rules.',
  ],
  sections: [
    {
      id: 'map',
      title: 'The dimensions at a glance',
      lead: 'Eight questions a wealth plan answers.',
      blocks: [
        {
          t: 'table',
          head: ['Dimension', 'Question', 'Typical tools'],
          rows: [
            ['Investments and liquidity', 'How is wealth invested, and how much is liquid?', 'Investment policy statement, diversified portfolios, cash reserve, private markets'],
            ['Banking and credit', 'How do you finance goals and manage cash?', 'Lombard and mortgage loans, FX, treasury, payments across currencies'],
            ['Business and real assets', 'What is the family’s operating business and property worth, and who runs it?', 'Valuations, shareholder agreements, exit planning, property holding structures'],
            ['Estate and succession', 'Who receives what, when, and who decides?', 'Will, trusts, Lasting Power of Attorney, nominations, foundations'],
            ['Tax and residency', 'Which countries tax which assets and income?', 'Residency planning, treaty analysis, compliance; avoid evasion'],
            ['Insurance and risk', 'What happens to the family if the breadwinner dies or is disabled, or an asset is lost?', 'Life, disability, health, liability and asset insurance; estate liquidity'],
            ['Philanthropy', 'What will the family give, and how?', 'Donor-advised funds, foundations, charitable trusts, giving policy'],
            ['Family governance and education', 'How will the family make decisions, resolve disputes and prepare the next generation?', 'Family constitution, council, annual meetings, financial education for heirs'],
          ],
        },
        { t: 'p', text: 'The value of a coordinated plan is in the interactions. Selling a business creates cash (investments), triggers tax questions, may change residency, creates a need for new governance (who now decides?) and often a philanthropic impulse. A siloed adviser sees one dimension at a time; a good private banker or family-office team sees the whole.' },
      ],
    },
    {
      id: 'maths',
      title: 'The arithmetic of lasting wealth',
      lead: 'Spending, dilution and risk.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`W_{t+1}=(W_t-S)(1+r),\qquad S_{\text{sust}}=\frac{r}{1+r}\,W_t\ \ (\text{perpetual}),\qquad W_0=\sum_{t\ge 1}\frac{S}{(1+r)^{t}}=\frac{S}{r}`,
          caption: 'A fund that earns a real return r and pays a fixed real spending S at the start of each year: when it is sustainable, and the value needed to support spending forever.',
          where: [{ sym: 'W_t', def: 'wealth at the start of year t (in real terms)' }, { sym: 'S', def: 'annual real spending' }, { sym: 'r', def: 'the real return after fees and taxes' }],
          syntax: [{ sym: '(W_t-S)(1+r)', say: 'spend first, then the rest grows. Effect: wealth is unchanged if \\(S=\\tfrac{r}{1+r}W\\). Why: the return on the remainder must replace the amount spent.' }, { sym: 'S/r', say: 'the capital needed to support spending S forever. Effect: at r = 3% real, S$600,000 of spending requires S$20 million. Why: a perpetuity is worth the payment divided by the rate.' }],
          worked: {
            title: 'A S$20 million family fund',
            steps: ['Real return 3.0% after fees and taxes: sustainable spending = 3%/1.03 × 20m = S$583,000 a year (2.9%).', 'The family spends S$1.0 million (5%): wealth falls \\(W_{t+1}=(20-1)\\times1.03=19.57\\) m in year 1, \\(19.13\\) m in year 2, and the fund is exhausted in about 30 years.', 'Add a 1.5% fee drag (net real 1.5%) and sustainable spending falls to S$296,000.'],
            answer: 'A fortune supports a lifestyle only up to about its real return, and fees and taxes come straight out of that return. This is why spending policies (a percentage of wealth, such as 3 to 4%) and cost control matter.',
          },
        },
        {
          t: 'math',
          tex: String.raw`w_T=\frac{W_0\,(1+g)^{T}}{k^{\,T/G}},\qquad \text{break-even growth}\ g_{\text{be}}=k^{1/G}-1`,
          caption: 'Wealth per heir after T years when each generation (every G years) divides among k heirs and the pot grows at net real rate g.',
          where: [{ sym: 'k', def: 'the average number of heirs per generation' }, { sym: 'G', def: 'years per generation (about 25 to 30)' }, { sym: 'g', def: 'net real growth after spending, tax and fees' }],
          syntax: [{ sym: 'k^{T/G}', say: 'the number of ways wealth is divided over T years. Effect: with 3 heirs per generation and 25-year generations, each heir’s share is cut to a third every 25 years. Why: division compounds like growth, in the opposite direction.' }, { sym: 'g_{\\text{be}}=k^{1/G}-1', say: 'the net growth needed to keep wealth per heir constant. Effect: 3 heirs and 25 years need 4.5% net real growth a year; 2 heirs and 25 years need 2.8%. Why: growth must offset the division.' }],
          worked: {
            title: 'Three children each generation',
            steps: ['The break-even growth is \\(3^{1/25}-1=4.5\\%\\) net real growth a year just to maintain the per-heir wealth.', 'At net real 2% (a typical result after fees, taxes and spending), wealth per heir after 50 years: \\(1.02^{50}/3^2=2.69/9=0.30\\) of the starting per-heir level.', 'Hence the "shirtsleeves to shirtsleeves in three generations" proverb: it is arithmetic as well as behaviour.'],
            answer: 'Lasting family wealth needs growth, restraint, a mechanism for pooling (trusts, a family company) and heirs who add to it by work and enterprise. Planning conversations about who will get what, and how decisions will be made, matter as much as investment returns.',
          },
        },
      ],
    },
    {
      id: 'estate',
      title: 'Estate and succession in Singapore',
      lead: 'Wills, trusts and powers of attorney.',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Will', tag: 'basic document', body: 'A written will says who gets what and who administers the estate. Without one, the Intestate Succession Act (or the Administration of Muslim Law Act for Muslims) divides assets by a fixed formula that may not match your wishes. Wills do not govern CPF savings, which follow CPF nominations, or assets held in joint tenancy.' },
            { title: 'Lasting Power of Attorney (LPA)', tag: 'incapacity', body: 'Lets a trusted person make decisions if you lose mental capacity, under the Mental Capacity Act. Without it, family members may have to apply to the court. Relevant at any age for the wealthy.' },
            { title: 'Trusts', tag: 'structures', body: 'A trust holds assets for beneficiaries under a trustee’s control. Uses: control over timing and conditions (for example for minors), asset protection, privacy, continuity across borders and for dependents with special needs. Settlors keep or give up control according to the type.' },
            { title: 'Nominations and insurance', tag: 'non-will assets', body: 'CPF, insurance policies and some provident funds pass by nomination. Review them after any family change; an outdated nomination can override a new will.' },
            { title: 'Estate liquidity', tag: 'cash for the estate', body: 'Estates holding a business or property may need cash for debts, expenses and equalising heirs; life insurance, credit lines or planned sales can provide it.' },
            { title: 'Cross-border estates', tag: 'foreign laws', body: 'Foreign property, foreign-citizen heirs or US and UK tax connections can bring inheritance taxes and forced-heirship rules; Singapore’s absence of estate duty does not cover assets located elsewhere.' },
          ],
        },
        {
          t: 'steps',
          items: [
            { title: 'List assets and how they are held', body: 'Joint, sole, in a company, in a trust, by nomination, in which country.' },
            { title: 'Write down intentions', body: 'Who should receive what, when, and who should decide; including guardians for minors and arrangements for dependents.' },
            { title: 'Put documents in place', body: 'Will, LPA, nominations, shareholder agreements; use professionals for cross-border cases.' },
            { title: 'Communicate', body: 'Tell the family what to expect and why; surprises cause disputes.' },
            { title: 'Review every few years', body: 'After a marriage, birth, death, divorce, a business sale, or a move.' },
          ],
        },
      ],
    },
    {
      id: 'give',
      title: 'Philanthropy and family governance',
      lead: 'Purpose and process.',
      blocks: [
        { t: 'p', text: 'Many wealthy families give. In Singapore, donations to approved Institutions of a Public Character (IPCs) have attracted tax deductions of 250% of the gift (the enhanced rate has been extended in recent budgets), and structures such as donor-advised funds and charitable trusts allow families to give strategically over time. Philanthropy also serves as an organising purpose for family governance: a shared project that involves the next generation.' },
        {
          t: 'levels',
          caption: 'A common family-governance ladder, from informal to formal.',
          items: [
            { name: 'Conversations', body: 'Regular open discussion of money, values and expectations, starting when children are young.' },
            { name: 'Family meetings', body: 'An annual meeting with an agenda: reporting on the family’s wealth, education of the next generation, and decisions.' },
            { name: 'Family charter or constitution', body: 'A written statement of values, rules for the business and wealth, employment of family members, and dispute resolution.' },
            { name: 'Family council and committees', body: 'An elected body that makes decisions, oversees an investment committee and a philanthropy committee.' },
            { name: 'Family office', body: 'A dedicated entity that manages investments, reporting, tax, philanthropy and administration (see the Singapore hub guide).' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Bengen, W. P. (1994). Determining withdrawal rates using historical data. *Journal of Financial Planning*, 7(4).',
    'Williams, R. O. & Preisser, V. (2003). *Preparing Heirs*. Robert Reed Publishers (the three-generation pattern; and critical commentary on the evidence).',
    'Wills Act; Intestate Succession Act; Mental Capacity Act 2008 (Lasting Power of Attorney); Trustees Act; Singapore Statutes Online (sso.agc.gov.sg).',
    'Ministry of Finance Singapore: estate duty abolished from 15 February 2008; Inland Revenue Authority of Singapore: tax deductions for donations to IPCs (iras.gov.sg).',
    'Hughes, J. E. (2004). *Family Wealth: Keeping It in the Family*. Bloomberg Press.',
    'Singapore Academy of Law; Law Society of Singapore: estate-planning guides.',
  ],
  related: ['banking/private/private-banking-overview', 'banking/private/singapore-wealth-hub', 'banking/private/compliance-kyc-and-tax-transparency', 'accounting/taxation/property-and-other-taxes', 'accounting/taxation/international-and-planning'],
}

export default guide
