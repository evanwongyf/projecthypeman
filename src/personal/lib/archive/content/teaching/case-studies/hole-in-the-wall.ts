import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'In 1999, at a slum on the edge of Delhi, an educator named Sugata Mitra cut a hole in a wall, set a computer into it and left. Within days, local children who had never used a computer were browsing, drawing and teaching each other. The “Hole in the Wall” experiment, and the “minimally invasive education” and “self-organised learning environments” (SOLE) it inspired, won Mitra a million-dollar TED Prize and a great deal of attention. It also drew serious criticism about the strength of the evidence and the claim that children can learn almost anything without teachers. This case study separates what was shown from what was claimed.',
  nutshell: [
    'In **1999** Sugata Mitra placed a **publicly accessible computer** in a wall in **Kalkaji, Delhi**, and observed **children teaching themselves** to use it.',
    'He argued for **“minimally invasive education”**: given **curiosity, a computer and peers**, children can learn **with little adult help**; later, he proposed **SOLE** sessions in which pupils investigate “big questions”.',
    'Independent evaluations found that children **did learn computer skills**, but evidence of **broader curriculum learning** was **limited**, and the claims were **contested**.',
    'Critics note **small, unsystematic samples**, the **novelty effect**, hidden **adult help** and **selection**, and the **risk of undervaluing teachers**.',
    'What survives: the power of **curiosity**, **peer learning**, **big questions** and **well-designed free exploration**, **as part of** a curriculum.',
  ],
  sections: [
    {
      id: 'experiment',
      title: 'The experiment',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: '1999: Kalkaji, Delhi', body: 'Mitra, then at the training company NIIT, embedded a PC in a wall facing a slum, with a touchpad and a connection to the internet, and watched from a distance on a hidden camera.' },
            { title: 'What happened', body: 'Within hours, children of about 8 to 13, who had no English and no computer experience, had worked out how to use the pointer, open applications and browse. They taught other children.' },
            { title: 'Replications', body: 'Similar “kiosks” were installed in rural villages across India and later elsewhere. Mitra reported that children learned to use the computer, and to use English words they met.' },
            { title: 'Later work', body: 'In Hyderabad, Mitra reported that children taught themselves some biotechnology from English-language material, and he promoted the “Granny Cloud”, a network of volunteers who gave encouragement over video.' },
            { title: '2013', body: 'He won the TED Prize and a grant of about a million dollars to develop the School in the Cloud and SOLE.' },
          ],
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Idea', title: 'Minimally invasive education', body: 'A teacher’s task is to arouse curiosity and then step back. Learning is self-organising when there is a rich resource and a group of children.' },
            { tag: 'Idea', title: 'SOLE', body: 'A Self-Organised Learning Environment: a teacher poses a big question (“Can a tree think?”), pupils work in groups on a shared computer, then report back.' },
            { tag: 'Claim', title: 'Education as a self-organising system', body: 'Mitra drew an analogy with systems in physics, arguing that learning emerges from interaction without central control.' },
            { tag: 'Claim', title: 'A new role for teachers', body: 'The teacher becomes an encourager, using a form of “admiration” that Mitra suggested resembled a grandmother’s.' },
          ],
        },
      ],
    },
    {
      id: 'evidence',
      title: 'What the evidence shows',
      blocks: [
        {
          t: 'table',
          head: ['Finding', 'Comment'],
          rows: [
            ['Children with no previous exposure did learn basic computer skills from an open kiosk, especially in groups', 'Supported by observation and by independent studies (Inamdar, 2004; Dangwal and Kapur, 2008)'],
            ['Girls used kiosks less than boys in some sites, and learning concentrated among those who got most access', 'Independent evaluations in rural India'],
            ['Learning of school curriculum content, in the absence of guidance, was limited', 'Evaluations found weaker evidence than the original claims'],
            ['Interest in a new device declines as the novelty wears off', 'Usage fell over time in some sites'],
            ['Adults (community members, shopkeepers, older children) often helped informally', 'Case studies noted this “hidden” help'],
            ['SOLE sessions have been tested in schools in several countries, with positive results for engagement and mixed ones for attainment', 'Small studies in the UK and India (Mitra and Dangwal, 2010, 2017)'],
          ],
          caption: 'The strongest claims are weaker than the best-known ones. Many studies are small, local and by researchers who developed the approach.',
        },
        {
          t: 'table',
          head: ['Criticism', 'Reply'],
          rows: [
            ['The experiment was not controlled and the observations are anecdotal', 'Mitra pointed to repeated replications and later trials'],
            ['Learning a computer’s interface is easy compared with learning mathematics or science', 'Mitra argued that children could also learn more complex content with the right big questions'],
            ['The model understates the value of teachers and of structured instruction', 'Mitra said the aim was to change the teacher’s role, not eliminate it'],
            ['The research suggests that novices learn best with guidance (Kirschner, Sweller and Clark, 2006)', 'Defenders say that SOLE is not unguided: teachers pose questions and manage the process'],
          ],
        },
      ],
    },
    {
      id: 'lessons',
      title: 'What to take from it',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Curiosity is a resource', body: 'Children are often more capable and more motivated than adults assume, and given the chance will work hard on something that interests them.' },
            { title: 'Peers teach', body: 'Learning in small groups, where children explain things to each other, is powerful and cheap.' },
            { title: 'Big questions engage', body: 'Open, genuinely puzzling questions can start inquiry and discussion. They work best with some guidance and a clear way to share results.' },
            { title: 'Exploration needs structure', body: 'For complex curriculum content, novices need guidance and explicit teaching. Free exploration is best used for motivation, application and consolidation.' },
            { title: 'Access matters', body: 'A device alone does not equalise opportunity. Who gets access, and who helps, shapes the result.' },
            { title: 'Be cautious about big claims', body: 'A compelling story and a famous prize are not evidence. Look for independent, controlled studies.' },
          ],
        },
        {
          t: 'example',
          title: 'A SOLE-style lesson (adapted)',
          lines: [
            { label: 'Big question', text: '“Why do some countries get more rain than others?”' },
            { label: 'Groups', text: 'Four groups of four, each with one device, free to move between groups and to change membership.' },
            { label: 'Time', text: '30 minutes to investigate, with a visible timer.' },
            { label: 'Report', text: 'Each group gives a two-minute explanation, and the class discusses what they found and what they are still unsure about.' },
            { label: 'Teacher', text: 'Poses the question, keeps the process fair, asks probing questions and corrects errors afterwards, with a short explicit lesson to fill gaps.' },
          ],
        },
        { t: 'links', items: [{ path: 'teaching/techniques/active-learning/inquiry', note: 'Inquiry-based learning' }, { path: 'teaching/philosophies/progressivism', note: 'Progressive education' }, { path: 'teaching/theories/cognitive-load', note: 'Why novices need guidance' }] },
      ],
    },
  ],
  sources: [
    'Mitra, S. (2000). Minimally invasive education for mass computer literacy. Conference on Research in Distance and Adult Learning.',
    'Mitra, S., and Dangwal, R. (2010). Limits to self-organising systems of learning: the Kalikuppam experiment. British Journal of Educational Technology.',
    'Inamdar, P. (2004). Computer skills development by children using “Hole in the Wall” facilities in rural India. Australasian Journal of Educational Technology.',
    'Dangwal, R., and Kapur, P. (2008). Learning through teaching: peer-learning and the Hole-in-the-Wall. Australasian Journal of Educational Technology.',
    'Kirschner, P. A., Sweller, J., and Clark, R. E. (2006). Why minimal guidance during instruction does not work. Educational Psychologist.',
  ],
  related: ['teaching/philosophies/progressivism', 'teaching/techniques/active-learning/inquiry', 'teaching/theories/cognitive-load'],
}

export default guide
