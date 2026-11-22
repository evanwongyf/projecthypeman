import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Classical education is the oldest continuous tradition of schooling in the West: seven liberal arts, grouped as the trivium (grammar, logic and rhetoric) and the quadrivium (arithmetic, geometry, music and astronomy), taught to produce free, wise and eloquent people. After a long decline it has been revived in recent decades, in a movement that borrows from Dorothy Sayers’ 1947 essay on “The Lost Tools of Learning” and inspires hundreds of schools. This page explains the tradition, the three stages of the trivium, how modern schools use it and what it offers beyond nostalgia.',
  nutshell: [
    'The **seven liberal arts** were the foundation of education from antiquity to the early modern period: the **trivium** (language arts) and the **quadrivium** (number arts).',
    'The **trivium** goes in three stages: **grammar** (facts and the structure of a subject), **logic** (reasoning and argument), **rhetoric** (expressing it persuasively and well).',
    'Dorothy Sayers argued in 1947 that the three stages match **how children develop**: the “Poll-Parrot”, the “Pert” and the “Poetic” stages.',
    'The aim is **wisdom and virtue**, in addition to knowledge: forming a good person and citizen.',
    'Modern classical schools emphasise **great books, Latin, memorisation, recitation and debate**; evidence on outcomes is limited but the practices overlap with research on **knowledge and retrieval**.',
  ],
  sections: [
    {
      id: 'arts',
      title: 'The liberal arts',
      blocks: [
        {
          t: 'table',
          head: ['Group', 'Art', 'What it studies'],
          rows: [
            ['Trivium (words)', 'Grammar', 'The structure of language and the content of a subject'],
            ['', 'Logic (dialectic)', 'Reasoning, argument, finding errors'],
            ['', 'Rhetoric', 'Persuasion, style and expression'],
            ['Quadrivium (numbers)', 'Arithmetic', 'Number in itself'],
            ['', 'Geometry', 'Number in space'],
            ['', 'Music (harmony)', 'Number in time'],
            ['', 'Astronomy', 'Number in space and time'],
          ],
          caption: 'The seven liberal arts, as set out by Martianus Capella and Boethius and taught in medieval schools and universities.',
        },
        { t: 'p', text: 'The word “liberal” means “befitting a free person”: the arts were those a free citizen needed, as opposed to the practical arts of making a living. The tradition runs from Plato and Isocrates through Cicero and Quintilian to the medieval universities and the humanist schools of the Renaissance.' },
      ],
    },
    {
      id: 'sayers',
      title: 'Sayers and the three stages',
      blocks: [
        { t: 'p', text: 'In “The Lost Tools of Learning” (1947) Dorothy L. Sayers, the crime novelist and classicist, argued that modern education taught subjects but not the tools to learn them. She proposed to revive the trivium and to match each of its stages with a stage of childhood.' },
        {
          t: 'levels',
          caption: 'Sayers’ three stages, as taken up by modern classical educators. The ages are approximate.',
          items: [
            { name: 'Grammar (“Poll-Parrot”): about 9 to 11', body: 'Children love to memorise and chant. Teach the facts, the rules and the vocabulary of each subject: Latin forms, times tables, dates, poems.' },
            { name: 'Logic (“Pert”): about 12 to 14', body: 'Children want to argue and challenge. Teach formal logic, debate, and how to spot fallacies, and ask “why?”' },
            { name: 'Rhetoric (“Poetic”): about 15 and up', body: 'Young people want to express themselves. Teach them to write and speak with clarity and style, drawing on all they have learned.' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'The stages are a heuristic', text: 'Developmental psychology does not support rigid stages tied to ages. Many classical teachers treat grammar, logic and rhetoric as three modes that recur at every level of any subject, not as phases to be left behind.' },
      ],
    },
    {
      id: 'practice',
      title: 'In a modern classroom',
      blocks: [
        {
          t: 'cards',
          cols: 2,
          items: [
            { title: 'Great books', body: 'Primary texts from Homer to the present, read closely and discussed.' },
            { title: 'Latin and Greek', body: 'To understand the roots of English and Romance languages and the structure of grammar.' },
            { title: 'Memory work and recitation', body: 'Poems, speeches, tables and facts learned by heart as a store of knowledge to think with.' },
            { title: 'Socratic discussion and debate', body: 'Reasoning and argument in dialogue, a practice of the logic stage.' },
            { title: 'Rhetoric and writing', body: 'Imitation of good models, then composition, speeches and public presentation.' },
            { title: 'Virtue and character', body: 'Habits of attention, courage, justice and moderation form part of the aim.' },
          ],
        },
        { t: 'links', items: [{ path: 'teaching/philosophies/perennialism', note: 'The Great Books tradition' }, { path: 'teaching/techniques/questioning/socratic', note: 'Socratic questioning' }, { path: 'teaching/techniques/learning-strategies/retrieval-practice', note: 'Retrieval practice and memory' }] },
      ],
    },
    {
      id: 'critique',
      title: 'Strengths and criticisms',
      blocks: [
        {
          t: 'table',
          head: ['Strengths', 'Criticisms'],
          rows: [
            ['A coherent curriculum with a clear aim; knowledge, language and reasoning go together', 'Narrow in science, technology and practical work in some schools'],
            ['Memory and recitation build a knowledge base, consistent with cognitive science', 'Can slide into rote learning if understanding is not checked'],
            ['Attention to rhetoric and speech: skills valued in many fields', 'The canon is mostly Western and mostly male; some schools widen it, others resist'],
            ['Strong sense of culture and tradition', 'Little rigorous outcome research; much of the evidence is anecdotal'],
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Borrow the habits', text: 'You do not need to teach Latin to take something from this tradition: teach the vocabulary of a subject first, then argue about it, then write or speak about it well. It is a sound sequence for almost any topic.' },
      ],
    },
  ],
  sources: [
    'Sayers, D. L. (1947). The Lost Tools of Learning. Lecture at Oxford; published by Methuen.',
    'Joseph, Sister Miriam (2002). The Trivium: The Liberal Arts of Logic, Grammar, and Rhetoric. Paul Dry Books.',
    'Bauer, S. W., and Wise, J. (2016). The Well-Trained Mind (4th ed.). W. W. Norton.',
    'Quintilian. Institutio Oratoria.',
  ],
  related: ['teaching/philosophies/perennialism', 'teaching/philosophies/essentialism', 'teaching/philosophies/overview'],
}

export default guide
