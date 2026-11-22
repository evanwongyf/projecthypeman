import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'An F1 overtake is usually set up a lap or more before it happens: closing the gap through the corners, using the slipstream and DRS on the straight, then winning the braking zone. Defending is the mirror image: placing the car so the attacker has nowhere good to go, within rules that limit how much a driver may move.',
  nutshell: [
    'Most passes happen in **braking zones** at the end of long straights, after the attacker has used the **slipstream** and, as of the 2011–2025 rules, **DRS** to close up.',
    'The hard part is getting close enough: a following car loses downforce in **dirty air**, which slows it through corners and overheats its tyres.',
    'Main moves: the **late-braking dive**, the **switchback** (cutback), **round the outside**, and the **strategic pass** in the pits (the undercut).',
    'Defenders may make **one move** to defend, must not **move under braking**, and must leave a car’s width when returning to the racing line.',
    'Small speed differences add up: an extra 10 km/h along a 1 km straight gains about 0.4 s, worth roughly 33 m at 300 km/h.',
  ],
  sections: [
    {
      id: 'physics',
      title: 'The physics of closing a gap',
      blocks: [
        {
          t: 'math',
          tex: String.raw`\Delta t = \frac{d}{v_1} - \frac{d}{v_2}`,
          caption: 'Time gained over a straight of length d by a car averaging v₂ instead of v₁.',
          where: [
            { sym: 'd', def: 'Length of the straight, in metres' },
            { sym: 'v_1', def: 'Average speed of the car ahead, in m/s' },
            { sym: 'v_2', def: 'Average speed of the attacker, in m/s' },
          ],
          syntax: [
            { sym: String.raw`\frac{d}{v}`, say: '“d over v”: distance divided by speed gives time' },
            { sym: String.raw`\Delta t`, say: '“delta t”: the change in time, here the time gained' },
          ],
          worked: {
            title: 'DRS on a 1 km straight',
            steps: [
              String.raw`Leader averages 300 km/h \(= 83.33\) m/s; attacker with DRS and tow averages 310 km/h \(= 86.11\) m/s.`,
              String.raw`Leader: \(1{,}000 \div 83.33 = 12.000\) s. Attacker: \(1{,}000 \div 86.11 = 11.613\) s.`,
              String.raw`\(\Delta t = 12.000 - 11.613 \approx 0.39\) s.`,
              String.raw`A 0.4 s gap at 300 km/h is a distance of \(0.4 \times 83.33 \approx 33\) m, about six car lengths.`,
            ],
            answer: 'An attacker who starts the straight 0.4 s behind will arrive just about alongside. One who starts 0.8 s behind will not get there on the straight alone and must win the braking zone or wait a lap.',
          },
        },
        {
          t: 'math',
          tex: String.raw`\frac{v_{\text{tow}}}{v} = \left(\frac{1}{1 - x}\right)^{1/3}`,
          caption: 'If the slipstream cuts the follower’s drag by a fraction x at the same power, top speed rises by the cube root of 1/(1 − x), because power at top speed goes with v³.',
          where: [
            { sym: 'x', def: 'Fraction by which drag is reduced in the tow (0.10 means 10%)' },
            { sym: String.raw`v_{\text{tow}}`, def: 'Top speed in the slipstream' },
          ],
          syntax: [
            { sym: String.raw`(\;)^{1/3}`, say: '“to the power one third”, which is the cube root' },
          ],
          worked: {
            title: 'A 10% tow',
            steps: [
              String.raw`\(1/(1 - 0.10) = 1.111\).`,
              String.raw`Cube root: \(1.111^{1/3} \approx 1.036\).`,
              String.raw`From 310 km/h: \(310 \times 1.036 \approx 321\) km/h.`,
            ],
            answer: 'A 10% drag cut is worth about 11 km/h at the end of a long straight, the same order as DRS. Combined, they can make the difference between pulling alongside and not.',
          },
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'The cost of following',
          text: 'The tow helps on straights, but in corners the follower’s wings and floor work in turbulent, slower air, so they make less downforce. The car understeers, slides and heats its tyres. The 2022 rules were written to cut this loss, and drivers reported that following became easier at first. See [DRS and overtaking](@sports/f1/physics-theory/drs-overtaking).',
        },
        {
          t: 'p',
          text: 'DRS (2011–2025) could be used in set zones when a car was within one second of the car ahead at a detection point, from two laps after the start or a restart. It opened a flap in the rear wing to cut drag, worth a speed gain often quoted at around 10–15 km/h, varying by circuit. Under the **2026 rules** DRS was replaced by adjustable aerodynamics for all cars on straights and an extra electrical-energy mode for a car close behind; check the current regulations for detail.',
        },
      ],
    },
    {
      id: 'moves',
      title: 'The main ways to pass',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'Late-braking dive', tag: 'inside', body: 'Pull to the inside on the straight and brake later than the defender. The attacker sacrifices the corner exit to take the position. The risk: locking up and sliding into the defender. A dive from far back is a “dive-bomb”, and stewards look closely at whether the attacker could have made the corner.' },
            { title: 'Switchback (cutback)', tag: 'counter', body: 'When the defender dives up the inside, the attacker turns in late, crosses behind, and uses the better exit to draw alongside on the following straight.' },
            { title: 'Round the outside', tag: 'bold', body: 'Brave and rare, but possible where a corner leads straight into another corner the other way, so the outside car becomes the inside car. It needs the defender to leave room.' },
            { title: 'Better exit', tag: 'set-up', body: 'Back off slightly into the corner before the straight, take a wider line, and get on the throttle earlier. The speed advantage carries all the way down the straight.' },
            { title: 'The dummy', tag: 'feint', body: 'Feint one way to draw the defender, then go the other. Nigel Mansell’s move on Nelson Piquet into Stowe at Silverstone in 1987 is the classic example.' },
            { title: 'Pitstop pass', tag: 'strategy', body: 'The undercut or overcut gains the place in the pits rather than on track; see [race strategy and pit stops](@sports/f1/racecraft/race-strategy).' },
          ],
        },
        {
          t: 'example',
          title: 'What 5 m of later braking is worth',
          lines: [
            { label: 'Set-up', text: 'Both cars approach at 300 km/h (83.3 m/s).' },
            { label: 'Gain', text: 'The attacker stays at full speed 5 m longer: 5 ÷ 83.3 ≈ 0.06 s.' },
            { label: 'But', text: 'Braking later means arriving at the corner faster, so the friction circle is used up for longer and the exit suffers. See [the friction circle](@sports/f1/physics-theory/friction-circle-and-slip-angle).' },
            { label: 'So', text: 'A late-braking pass wins the corner but often loses the run to the next one, which is exactly what the switchback exploits.' },
          ],
        },
        {
          t: 'table',
          head: ['Pass', 'Where', 'What made it work'],
          rows: [
            ['Mansell on Piquet, 1987', 'Silverstone, Stowe', 'A feint one way, then a dive the other way into the corner'],
            ['Häkkinen on Schumacher, 2000', 'Spa, approaching Les Combes', 'Both came up on the lapped Zonta; Schumacher passed him on one side, Häkkinen on the other, and Häkkinen emerged ahead'],
            ['Verstappen on Leclerc, 2019', 'Red Bull Ring, turn 3', 'Late lunge on the inside; contact, and the stewards ruled it a racing incident'],
          ],
          caption: 'Famous examples, described briefly; see race reports for the detail.',
        },
      ],
    },
    {
      id: 'defending',
      title: 'Defending',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Cover the inside early', body: 'Move to the inside before the braking zone. The attacker must go round the outside or switch back.' },
            { title: 'Brake on the defensive line', body: 'Take the tighter line and accept a slower exit; hope the attacker cannot use it before the next braking zone.' },
            { title: 'Manage the exit', body: 'Get the car straight and on the throttle early, so the attacker is out of DRS range or the tow by the end of the straight.' },
            { title: 'Use energy wisely', body: 'Save battery deployment for the straights where the attacker is strongest. A defender who runs out mid-race becomes easy prey.' },
            { title: 'Use the tyres', body: 'Fresher or softer tyres give more grip into the braking zone; an older tyre limits how late one can brake.' },
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'The defender’s dilemma',
          text: 'Every defensive line costs a little time. A driver who defends every lap is slower, which can let a third car catch them both, or give a rival the chance to undercut in the pits. Teams sometimes tell a driver not to fight a faster car for that reason.',
        },
      ],
    },
    {
      id: 'rules',
      title: 'The rules on defending and passing',
      blocks: [
        {
          t: 'table',
          head: ['Rule (as of the 2022–2025 regulations)', 'In plain words'],
          rows: [
            ['More than one change of direction to defend a position is not permitted', 'One move. Weaving is not allowed.'],
            ['Returning to the racing line, leave at least one car width to the track edge on the approach to the corner', 'Do not squeeze the attacker off the road after you have moved off-line.'],
            ['No abnormal change of direction under braking', 'No “moving under braking”: a late jink when the attacker has committed is dangerous.'],
            ['Do not leave the track and gain a lasting advantage', 'A pass made with four wheels off track usually has to be given back.'],
            ['Do not force another driver off the track', 'Leave room if the attacker is sufficiently alongside.'],
            ['Blue flags: let faster lapping cars by', 'Ignore three blue flags and expect a penalty.'],
          ],
          caption: 'Summarised from the FIA International Sporting Code, Appendix L, and the F1 Sporting Regulations. Exact wording changes; check the current text.',
        },
        {
          t: 'p',
          text: 'Since around 2022 the stewards have also used published **driving standards guidelines**: tests of whether an attacker had earned a right to racing room, for example whether, on an inside pass, the attacker’s front axle was at least level with the defender’s mirror by the apex. The guidelines were revised after disputed incidents. Verstappen’s defence of Hamilton at Interlagos in 2021, where both went off at turn 4 and no investigation followed, was one of the moments that prompted them. At the 2024 Mexico City Grand Prix, Verstappen received two 10-second penalties in one race for forcing Norris off the track and for gaining an advantage off it. See [penalties explained](@sports/f1/rules-penalties/penalties-explained).',
        },
        {
          t: 'dodont',
          do: [
            'Make the defensive move early and once.',
            'Leave a car’s width when moving back to the racing line.',
            'Hand a place back promptly if it was gained off track; the team can ask race control first.',
          ],
          dont: [
            'Move under braking when the attacker has committed.',
            'Brake-test the car behind: stewards treat it as dangerous driving.',
            'Dive from too far back and use the other car as a brake; that brings a time penalty for causing a collision.',
          ],
        },
      ],
    },
    {
      id: 'reading',
      title: 'Reading a battle on TV',
      blocks: [
        {
          t: 'checklist',
          items: [
            'Is the gap at the DRS detection point under one second (or within the current overtaking-mode rules)?',
            'Which car has the fresher or softer tyres, and how many laps old are they?',
            'Is the attacker closer in the last sector, before the main straight? That shows a better exit.',
            'Is the attacker’s gap stuck at 0.8–1.2 s for many laps? A sign that dirty air is hurting it.',
            'How much battery is each car spending? Commentators and onboard graphics sometimes show this.',
            'Is a third car closing as the two fight? A long battle helps the car behind.',
          ],
        },
        {
          t: 'example',
          title: 'Questions with answers',
          lines: [
            { label: 'Q1', text: 'Over a 1.2 km straight, how much does averaging 295 rather than 285 km/h gain?' },
            { label: 'A1', text: '285 km/h = 79.17 m/s → 15.158 s; 295 km/h = 81.94 m/s → 14.644 s; gain ≈ 0.51 s.' },
            { label: 'Q2', text: 'A defender moves left, then right, on the same straight. Legal?' },
            { label: 'A2', text: 'No: that is more than one change of direction to defend, unless the second move is simply returning to the racing line with a car’s width left.' },
            { label: 'Q3', text: 'Why does a switchback work against a late-braking dive?' },
            { label: 'A3', text: 'The diver arrives too fast to turn well and exits slowly; the car that turned in later gets on the power sooner and draws alongside on the next straight.' },
          ],
        },
      ],
    },
  ],
  sources: [
    'FIA. *International Sporting Code*, Appendix L, chapter IV (driving conduct).',
    'FIA. *Formula 1 Sporting Regulations*, 2022–2025 editions (DRS, blue flags, penalties) and 2026 edition.',
    'Stewards’ decisions published on the FIA website for the races cited.',
  ],
  related: [
    'sports/f1/physics-theory/drs-overtaking',
    'sports/f1/racecraft/race-strategy',
    'sports/f1/racecraft/qualifying-and-one-lap-pace',
    'sports/f1/rules-penalties/penalties-explained',
    'sports/f1/rules-penalties/flags-and-safety-procedures',
    'sports/f1/physics-theory/power-units-and-ers',
    'sports/f1/circuits/tracks-racing-line',
  ],
}

export default guide
