import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Every teacher meets a class that seems to defeat them and a student who seems immune to everything. The skills are the same as before, applied more patiently and more deliberately: reset the expectations, change the structure, work on relationships, and use data to understand what is driving the behaviour. This page covers how to turn round a difficult class, how to handle persistent low-level disruption, and how to understand and plan for individuals: the attention-seeker, the withdrawn student, the explosive student, with the ABC analysis and a simple behaviour plan.',
  nutshell: [
    'A hard class is usually a **structure and consistency problem**, not a personality problem. Reset expectations, tighten routines and be consistent for **three weeks** before judging.',
    '**Low-level disruption** (chatter, calling out, fidgeting) is the main source of lost learning. Deal with it early, calmly and consistently.',
    'To understand an individual, collect **ABC data**: Antecedent (what came before), Behaviour, Consequence (what followed).',
    'Every behaviour has a **function**: to get something or to avoid something. Teach a better way to get it.',
    'A few students need an **individual behaviour plan**, written with the student, parents and specialists, and reviewed.',
  ],
  sections: [
    {
      id: 'reset',
      title: 'Turning round a difficult class',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Diagnose', body: 'When does it go wrong: start, transitions, certain activities, certain students? Observe a colleague whose class behaves for the same group.' },
            { title: 'Get support', body: 'Tell your year head early. Ask for a colleague to observe and for the school’s backing on consequences.' },
            { title: 'Reset', body: 'Announce a fresh start. Teach the routines again from the beginning, with rehearsal. Use a seating plan.' },
            { title: 'Tighten the structure', body: 'Start with a silent starter task, plan transitions, shorten explanations, and give clear, timed tasks.' },
            { title: 'Be consistent', body: 'The same response every time, for every student. Expect testing in the first week and hold firm.' },
            { title: 'Build relationships', body: 'Phone home with good news, praise specifically, and make time to talk to the hardest students.' },
            { title: 'Review in three weeks', body: 'Judge after three weeks of consistent practice, not three days. Keep a log.' },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Do not go it alone', text: 'A hard class is a school problem, not a personal failing. Asking for help is the professional thing to do, and a colleague’s fresh eyes often see what you cannot.' },
      ],
    },
    {
      id: 'lowlevel',
      title: 'Persistent low-level disruption',
      blocks: [
        { t: 'p', text: 'Low-level disruption (talking over you, calling out, tapping, turning round, “lost” equipment) rarely looks serious, but it wastes time, wears teachers down and affects learning for everyone. The way to tackle it is to deal with the small things early, calmly and every time, so that the larger things do not grow.' },
        {
          t: 'table',
          head: ['Behaviour', 'Likely cause', 'Response'],
          rows: [
            ['Chatting during teaching', 'Poor attention signal; seating; boredom', 'Seating plan; silent signal; short explanations; cold call'],
            ['Calling out', 'Habit; enthusiasm; no routine for answering', 'Teach “hands up”; thank those who wait; use cold calling'],
            ['Off-task during independent work', 'Task too hard or too easy; unclear', 'Check the task; circulate; give a timed target'],
            ['Late, slow starts', 'No entry routine; low accountability', 'Starter task; stand at the door; consequence for lateness'],
            ['“Forgotten” equipment', 'Avoidance; disorganisation', 'Spare equipment; a log; contact home'],
            ['Phone use', 'Habit; escape', 'A clear phone routine; consistent consequence'],
          ],
        },
      ],
    },
    {
      id: 'abc',
      title: 'Understanding an individual: ABC and function',
      blocks: [
        { t: 'p', text: 'Behaviour is communication. Applied behaviour analysis asks what a behaviour achieves, rather than what it “means”. The simplest tool is the ABC chart.' },
        {
          t: 'table',
          head: ['Antecedent (what happened before)', 'Behaviour (what the student did)', 'Consequence (what followed)'],
          rows: [
            ['Teacher asked the class to start writing; student had no pen', 'Called out “this is boring”; threw the book', 'Sent out of the room'],
            ['Group work, no one picked him', 'Shouted at a peer', 'Teacher moved him to the front; peers laughed'],
            ['Test announced', 'Put head on desk; refused', 'Teacher left him alone'],
          ],
          caption: 'Collect ten to fifteen entries across several lessons. Patterns appear: tasks that trigger the behaviour, and what the student gets or avoids.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Function', title: 'To get attention', body: 'From adults or peers. Give attention for the behaviour you want, and as little as possible for the behaviour you do not.' },
            { tag: 'Function', title: 'To escape a task', body: 'The task is too hard, too long or too boring. Adjust the task, break it into steps and teach how to ask for a break.' },
            { tag: 'Function', title: 'To get something', body: 'An object, an activity or a role. Teach a way to ask, and make the right behaviour pay.' },
            { tag: 'Function', title: 'To meet a sensory or emotional need', body: 'Fidgeting, noise or withdrawal may be regulation. A break, a movement or a quiet space can help.' },
          ],
        },
      ],
    },
    {
      id: 'types',
      title: 'Common patterns',
      blocks: [
        {
          t: 'table',
          head: ['Pattern', 'What helps', 'What to avoid'],
          rows: [
            ['The attention-seeker', 'Plenty of positive attention for the right things; plan ignoring for the minor; private praise', 'Big public reactions that reward the behaviour'],
            ['The withdrawn student', 'Gentle check-ins, small successes, safe participation, counsellor referral if concerned', 'Forcing public answers; assuming they are fine'],
            ['The explosive student', 'Know the triggers, give early options, calm space, a plan, a trusted adult', 'Public confrontation; sudden demands; last words'],
            ['The clown', 'Give a legitimate role: a presentation, a leader, humour at the right time', 'Mocking them; allowing the class to be the audience'],
            ['The leader of a clique', 'Win them, give responsibility, talk privately, and tackle the group', 'Public power struggles'],
            ['The student with a diagnosed need', 'A plan with specialists; reasonable adjustments; consistent routines', 'Treating the need as an excuse or ignoring it'],
          ],
        },
        { t: 'links', items: [{ path: 'teaching/special-education/strategies/behaviour-support', note: 'Positive behaviour support in depth' }, { path: 'teaching/special-education/needs/adhd', note: 'ADHD in the classroom' }, { path: 'teaching/special-education/needs/semh', note: 'Social, emotional and mental health needs' }] },
      ],
    },
    {
      id: 'plan',
      title: 'A simple individual behaviour plan',
      blocks: [
        {
          t: 'example',
          title: 'Plan for a student who calls out and leaves his seat',
          lines: [
            { label: 'Goal', text: 'Stay seated and put up a hand to answer in 80% of lessons within four weeks.' },
            { label: 'Function', text: 'To get attention from the teacher and peers (ABC data over two weeks).' },
            { label: 'Prevent', text: 'Seat near the front; give him a job (hand out books); pre-correct at the start; ask him a question early.' },
            { label: 'Teach', text: 'Practise “hand up and wait” with praise each time. Agree a private signal for “I need to move”.' },
            { label: 'Reinforce', text: 'Specific praise within ten seconds; a positive message home each Friday if the goal is met.' },
            { label: 'Respond', text: 'If he calls out: calm reminder; ignore the content, praise the next hand up. If he leaves his seat: quiet redirection.' },
            { label: 'Review', text: 'Weekly with the student; with parents and the year head at four weeks.' },
          ],
        },
        {
          t: 'checklist',
          items: [
            'The plan is written with the student, the parents and, where relevant, specialists.',
            'It names a specific goal and a clear measure.',
            'It is based on data about the function of the behaviour.',
            'It includes teaching a replacement behaviour, not just stopping the old one.',
            'All staff who teach the student know the plan and follow it consistently.',
            'There is a date to review it.',
          ],
        },
      ],
    },
  ],
  sources: [
    'Education Endowment Foundation (2019). Improving behaviour in schools.',
    'Cooper, J. O., Heron, T. E., and Heward, W. L. (2020). Applied Behavior Analysis (3rd ed.). Pearson.',
    'Bennett, T. (2017). Creating a Culture: How school leaders can optimise behaviour. Department for Education.',
  ],
  related: ['teaching/classroom-management/de-escalation', 'teaching/special-education/strategies/behaviour-support', 'teaching/singapore/attitude-and-defiance'],
}

export default guide
