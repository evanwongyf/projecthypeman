import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Andrew Churches mapped the revised Bloom’s taxonomy onto digital activities: bookmarking is remembering, blogging can be creating. Its value is a reminder that using technology is not the same as thinking, a slide deck can sit at the bottom of the ladder or the top.',
  sections: [
    {
      id: 'levels',
      title: 'Bloom’s digital verbs',
      blocks: [
        { t: 'levels', items: [
          { name: 'Remembering', body: 'Retrieving and locating.', verbs: ['bookmarking', 'searching', 'highlighting', 'listing', 'social bookmarking'] },
          { name: 'Understanding', body: 'Making sense of information.', verbs: ['advanced searching', 'annotating', 'tagging', 'categorising', 'commenting'] },
          { name: 'Applying', body: 'Using a procedure in a new setting.', verbs: ['running and operating', 'uploading', 'editing', 'playing', 'sharing'] },
          { name: 'Analysing', body: 'Breaking down and relating parts.', verbs: ['mashing', 'linking', 'reverse engineering', 'cracking', 'validating sources'] },
          { name: 'Evaluating', body: 'Judging against criteria.', verbs: ['moderating', 'reviewing', 'testing', 'posting critiques', 'networking judgements'] },
          { name: 'Creating', body: 'Producing something new.', verbs: ['programming', 'filming', 'podcasting', 'blogging', 'remixing', 'game design'] },
        ] },
        { t: 'callout', tone: 'warn', title: 'Collaboration and digital literacy', text: 'Churches added collaboration as a thread through every level and stressed source evaluation. In the age of generative AI, the analysing and evaluating levels, checking claims, verifying sources, spotting fabricated output, matter more than ever. See [AI in the classroom](@teaching/guides/contexts/ai).' },
      ],
    },
  ],
  sources: ['Churches, A. (2008). Bloom’s Digital Taxonomy. Educational Origami.'],
  related: ['teaching/taxonomies/blooms', 'teaching/taxonomies/samr'],
}

export default guide
