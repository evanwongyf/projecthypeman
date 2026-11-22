import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'The gap between a starter\'s gun and a sprinter\'s first muscle contraction is governed by biology, not willpower, and it has a hard physiological floor. Understanding reaction time explains why false-start rules are set where they are, and reveals a genuinely elegant piece of human-performance science.',
  nutshell: [
    '**Simple reaction time**, one expected stimulus, one planned response, is the fastest the nervous system can react, typically 120–200 milliseconds for a trained athlete.',
    'World Athletics sets the false-start threshold for sprinters at **0.1 seconds (100 ms)**, based on research into the fastest physiologically possible voluntary reaction to a starting gun.',
    '**Choice reaction time** (reacting correctly to one of several possible stimuli) is meaningfully slower than simple reaction time, which is why open, unpredictable sports (tennis, boxing, football) rely on **anticipation** at least as much as raw reaction speed.',
    'Reaction time can be trained and improved somewhat with practice, but has a floor set by basic neural transmission speed that no amount of training eliminates entirely.',
  ],
  sections: [
    {
      id: 'the-chain',
      title: 'The chain from sound to movement',
      blocks: [
        {
          t: 'flow',
          title: 'What happens in the ~150 ms after the gun',
          nodes: [
            { label: 'Starting gun fires', tone: 'data' },
            { label: 'Sound reaches the ear, converted to a nerve signal', sub: '~8–10 ms', tone: 'process' },
            { label: 'Signal travels to the brain and is processed', sub: 'the largest single chunk of the delay', tone: 'process' },
            { label: 'Motor command sent down the spinal cord and nerves', sub: 'to the leg muscles', tone: 'process' },
            { label: 'Muscle begins to contract', sub: 'measurable force on the blocks', tone: 'output' },
          ],
          caption: 'Every stage takes real, physiologically fixed time, reaction time is not a matter of "trying harder", since most of the delay is basic neural signal transmission and processing that happens well below conscious control.',
        },
        {
          t: 'metric',
          name: 'simple reaction time',
          shows: 'How quickly a person can produce a planned, specific response to a single, expected signal, the fastest category of human reaction, and the one sprint starts are specifically designed around.',
          eli5: 'Imagine standing with your finger over a buzzer, told exactly when a light will flash and exactly what to do (press the buzzer) the instant it does. The gap between the flash and your finger moving is simple reaction time, there is no decision to make, no uncertainty about what response is needed, just pure "signal in, response out" speed.',
          higher: 'A slower reaction, takes longer between the stimulus and the first measurable muscle response. Can be caused by fatigue, distraction, being an older or less-trained individual, or genuine physiological variation between people.',
          lower: 'A faster reaction, among the fastest physiologically possible for a human. Elite sprinters train the specific skill of focus and readiness at the blocks, which can shave real milliseconds off reaction time, though there remains a hard biological floor no training eliminates.',
          typical: 'Simple visual reaction time for a healthy adult is commonly cited around 200–250 ms; trained sprinters reacting to an auditory signal (a gun, which is processed slightly faster than a visual signal) average closer to 120–160 ms; World Athletics sets 100 ms as the fastest a human can *possibly, legitimately* react, so any recorded reaction faster than that is ruled an anticipated false start rather than a genuine reaction.',
        },
      ],
    },
    {
      id: 'false-start',
      title: 'Why 0.1 seconds is the false-start line',
      blocks: [
        {
          t: 'p',
          text: 'World Athletics (the global governing body for track and field) rules that any sprinter whose starting blocks register a force before 100 milliseconds after the gun is disqualified for a false start, not because 100 ms is a typical reaction time, but because research measuring nerve conduction and motor response times found it to be, in effect, the fastest *possible* genuine reaction to an unpredictable auditory stimulus. Anything faster is judged to be anticipation (guessing when the gun will fire) rather than a true reaction to it.',
        },
        { t: 'callout', tone: 'fact', title: 'A rule that changed careers', text: 'In 2003, World Athletics moved to a strict "any false start, immediate disqualification" rule (removing an earlier one-warning-per-race system), a change that proved controversial, most famously when reigning 100m world champion Usain Bolt was disqualified from the 2011 World Championships final for a false start, having reacted in roughly 0.104 seconds by some race analysis, just outside the legitimate window by a hair\'s breadth.' },
      ],
    },
    {
      id: 'choice-anticipation',
      title: 'Choice reaction time and anticipation',
      blocks: [
        {
          t: 'p',
          text: 'A sprint start is unusually simple from a nervous-system perspective: one expected stimulus, one planned response. Almost every other sport is far harder, requiring **choice reaction time**, reacting correctly to one of several possible events (which way will the penalty kicker shoot? which side will the serve go?), which is measurably, meaningfully slower than simple reaction time.',
        },
        {
          t: 'table',
          head: ['Reaction type', 'What it involves', 'Typical speed'],
          rows: [
            ['Simple reaction time', 'One expected stimulus, one planned response', 'Fastest (~120–250 ms)'],
            ['Choice reaction time', 'Multiple possible stimuli, a different correct response for each', 'Meaningfully slower, each added choice option adds further delay (a well-studied relationship known as Hick\'s law)'],
            ['Anticipation (not technically "reaction" at all)', 'Reading cues before the event itself happens, to respond before the ball/shot actually arrives', 'Can appear far faster than physiologically possible reaction time, because the athlete has effectively started responding before the triggering event'],
          ],
          caption: 'This is why elite goalkeepers facing a penalty, or tennis returners facing a serve, are not reacting to the ball alone, the ball travels faster than simple reaction time alone could handle at the highest levels, so top performers read the kicker\'s or server\'s body cues (hip angle, racket position, run-up) to start moving before contact is even made.',
        },
      ],
    },
  ],
  sources: ['World Athletics. *Technical Rules, Rule 16 (False Start)*.', 'Pain, M. T. G., & Hibbs, A. (2007). Sprint starts and the minimum auditory reaction time. *Journal of Sports Sciences*, 25(1), 79–86.', 'Hick, W. E. (1952). On the rate of gain of information. *Quarterly Journal of Experimental Psychology*, 4(1), 11–26.'],
  related: ['sports/physiology/strength-power-curve', 'sports/physics/collisions-energy', 'teaching/theories/cognitivism'],
}

export default guide
