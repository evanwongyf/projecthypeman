import type { Guide } from '../../../../guide'

const guide: Guide = {
  intro:
    'Adults learn with the same brains as children, but they bring more experience, more responsibilities and clearer reasons for learning. Malcolm Knowles called the art of teaching adults **andragogy**. His ideas are useful reminders, even if they apply to many younger learners too.',
  nutshell: [
    'Adults want to know **why** they are learning something.',
    'They bring rich experience, which is both a resource and sometimes a barrier.',
    'They are most motivated by learning that solves real problems they face now.',
    'The core learning science (retrieval, spacing, worked examples, feedback) applies just as much to adults.',
  ],
  sections: [
    {
      id: 'knowles',
      title: 'Knowles’ six assumptions',
      blocks: [
        {
          t: 'cards',
          items: [
            { tag: '1', title: 'Need to know', body: 'Adults want to understand why they need to learn something before they invest in it. Start with the purpose.' },
            { tag: '2', title: 'Self-concept', body: 'Adults see themselves as responsible for their own decisions and resist being treated as passive recipients.' },
            { tag: '3', title: 'Experience', body: 'Adults bring a large store of experience. Draw on it through discussion and examples, and watch for habits that need unlearning.' },
            { tag: '4', title: 'Readiness', body: 'Adults become ready to learn what they need to cope with real situations: a new job, a new role.' },
            { tag: '5', title: 'Orientation', body: 'Adults are problem-centred rather than subject-centred. Organise learning around tasks and problems.' },
            { tag: '6', title: 'Motivation', body: 'Internal motivators (satisfaction, self-esteem, quality of life) matter more than external ones.' },
          ],
        },
        {
          t: 'callout',
          tone: 'note',
          title: 'A useful lens, not a separate science',
          text: 'Critics note that many of these assumptions are true of children too, and not true of all adults. Treat andragogy as a checklist for respecting learners, and keep using the evidence-based methods that work for everyone.',
        },
      ],
    },
    {
      id: 'practice',
      title: 'In practice',
      blocks: [
        {
          t: 'dodont',
          do: [
            'Open with the purpose and how the learning will be used.',
            'Invite learners’ experience into discussion and examples.',
            'Use real problems and cases from their context.',
            'Offer choice where possible.',
            'Keep sessions practical, with time to practise and apply.',
            'Still use retrieval, spacing and feedback.',
            'Respect time: start and finish on time, and cut what is not needed.',
          ],
          dont: [
            'Lecture for long periods without interaction.',
            'Treat adults like schoolchildren, with rules they did not agree to.',
            'Assume experience means understanding; check it.',
            'Rely on "learning styles" or other myths (see [learning myths](@teaching/theories/myths)).',
          ],
        },
      ],
    },
    {
      id: 'workplace',
      title: 'Workplace training',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Start from the performance goal', body: 'What should people do differently at work after the training?' },
            { title: 'Check it is a learning problem', body: 'Some performance gaps come from tools, time or incentives, not missing knowledge.' },
            { title: 'Teach the minimum', body: 'Focus on what is needed; provide reference material for the rest.' },
            { title: 'Practise in realistic scenarios', body: 'Role-plays, simulations, case studies.' },
            { title: 'Support transfer', body: 'Follow-up practice, job aids, manager support and spaced reminders after the session.' },
          ],
        },
      ],
    },
  ],
  sources: [
    'Knowles, M. S., Holton, E. F., & Swanson, R. A. (2015). *The adult learner* (8th ed.). Routledge.',
    'Merriam, S. B., & Baumgartner, L. M. (2020). *Learning in adulthood* (4th ed.). Jossey-Bass.',
  ],
  related: ['teaching/theories/experiential', 'teaching/theories/motivation', 'teaching/guides/contexts/online'],
}

export default guide
