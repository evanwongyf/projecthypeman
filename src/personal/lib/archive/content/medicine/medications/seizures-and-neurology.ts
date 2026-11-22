import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Anti-seizure medicines work by calming overactive electrical firing in neurons, usually by acting on sodium channels, calcium channels or the GABA system, the same targets that show up in mental health and pain medicine, which is why several drugs here do double duty for epilepsy, bipolar disorder, nerve pain and migraine all at once.',
  nutshell: [
    'Most anti-seizure drugs calm neurons by slowing **sodium channels** (phenytoin, carbamazepine, lamotrigine) or boosting **GABA** (several others), dampening runaway electrical activity rather than targeting a specific cause.',
    'Several anti-seizure drugs are also mood stabilisers (valproate, lamotrigine) or migraine preventers (topiramate, propranolol), one mechanism, several uses.',
    '**Valproate is one of the highest-risk drugs for birth defects** of any in common use, and is avoided where possible in anyone who could become pregnant.',
    '**Triptans** for migraine narrow brain blood vessels and are avoided in anyone with cardiovascular disease.',
    'Doses of several of these drugs (lamotrigine especially) are raised slowly over weeks specifically to avoid a severe skin reaction, not out of excess caution.',
  ],
  sections: [
    { id: 'browse', title: 'The medicines', blocks: [{ t: 'med-browser', cls: 'Seizures and neurology' }] },
  ],
}

export default guide
