import type { Guide } from '../../../guide'

const D = (q: number) => 100 - q
const S = (q: number) => 10 + q

const guide: Guide = {
  intro:
    'Governments need revenue, and almost every tax changes behaviour: people buy less of what is taxed, work a little less when wages are taxed, save less when interest is taxed. Two questions follow. Who actually bears the tax, whoever is legally made to pay it? And how much value does it destroy on top of the money it raises? This guide answers both with one diagram and two formulas, shows why the damage grows with the square of the tax rate, why taxing inelastic goods is efficient but often unfair, and applies the ideas to Singapore’s GST and to taxes meant to change behaviour, like sugar levies.',
  nutshell: [
    'A tax drives a **wedge** between the price buyers pay and the price sellers keep.',
    'The **burden** falls mostly on whichever side is **less elastic** (less able to walk away), regardless of who hands over the cash.',
    'Lost trades create a **deadweight loss**: the Harberger triangle, worth about **½ × tax × fall in quantity**.',
    'Deadweight loss grows with the **square** of the tax: double the tax, roughly four times the loss. Broad bases with low rates are efficient.',
    'Revenue first rises with the rate, then falls: the **Laffer curve**.',
  ],
  sections: [
    {
      id: 'wedge',
      title: 'The tax wedge',
      lead: 'One diagram, every per-unit tax.',
      blocks: [
        { t: 'p', text: 'Put a tax of $20 on every unit sold. Sellers now need $20 more than before to supply any given quantity, so the supply curve shifts up by $20. Equivalently, buyers will pay $20 less to the seller for any given quantity, so demand shifts down by $20. Either way the result is identical: a gap of exactly $20 between what buyers pay (Pb) and what sellers keep (Ps), and fewer units traded.' },
        {
          t: 'math',
          tex: String.raw`P_b - P_s = t, \qquad D(Q_t) = P_b, \quad S(Q_t) = P_s \;\Rightarrow\; D(Q_t) - S(Q_t) = t`,
          plain: 'After the tax, the quantity traded is the one at which the vertical gap between the demand and supply curves exactly equals the tax. Buyers pay the demand-curve price at that quantity; sellers keep the supply-curve price.',
          syntax: [
            { sym: String.raw`P_b, P_s`, say: 'The price buyers pay, and the price sellers receive after the tax.' },
            { sym: String.raw`Q_t`, say: 'The quantity traded with the tax.' },
          ],
          where: [{ sym: 't', def: 'The tax per unit' }],
          worked: {
            title: 'A $20 tax',
            steps: [
              String.raw`Demand \(P = 100 - Q\), supply \(P = 10 + Q\). Without the tax: \(Q = 45\), \(P = 55\).`,
              String.raw`With the tax: \((100 - Q) - (10 + Q) = 20\), so \(90 - 2Q = 20\) and \(Q_t = 35\).`,
              String.raw`Buyers pay \(P_b = 100 - 35 = 65\); sellers keep \(P_s = 10 + 35 = 45\).`,
              String.raw`Revenue: \(20 \times 35 = \$700\).`,
              String.raw`Burden: buyers pay $10 more (65 vs 55), sellers keep $10 less (45 vs 55): a 50:50 split.`,
              String.raw`Deadweight loss: \(\tfrac12 \times 20 \times (45 - 35) = \$100\).`,
            ],
            why: ['the untaxed market', 'the gap between the curves equals the tax', 'read each price off its curve', 'tax times units still traded', 'compare with the old price', 'the triangle of lost trades'],
            answer: 'The tax raises $700, split evenly between buyers and sellers here because the curves have equal slopes, and destroys a further $100 of value on the 10 units no longer traded.',
          },
        },
        {
          t: 'plot',
          title: 'The tax wedge, revenue and deadweight loss',
          x: [0, 90],
          y: [0, 100],
          xLabel: 'quantity',
          yLabel: 'price',
          curves: [
            { f: D, label: 'demand' },
            { f: S, label: 'supply' },
            { f: (q: number) => S(q) + 20, label: 'supply + tax', dashed: true },
          ],
          areas: [
            { pts: [[0, 45], [35, 45], [35, 65], [0, 65]], label: 'revenue $700', color: '#2f9e6e' },
            { pts: [[35, 65], [35, 45], [45, 55]], label: 'DWL', color: '#d9534f', at: [41, 55] },
          ],
          segments: [
            { from: [35, 0], to: [35, 65], dashed: true },
            { from: [45, 0], to: [45, 55], dashed: true },
          ],
          points: [
            { x: 35, y: 65, label: 'Pb = 65' },
            { x: 35, y: 45, label: 'Ps = 45' },
            { x: 45, y: 55, label: 'no tax' },
          ],
          caption: 'The green rectangle moves from buyers and sellers to the government: a transfer, not a loss. The red triangle is the surplus on trades that no longer happen: nobody gets it.',
        },
        { t: 'callout', tone: 'myth', title: '"Make the companies pay"', text: 'Whether a tax is legally charged to sellers or to buyers makes no difference to who bears it. Shifting supply up by t or demand down by t gives exactly the same Pb, Ps and quantity. The split is decided by the elasticities, not by the law. Splitting the CPF contribution between employer and employee, for example, does not settle who really pays it: if workers cannot easily change how much they work, much of the employer’s share comes out of wages over time.' },
      ],
    },
    {
      id: 'incidence',
      title: 'Incidence: who really pays',
      lead: 'The less elastic side carries the load.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\text{buyers' share} = \frac{\Delta P_b}{t} = \frac{E_s}{E_s + |E_d|}, \qquad \text{sellers' share} = \frac{|E_d|}{E_s + |E_d|}`,
          plain: 'The side that can more easily walk away (higher elasticity) escapes more of the tax. If buyers would hardly change how much they buy, sellers can pass the tax on and buyers pay most of it. If sellers have no other use for what they produce, they absorb it.',
          syntax: [
            { sym: String.raw`E_s`, say: 'Price elasticity of supply: % change in quantity supplied per 1% change in price.' },
            { sym: String.raw`|E_d|`, say: 'The size of the price elasticity of demand.' },
          ],
          where: [
            { sym: 'ΔPb', def: 'The rise in the price buyers pay' },
            { sym: 't', def: 'The tax per unit' },
          ],
          worked: {
            title: 'Deriving the shares, then a petrol tax',
            steps: [
              String.raw`A small tax raises \(P_b\) by \(\Delta P_b\) and lowers \(P_s\) by \(\Delta P_s\), with \(\Delta P_b + \Delta P_s = t\).`,
              String.raw`Quantity falls by the same amount on both sides: \(|E_d|\,\dfrac{\Delta P_b}{P} = E_s\,\dfrac{\Delta P_s}{P}\).`,
              String.raw`So \(\Delta P_b / \Delta P_s = E_s / |E_d|\), which gives \(\Delta P_b / t = E_s/(E_s + |E_d|)\).`,
              String.raw`Petrol in the short run: \(|E_d| \approx 0.25\), \(E_s \approx 1\).`,
              String.raw`Buyers’ share \(= 1/(1 + 0.25) = 80\%\). A 50-cent tax raises the pump price by about 40 cents.`,
            ],
            why: ['the wedge must equal the tax', 'percentage price changes times elasticities give the same quantity change', 'divide', 'rough short-run estimates', 'plug in'],
            answer: 'Drivers, who cannot quickly stop driving, bear about four-fifths of a fuel tax in the short run. Over years, as people buy efficient cars and move closer to work, demand becomes more elastic and more of the burden shifts back.',
          },
        },
        { t: 'econ-viz', viz: 'tax-wedge' },
        {
          t: 'table',
          head: ['Tax on', 'Less elastic side', 'Who mostly bears it'],
          rows: [
            ['Cigarettes', 'Addicted smokers', 'Smokers'],
            ['Land (fixed supply)', 'Landowners (supply cannot change)', 'Landowners, entirely: the case Henry George made for a land tax'],
            ['Luxury yachts (US, 1990)', 'Buyers (they switch to other luxuries)', 'Yacht builders and their workers; the tax was repealed in 1993'],
            ['Payroll', 'Workers (labour supply is fairly inelastic)', 'Workers, through lower wages, whoever is billed'],
            ['Housing in a city with no room to build', 'Supply', 'Owners and landlords'],
          ],
        },
      ],
    },
    {
      id: 'dwl',
      title: 'The Harberger triangle and the square rule',
      lead: 'Why high rates are disproportionately costly.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`DWL = \tfrac12\, t\, \Delta Q = \frac{t^2}{2(b + d)} \quad\text{for } P = a - bQ,\; P = c + dQ`,
          plain: 'The deadweight loss is a triangle whose height is the tax and whose base is the fall in quantity. The fall in quantity is itself proportional to the tax, so the area grows with the tax squared. Doubling a tax roughly quadruples the damage; four small taxes do far less harm than one big one raising the same money.',
          syntax: [
            { sym: String.raw`\Delta Q`, say: 'The fall in quantity traded caused by the tax.' },
            { sym: String.raw`t^2`, say: 't squared: the source of the square rule.' },
            { sym: String.raw`b, d`, say: 'The slopes of demand and supply. Flatter curves (more elastic) mean a bigger fall in quantity and a bigger loss.' },
          ],
          worked: {
            steps: [
              String.raw`From \(D(Q) - S(Q) = t\): \((a - c) - (b + d)Q_t = t\), so \(Q_t = Q^* - t/(b + d)\).`,
              String.raw`So \(\Delta Q = t/(b + d)\), and \(DWL = \tfrac12 \cdot t \cdot t/(b + d) = t^2 / (2(b + d))\).`,
              String.raw`Here \(b = d = 1\): \(DWL = t^2/4\). A $20 tax gives \(400/4 = 100\).`,
              String.raw`A $40 tax gives \(1600/4 = 400\): four times the loss for twice the tax.`,
            ],
            why: ['quantity falls linearly in t', 'the triangle', 'check against the earlier example', 'the square rule'],
            answer: 'Deadweight loss is proportional to the square of the tax and inversely proportional to how steep the curves are. Taxes on things people cannot easily avoid buying cause less distortion.',
          },
        },
        {
          t: 'table',
          head: ['Tax per unit', 'Quantity', 'Revenue', 'Deadweight loss', 'Loss per $ raised'],
          rows: [
            ['$0', '45', '$0', '$0', ''],
            ['$10', '40', '$400', '$25', '6¢'],
            ['$20', '35', '$700', '$100', '14¢'],
            ['$30', '30', '$900', '$225', '25¢'],
            ['$45', '22.5', '$1,012.50', '$506.25', '50¢'],
            ['$60', '15', '$900', '$900', '$1.00'],
            ['$80', '5', '$400', '$1,600', '$4.00'],
            ['$90', '0', '$0', '$2,025', 'no revenue at all'],
          ],
          caption: 'Same market (demand P = 100 − Q, supply P = 10 + Q). Revenue peaks at a tax of $45; above that, raising the tax loses revenue and destroys ever more surplus.',
        },
        {
          t: 'plot',
          title: 'Revenue and deadweight loss as the tax rises',
          x: [0, 90],
          y: [0, 2100],
          xLabel: 'tax per unit',
          yLabel: '$',
          curves: [
            { f: (t: number) => (t * (90 - t)) / 2, label: 'revenue (the Laffer curve)' },
            { f: (t: number) => (t * t) / 4, label: 'deadweight loss' },
          ],
          vlines: [{ x: 45, label: 'revenue-maximising tax' }],
          caption: 'Revenue is t × Q_t = t(90 − t)/2, a hump. Deadweight loss is t²/4, rising ever faster. On the right of the hump, a tax cut would raise more money and do less damage, the one place where the Laffer argument holds.',
        },
        {
          t: 'metric',
          name: 'marginal excess burden of taxation',
          shows: 'The extra deadweight loss caused by raising one more dollar of revenue. It is what each extra dollar of public spending really costs society, beyond the dollar itself.',
          eli5: 'If raising $1 more in tax makes people waste 30 cents avoiding it, each dollar of spending costs $1.30. A new bridge must be worth that much to be worth building.',
          higher: 'The tax is already high or falls on very elastic activity, so raising more is expensive. Near the top of the Laffer curve it becomes infinite: more tax raises no more money.',
          lower: 'The tax base is broad and hard to avoid (land, a broad consumption tax at a low rate), so extra revenue costs little extra distortion.',
          typical: 'Estimates for broad income and consumption taxes in rich countries usually fall between about 10 and 50 cents per dollar, which is why cost–benefit studies often multiply public costs by around 1.2 to 1.3.',
        },
      ],
    },
    {
      id: 'design',
      title: 'Designing taxes: efficiency, equity and behaviour',
      lead: 'Ramsey, GST, and taxes meant to change behaviour.',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\frac{t_i}{P_i} \;\propto\; \frac{1}{|E_i|} \qquad\text{(the Ramsey inverse-elasticity rule)}`,
          plain: 'To raise a given amount of revenue with the least total deadweight loss, tax each good at a rate inversely proportional to how elastic its demand is. Goods people keep buying whatever the price get high rates; goods people easily give up get low ones.',
          syntax: [
            { sym: String.raw`\propto`, say: 'Read "is proportional to".' },
            { sym: String.raw`t_i/P_i`, say: 'The tax on good i as a share of its price.' },
          ],
          worked: {
            steps: [
              String.raw`Two goods: rice (\(|E| = 0.2\)) and restaurant meals (\(|E| = 1.6\)).`,
              String.raw`Ramsey says \(\dfrac{t_{rice}/P}{t_{meals}/P} = \dfrac{1.6}{0.2} = 8\).`,
              String.raw`So if meals are taxed at 2%, rice should be taxed at 16%.`,
            ],
            why: ['necessities are inelastic, treats are elastic', 'invert the elasticities', 'scale to the revenue needed'],
            answer: 'Efficiency points to heavy taxes on necessities, which fall hardest on the poor. That is the core tension of tax design, and why most countries either use a single broad rate or offset it with transfers.',
          },
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Singapore’s GST', tag: '9% since 2024', body: 'A broad tax on almost all goods and services, raised from 7% to 8% in 2023 and to 9% in January 2024. A single rate on a wide base keeps distortions low. Because poorer households spend more of their income, the government pairs it with GST Vouchers and an Assurance Package of cash, rebates and service-and-conservancy charge offsets weighted towards lower-income households.' },
            { title: 'Ad valorem versus per unit', tag: 'percentage or dollars', body: 'GST is ad valorem, a percentage of the price; excise duty on alcohol or tobacco is often per unit. The wedge analysis is the same; a percentage tax simply makes the wedge wider for pricier products.' },
            { title: 'Corrective (Pigouvian) taxes', tag: 'meant to distort', body: 'A tax on something that harms others (pollution, congestion, smoking near others) is meant to reduce it. Its "deadweight loss" may be negative: it moves the market towards the efficient level. See [externalities](@economics/market-failure/externalities).' },
            { title: 'Sugar levies', tag: 'tax or label?', body: 'The UK’s soft drinks levy (2018) charged manufacturers by sugar content; most reformulated, and sugar per 100 ml in affected drinks fell by roughly a third. Singapore chose Nutri-Grade labels and advertising limits on high-sugar drinks instead, starting in 2022.' },
          ],
        },
        {
          t: 'math',
          tex: String.raw`\text{a subsidy } s: \quad S(Q_s) - D(Q_s) = s, \qquad DWL = \tfrac12\, s\, (Q_s - Q^*)`,
          plain: 'A subsidy is a negative tax. It pushes the price sellers receive above the price buyers pay and expands output beyond the efficient level. The extra units cost more to make than they are worth to buyers, so a subsidy also has a deadweight loss, unless it corrects a positive externality.',
          syntax: [{ sym: String.raw`Q_s`, say: 'The quantity with the subsidy.' }],
          worked: {
            steps: [
              String.raw`A $10 subsidy per unit: \((10 + Q) - (100 - Q) = 10\), so \(Q_s = 50\).`,
              String.raw`Buyers pay \(100 - 50 = 50\); sellers receive \(60\).`,
              String.raw`Cost to the government: \(10 \times 50 = \$500\).`,
              String.raw`Buyers gain \(\tfrac12(45 + 50)(55 - 50) = 237.5\); sellers gain \(\tfrac12(45 + 50)(60 - 55) = 237.5\).`,
              String.raw`Deadweight loss: \(500 - 475 = 25 = \tfrac12 \times 10 \times 5\).`,
            ],
            why: ['supply minus demand equals the subsidy', 'the two prices', 'subsidy times units', 'trapezoids of extra surplus', 'spending minus what buyers and sellers gain'],
            answer: 'The government spends $500 and buyers and sellers gain only $475: the extra 5 units cost more to produce than anyone values them at.',
          },
        },
      ],
    },
  ],
  sources: [
    'Harberger, A. C. (1964). The measurement of waste. *American Economic Review*, 54(3), 58–76.',
    'Ramsey, F. P. (1927). A contribution to the theory of taxation. *Economic Journal*, 37(145), 47–61.',
    'Gruber, J. (2022). *Public Finance and Public Policy* (7th ed.), chapters 19–20. Worth.',
    'Inland Revenue Authority of Singapore. GST rate change 2023 and 2024. iras.gov.sg.',
    'Public Health England (2020). *Sugar reduction: report on progress between 2015 and 2019*.',
  ],
  related: ['economics/welfare/surplus-and-efficiency', 'economics/welfare/price-controls', 'accounting/taxation/gst-and-indirect-taxes'],
}

export default guide
