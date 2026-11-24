import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'One round, start to finish, in transcript, with what the judge wrote in the margin at each point. The motion is a policy motion in the three-speaker format, so the structure transfers to Asian Parliamentary, World Schools and Australs; the margin notes are written the way an adjudicator actually thinks, which is clash by clash rather than speech by speech.',
  nutshell: [
    'The motion: **This House would ban private cars from city centres.**',
    'Watch the flow rather than the rhetoric: three clashes form by the third speech, and the round is decided on two of them.',
    'Proposition wins the throughput clash in speech three and loses the enforcement clash until speech five.',
    'The decisive moment is not an argument at all: it is the comparison opposition fails to make in their reply.',
    'Margin notes in brackets are the judge’s, written live. Nothing is added afterwards.',
  ],
  sections: [
    {
      id: 'setup',
      title: 'The round',
      blocks: [
        {
          t: 'table',
          head: ['', 'Detail'],
          rows: [
            ['Motion', 'This House would ban private cars from city centres.'],
            ['Format', 'Three speakers a side, 7-minute substantives, 4-minute replies, points of information allowed.'],
            ['Prep', '30 minutes, no internet.'],
            ['Panel', 'Chair plus two, deciding on the material in the room.'],
            ['Result', 'Proposition, 2–1. The dissent is explained at the end, because it turns on a genuinely arguable weighing call.'],
          ],
        },
        { t: 'callout', tone: 'note', title: 'How to read this page', text: 'Read the transcript lines first, with the margin notes covered, and write your own flow. Then read the notes. The gap between what you thought mattered and what the judge recorded is the thing this page is for.' },
      ],
    },
    {
      id: 'first-prop',
      title: 'First Proposition',
      blocks: [
        {
          t: 'example',
          title: 'Transcript, with margin notes',
          lines: [
            { label: '0:00', text: '"Every weekday morning, the fastest way to cross this city centre is to walk. That is not a joke about traffic; it is a fact about how we allocate a scarce public good, and we think it is the wrong allocation."' },
            { label: '[judge]', text: 'Good opening: frames the debate as allocation of a scarce good rather than as hating cars. Writing that framing down.' },
            { label: '0:25 Model', text: '"Our model: in cities over 500,000 people, the central zone — roughly the area inside the inner ring road — is closed to private cars between 7am and 7pm. Exemptions by permit for disabled drivers, residents within the zone, emergency services and commercial vehicles. Enforced by existing number-plate cameras, with a fine at the level of a parking penalty. Phased over three years, beginning with two pilot cities, with a statutory review after year two."' },
            { label: '[judge]', text: 'Model is specified: actor, scope, hours, exemptions, enforcement, timeline, review. That pre-empts a lot. Note "phased" and "review" — opposition will have to attack a reversible policy.' },
            { label: '1:10 Line', text: '"Road space is a scarce public good, and we currently allocate it to its lowest-value user."' },
            { label: '[judge]', text: 'Team line. Short, and opposition has to deny it. Good.' },
            { label: '1:25 Argument 1', text: '"First, throughput. A street has fixed capacity. A private car occupies around 10 square metres and carries, on average across urban journeys, fewer than two people. A bus occupies three times the space and carries forty. Every car in front of a bus delays forty people to move one or two. Remove the lowest-occupancy vehicles and everyone else moves faster, without building anything."' },
            { label: '[judge]', text: 'Mechanism, not assertion. Occupancy numbers unsourced but plausible and uncontested so far. Flowing as "road space zero-sum".' },
            { label: '3:00 POI taken', text: 'Opposition: "Does your model do anything for the suburban nurse on a 6am shift?" — "Yes: she is outside the hours, and if her shift moves, the permit scheme covers shift workers at hospitals inside the zone. But I accept the honest version of your question: some journeys get worse. We will tell you which, and why the trade is worth it."'},
            { label: '[judge]', text: 'Well handled. Conceded the real cost in the first speech, which makes the later weighing more credible. Opposition got a fair answer and will need to press harder than that.' },
            { label: '3:40 Argument 2', text: '"Second, who gains. The people who do not own cars in this country are disproportionately poorer, older and younger. They are the people on the bus that is stuck behind the car. So this is not a policy about the environment; it is a policy about whose time we are currently spending."' },
            { label: '[judge]', text: 'Distributional impact, and it is the stronger of the two arguments. Named group, named harm. Flowing as "who bears the cost".' },
            { label: '5:40 Argument 3', text: '"Third, the counterfactual. Nothing about doing nothing is neutral. Congestion is rising, so the status quo is itself a policy — one that allocates by who is willing to sit in traffic longest, which is a test of patience and flexibility that favours the already comfortable."' },
            { label: '[judge]', text: 'Useful. Pre-empts "the status quo needs no defence". Thin on development, but it is third, so that is a reasonable choice.' },
            { label: '6:45 Close', text: '"Scarce good; lowest-value user; and the people paying for that allocation are not the people making it."' },
          ],
        },
      ],
    },
    {
      id: 'first-opp',
      title: 'First Opposition',
      blocks: [
        {
          t: 'example',
          title: 'Transcript, with margin notes',
          lines: [
            { label: '0:00 Rebuttal', text: '"We accept the arithmetic about road space. What we deny is that removal is what their policy achieves. Traffic is not destroyed by a ban; it is displaced. The cars appear on the ring road, where the buses also run, and the journey that gets worse belongs to the same bus passenger they claim to be helping."' },
            { label: '[judge]', text: 'Strong. Displacement is the right answer to the throughput argument and it engages the mechanism rather than the examples. Flowing on the same line.' },
            { label: '1:20', text: '"Second, their exemption list is their own harm sheet. Residents, disabled drivers, commercial vehicles, emergency services, shift workers at hospitals — by the time you have exempted everyone with a real need, you have either exempted most of the traffic or you have left someone out. Which is it?"' },
            { label: '[judge]', text: 'This is a dilemma, and it is the sharpest thing said so far. Proposition must pick a horn. Flowing as "enforcement and exemptions".' },
            { label: '2:30 Counter-model', text: '"We are not defending the status quo. We would price the zone rather than close it: a daily charge, with the revenue ring-fenced for bus frequency. That gets most of their throughput gain, keeps the journeys that cannot be made any other way, and funds the alternative instead of assuming it."' },
            { label: '[judge]', text: 'Counter-model, and a good one: it concedes the harm and competes on mechanism. Now this is a debate about ban versus charge, not about cars versus no cars. Noting that both sides now carry a mechanism burden.' },
            { label: '3:40 Argument 1', text: '"Our first argument is about who actually has substitutes. Their case assumes a bus you can take instead. In a dense city with a metro that is true. In the cities that most need this policy — mid-sized, sprawling, with hourly buses from the outer estates — it is not. A ban in those cities does not shift people onto transport; it shifts them out of the centre entirely, and the shops they were going to close."' },
            { label: '[judge]', text: 'Good: attacks the substitution premise, which is what the throughput argument rests on. This is the live clash now.' },
            { label: '5:10 Argument 2', text: '"Our second is about enforcement by camera. A camera does not know whether the driver in front of it is a carer, a delivery driver on a one-off job, or a commuter. Permits are administered by the people with the time and the literacy to apply for them. Every scheme like this transfers an administrative burden onto exactly the people least able to carry it."' },
            { label: '[judge]', text: 'Second-order distributional argument. Nicely turns proposition’s own distributional framing back on them. Flowing as a turn under "who bears the cost".' },
            { label: '6:30 Close', text: '"They are right that road space is scarce. They are wrong that a ban removes demand, and wrong that the people they want to help are the people their policy protects."' },
          ],
        },
        { t: 'callout', tone: 'fact', title: 'Where the round stands after two speeches', text: 'Three clashes exist: (1) does throughput actually rise, or is traffic displaced; (2) do the affected drivers have substitutes; (3) who bears the administrative and economic cost. Proposition leads on nothing yet, because the displacement and substitution answers landed and have not been met.' },
      ],
    },
    {
      id: 'second',
      title: 'Second speeches',
      blocks: [
        {
          t: 'example',
          title: 'Second Proposition, with margin notes',
          lines: [
            { label: '0:00 Rebuttal: displacement', text: '"Displacement is real and it is smaller than they need it to be. Two things. First, a third of central car journeys in comparable cities are discretionary — shopping and leisure trips that are retimed or re-routed, not relocated. Second, displaced journeys move to a ring road built for through traffic, which has capacity the centre does not. So the comparison is not removal against displacement; it is a congested street with no alternative use against a road designed for exactly this."' },
            { label: '[judge]', text: 'That answers it, and specifically. Proposition now ahead on clash 1 — though "a third" is unsourced and opposition should press it.' },
            { label: '1:40 Rebuttal: the dilemma', text: '"On exemptions, we pick a horn, and we pick it openly. We exempt need and we do not exempt convenience, and yes, that means a small number of hard cases are worse off. That is what every allocation of a scarce good looks like. The question is not whether anyone loses; it is who."' },
            { label: '[judge]', text: 'Good. Conceding the horn rather than wriggling, and converting it into their own framing. Clash 2 narrowing.' },
            { label: '3:00 Rebuilding', text: '"On substitutes, they described a city with hourly buses from outer estates. So does our model: it is phased, and it begins with pilot cities, and the statutory review at year two exists precisely so that a city where the alternative has not arrived does not proceed. They are debating a policy we did not propose."' },
            { label: '[judge]', text: 'The phasing in the first speech is now doing real work. This is why specified models win: the answer was already in the model.' },
            { label: '4:20 New material', text: '"Our new argument is about induced demand, and it runs in both directions. Road capacity creates traffic: widen a road and it fills. The reverse also holds, and it is measured — remove capacity and a portion of the traffic does not reappear anywhere, because the journey is no longer made by car at all. Their charge keeps the capacity and prices it, which means the demand stays and only the poorer drivers are removed."' },
            { label: '[judge]', text: 'Strong, and it attacks the counter-model directly: the charge sorts by willingness to pay, the ban does not. First real comparison between ban and charge. Flowing as clash 4: "ban versus charge".' },
            { label: '6:30 Close', text: '"A charge asks who can afford the centre. A ban asks what the centre is for."' },
          ],
        },
        {
          t: 'example',
          title: 'Second Opposition, with margin notes',
          lines: [
            { label: '0:00 Frontline', text: '"Their phasing answer is a good one and it costs them something: if the policy only proceeds where the alternative already exists, then in the cities with the worst congestion and the worst buses, their policy does nothing for years. They have bought safety by shrinking the benefit."' },
            { label: '[judge]', text: 'Excellent. Turns the phasing concession into a cost. This is what frontlining should look like.' },
            { label: '1:30 On induced demand', text: '"Induced demand is real and it cuts against them too. Removing capacity suppresses journeys — including the journeys of the independent trader who drives in twice a week with stock, and the family that stops coming to the centre at all. Suppressed demand is not a free gain; it is a transaction that no longer happens."' },
            { label: '[judge]', text: 'Fair answer, well framed. But no number attached, and proposition had a mechanism. Slight edge still proposition on clash 4.' },
            { label: '3:00 New material', text: '"Our new argument is about the centre as an economy. Retail footfall in mid-sized centres is already falling against out-of-town and online. A ban is a fixed cost imposed on the marginal shopper at the worst possible moment, and the business that closes does not reopen when the review happens at year two. Their policy is reversible on paper and irreversible in the shuttered unit."' },
            { label: '[judge]', text: 'That is the best opposition material in the round: it takes proposition’s reversibility shield and says the harm is not reversible even if the policy is. Flowing as clash 5: "irreversibility of the local economy".' },
            { label: '5:30', text: '"And note what they have not told you: how much the throughput gain is worth, in minutes, to the bus passenger. We have told you what closes. They have told you something improves."' },
            { label: '[judge]', text: 'Sharp. True of the round so far, and it is a weighing challenge rather than an argument — which makes it hard to answer with more analysis.' },
          ],
        },
      ],
    },
    {
      id: 'third',
      title: 'Third speeches',
      blocks: [
        {
          t: 'example',
          title: 'Third Proposition, with margin notes',
          lines: [
            { label: '0:00 Roadmap', text: '"Three questions in this debate. Does throughput rise; who bears the cost; and is a ban better than a charge. I will take them in that order, and I will tell you in advance that if you think the third goes to them, we still win on the second."' },
            { label: '[judge]', text: 'That is a proper roadmap with an even-if built into it. Writing those three headings on my page. Note: the third speaker has just told me how to structure my decision.' },
            { label: '0:40 Clash 1', text: '"Throughput. Their best version was displacement; our answer was that a third of journeys are discretionary and the rest move to a road built for them. They did not contest either limb in their second speech — they moved to suppressed demand instead, which is a different argument, and one that concedes the throughput gain exists."' },
            { label: '[judge]', text: 'Accurate characterisation of the flow, and correct: opposition did shift. Clash 1 to proposition.' },
            { label: '2:10 Clash 2', text: '"Who bears the cost. Their strongest material: administrative burden falls on the least able, and shuttered units do not reopen. We accept both as real and we say they are smaller and more recoverable than the harm they replace. A permit scheme is a form you fill in once; the status quo is forty people on a bus losing eleven minutes twice a day, every day, for years. One is an administrative cost with a fix — pre-registered permits, automatic for blue badges. The other has no fix inside their model at all, because their charge keeps the cars."' },
            { label: '[judge]', text: 'There is the comparison opposition demanded, and with a number attached. This is the moment the round turns. Clash 2 to proposition, narrowly.' },
            { label: '4:30 Clash 3', text: '"Ban versus charge. Their mechanism sorts by willingness to pay, which means the people removed from the centre are the poorer drivers, and the people who remain are the ones who were never the problem. Ours removes the lowest-value use regardless of income. If their distributional argument is sincere — and I think it is — it is an argument for our model and against theirs."' },
            { label: '[judge]', text: 'Clean, and it uses their own framing. But it is also the clash where their retail argument lives, and that argument has not been answered on irreversibility. Calling clash 3 close.' },
            { label: '6:20 Close', text: '"Even if you prefer their charge, the second question decides this debate, and on it they have no mechanism at all."' },
          ],
        },
        {
          t: 'example',
          title: 'Third Opposition, with margin notes',
          lines: [
            { label: '0:00', text: '"I want to deal with their three questions and add the one they left out."' },
            { label: '[judge]', text: 'Good instinct — but careful, a fourth question at third speaker risks being new matter.' },
            { label: '0:30', text: '"On throughput: we never conceded it. Suppressed demand is the same argument in a different coat — the journeys do not reappear because they do not happen, and a journey that does not happen is a shop that is not visited."' },
            { label: '[judge]', text: 'Reasonable reframing, and it rescues some of clash 1. Still behind there, because the bus-passenger gain was never priced against this.' },
            { label: '1:40', text: '"On cost: they gave you eleven minutes on a bus. We gave you a closed business. I do not think the panel needs a formula to know which of those is the larger event in a person’s life."' },
            { label: '[judge]', text: 'This is rhetorically effective and analytically thin. Eleven minutes twice a day times forty people times a year is a large number, and inviting me to compare without doing the comparison leaves me to do it myself — and when I do it, it favours proposition.' },
            { label: '3:00', text: '"On ban versus charge: a charge is reversible on Tuesday. A ban requires a political decision to undo, and no council that has closed a street has ever reopened it. They are not offering a trial; they are offering a ratchet."' },
            { label: '[judge]', text: 'That is the strongest version of their irreversibility case and it arrives at 3:00 in the last substantive. Should have been the second speaker’s central line. Clash 3 to opposition.' },
            { label: '5:00', text: '"And the fourth question: who decided? A national rule imposed on cities that did not vote for it, enforced by camera, with exemptions granted by officials."' },
            { label: '[judge]', text: 'This is new matter at 5:00 in the sixth speech. I am not weighing it. Also, it is a good argument — it should have been in the first opposition speech.' },
          ],
        },
      ],
    },
    {
      id: 'replies',
      title: 'The replies, and the decision',
      blocks: [
        {
          t: 'example',
          title: 'Opposition reply (4 min)',
          lines: [
            { label: '0:00', text: '"Two issues. Whether the gain is real, and whether the cost is recoverable."' },
            { label: '[judge]', text: 'Correctly identifies the two live issues. Good.' },
            { label: '0:30', text: '"On the gain: everything they have told you about throughput rests on a figure — a third of journeys discretionary — that was asserted once and never sourced. On the cost: a business that closes in year one is not reopened by a review in year two. That asymmetry is the debate."' },
            { label: '[judge]', text: 'Strong, and the asymmetry framing is the right one for them. But they are weighing one harm against an alleged *absence* of evidence, rather than against proposition’s harm. The bus passenger has disappeared from their speech entirely.' },
            { label: '2:40', text: '"We offered a policy that gets most of the benefit and keeps the journeys that matter. They offered a ratchet."' },
            { label: '[judge]', text: 'Closes on their counter-model, which is fine, but never answers the sorting-by-income point that proposition made against the charge in speech four. That was the hole in their mechanism and it stays open.' },
          ],
        },
        {
          t: 'example',
          title: 'Proposition reply (4 min)',
          lines: [
            { label: '0:00', text: '"Both sides agree road space is scarce, that someone loses, and that the loser should not be the person with no alternative. The whole debate is who that person is."' },
            { label: '[judge]', text: 'Excellent framing of the round as a single question, and it is the question proposition wins.' },
            { label: '0:40', text: '"Their case says: the trader, the shift worker, the shopper. Ours says: the forty people on every bus, the ambulance, the van that cannot get through. Both groups are real. Ours is larger, it is poorer, and crucially it has no substitute — a bus passenger cannot buy their way out of congestion, while a driver can retime, re-route or park and ride."' },
            { label: '[judge]', text: 'There it is: the comparison, with the asymmetry named. This is what the opposition reply did not do, and it is the single most important sentence in the round.' },
            { label: '2:10', text: '"On irreversibility, we accept the shuttered unit is not reversed by a review. So compare: their harm is concentrated, visible and partly compensable — business rate relief and loading permits are in our model. Ours is diffuse, invisible and continuous, which is exactly why it has never been fixed. Diffuse harms do not lose because they are hard to photograph."' },
            { label: '[judge]', text: 'Answers the strongest opposition argument on its own axis and names why it has rhetorical advantage. Very good.' },
            { label: '3:30', text: '"If you prefer their charge, ask who it removes from the centre. If you prefer our ban, ask who it lets in."' },
          ],
        },
        {
          t: 'levels',
          caption: 'The panel’s decision, written clash by clash.',
          items: [
            { name: 'Clash 1: does throughput rise?', body: 'Proposition. Displacement was the right attack and was answered specifically; opposition moved to suppressed demand, which concedes some gain exists.', verbs: ['prop'] },
            { name: 'Clash 2: who bears the cost?', body: 'Proposition, and this decided the round. Both sides had real harms; only proposition compared them, named the asymmetry in substitutes, and offered mitigation inside the model.', verbs: ['prop'] },
            { name: 'Clash 3: ban or charge?', body: 'Opposition. The ratchet argument and the retail irreversibility point were stronger than proposition’s answers, though they arrived late.', verbs: ['opp'] },
            { name: 'Clash 4: legitimacy', body: 'Not weighed. Raised for the first time at 5:00 in the last substantive.', verbs: ['struck'] },
          ],
        },
        { t: 'callout', tone: 'note', title: 'The dissent', text: 'One panellist ranked opposition. Their reasoning: clash 3 is not a side issue but the comparison of mechanisms, so winning it means winning the policy question, and the retail harm is irreversible in a way the congestion harm is not. That is a defensible weighing — and it is exactly the argument the opposition reply did not make, which is why it lost 2–1 rather than winning.' },
        {
          t: 'checklist',
          items: [
            'Specify the model in speech one; three later answers came straight out of it.',
            'Concede the real cost early. Both sides did, and both gained credibility for it.',
            'Shifting from displacement to suppressed demand looked like progress and read as a concession.',
            'Name your clashes in the third speech; the judge used proposition’s headings.',
            'New matter at the end is struck, however good it is. First opposition should have run legitimacy.',
            'The reply that compares wins. The reply that only attacks the other side’s evidence does not.',
          ],
        },
      ],
    },
  ],
  related: ['debate/casebook/three-final-speeches', 'debate/structure/rebuttal-and-clash', 'debate/structure/weighing', 'debate/systems/judging'],
}

export default guide
