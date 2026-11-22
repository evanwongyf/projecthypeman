import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Every so often, a piece of sporting equipment advances fast enough that it starts rewriting record books on its own, forcing governing bodies to step in and draw a line between "innovation" and "an unfair technological arms race". Carbon-plated running shoes, polyurethane swimsuits and aerodynamic time-trial bikes are three of the clearest, best-documented modern examples.',
  nutshell: [
    '"Super shoes" with a stiff carbon-fibre plate and highly resilient foam have been independently measured to improve running economy by several percent for many runners.',
    'Full-body polyurethane swimsuits were so effective they were **banned** by swimming\'s governing body in 2010, after an unprecedented wave of world records.',
    'Aerodynamic time-trial bikes and skinsuits apply the same drag-reduction physics as [drag and fluid dynamics](@sports/physics/drag-fluid-dynamics) directly to cycling equipment design.',
    'Sports governing bodies increasingly regulate equipment explicitly, trying to balance genuine technological progress against preserving a sport as a test of the athlete, not just the gear.',
  ],
  sections: [
    {
      id: 'super-shoes',
      title: 'Carbon-plated "super shoes"',
      blocks: [
        {
          t: 'p',
          text: 'From around 2017, shoes combining a curved, stiff carbon-fibre plate with a thick layer of highly resilient, energy-returning foam (pioneered publicly by Nike\'s Vaporfly line) began appearing under elite marathon runners, soon followed by similar designs from essentially every major shoe brand.',
        },
        {
          t: 'cards',
          items: [
            { title: 'Running economy', body: 'Independent biomechanics research (notably a widely cited 2018 study led by Wouter Hoogkamer) measured the original Vaporfly design improving running economy by an average of around 4% versus established racing shoes at the time, enough, over a marathon, to be worth minutes for elite runners.' },
            { title: 'The mechanism', body: 'The curved carbon plate acts somewhat like a lever, and the thick, highly resilient foam returns more of the energy absorbed on landing than traditional racing-flat foams, reducing the metabolic cost of each stride.' },
            { title: 'The record-book effect', body: 'Marathon world records and many national/age-group records fell at an unusually rapid rate in the years immediately following the shoes\' introduction, prompting genuine public and scientific debate about how much credit belonged to the athletes versus the equipment.' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'World Athletics stepped in', text: 'In 2020, World Athletics introduced specific technical rules limiting sole thickness (40 mm for road events at the time) and the number of embedded rigid plates (one) permitted in competition shoes, a direct regulatory response to the pace of shoe technology, drawing a new, explicit line between legal innovation and what the governing body judged to be too much.' },
      ],
    },
    {
      id: 'swimsuits',
      title: 'The banned swimsuits',
      blocks: [
        {
          t: 'p',
          text: 'Full-body polyurethane and similar high-tech swimsuits (most famously Speedo\'s LZR Racer, introduced in 2008) compressed the body into a more hydrodynamic shape, trapped air for buoyancy, and reduced skin-friction drag, directly targeting the drag-coefficient physics covered in [drag and fluid dynamics](@sports/physics/drag-fluid-dynamics).',
        },
        {
          t: 'table',
          head: ['Event', 'What happened'],
          rows: [
            ['2008 Beijing Olympics', '23 of 25 individual swimming world records were broken at the Games, an extraordinary concentration widely attributed in large part to the new suit technology'],
            ['2009 World Championships (Rome)', 'An even more extreme wave of record-breaking occurred as newer, even more buoyant non-textile suits were used, intensifying the controversy'],
            ['2010 ban', 'FINA (swimming\'s world governing body) banned non-textile, full-body suits from 2010 onward, restricting suits to textile materials and limited coverage (waist to knee for men, shoulder to knee for women)'],
          ],
        },
        { t: 'callout', tone: 'fact', title: 'A record-book asterisk, of sorts', text: 'A number of world records set during the 2008–09 "super-suit era" stood for many years afterward, some for over a decade, because athletes competing in the now-banned suits had swum times that proved extremely difficult to beat even with normal textile suits and continued training progress, illustrating just how significant the equipment\'s measured performance effect had been.' },
      ],
    },
    {
      id: 'bikes',
      title: 'Aerodynamic bikes and skinsuits',
      blocks: [
        {
          t: 'p',
          text: 'Time-trial and track cycling apply drag-reduction physics (see [drag and fluid dynamics](@sports/physics/drag-fluid-dynamics)) directly and visibly: teardrop-profile helmets, aerodynamic frame tubing, disc or deep-section wheels, and tight skinsuits are all engineered specifically to reduce the rider-and-bike system\'s drag coefficient, since at racing speeds, overcoming air resistance accounts for the large majority of a cyclist\'s total power output.',
        },
        {
          t: 'checklist',
          items: [
            'Aerodynamic (teardrop) helmets, reducing drag around the largest irregular shape on the system: the rider\'s head',
            'Deep-section or disc wheels, smoothing airflow compared with traditional spoked wheels, especially valuable in time trials with fewer sharp turns',
            'A low, stretched riding position, directly reducing frontal area',
            'Tight-fitting, textured ("dimpled") skinsuits, engineered using the same boundary-layer airflow principles as a golf ball\'s dimples',
          ],
        },
        { t: 'callout', tone: 'note', title: 'The regulatory line here too', text: 'Cycling\'s governing body (the UCI) maintains detailed equipment regulations, including the "UCI legal" rules limiting how extreme time-trial bike geometry and rider position can become, precisely to stop the sport from becoming primarily a contest of equipment engineering budgets rather than rider ability, the same underlying tension seen in running shoes and swimsuits.' },
      ],
    },
  ],
  sources: ['Hoogkamer, W., et al. (2018). A comparison of the energetic cost of running in marathon racing shoes. *Sports Medicine*, 48(4), 1009–1019.', 'FINA (World Aquatics). (2009). *FINA Requirements for Swimwear Approval*.', 'World Athletics. (2020). *Technical Rules, Rule 5 (Athletic Shoes)*.'],
  related: ['sports/physics/drag-fluid-dynamics', 'sports/technology/timing-tracking-tech', 'sports/physiology/vo2-training-zones'],
}

export default guide
