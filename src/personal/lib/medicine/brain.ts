// A schematic brain atlas for the neuroscience shelf: simplified outlines, not anatomical
// drawings. Regions work in networks; each entry lists what the region contributes, not
// everything it does. Coordinates are in a 420 x 300 viewBox.

export type BrainView = 'lateral' | 'medial' | 'deep'
export type Func = 'threat' | 'reward' | 'social' | 'attention' | 'memory' | 'language' | 'self' | 'control' | 'body' | 'movement' | 'senses'

export const FUNCS: [Func | 'all', string][] = [
  ['all', 'Show all'],
  ['threat', 'Fear and threat'],
  ['reward', 'Reward and motivation'],
  ['social', 'Empathy and social'],
  ['attention', 'Attention and salience'],
  ['memory', 'Memory'],
  ['language', 'Language'],
  ['self', 'Self and mind-wandering'],
  ['control', 'Planning and self-control'],
  ['body', 'Body signals and arousal'],
  ['movement', 'Movement'],
  ['senses', 'Seeing, hearing, touch'],
]

export type Region = {
  id: string
  view: BrainView
  name: string
  path: string
  lx: number
  ly: number
  // Seen "through" the surface (deep structures drawn dashed).
  deep?: boolean
  // Drawn outside the clipped brain outline (cerebellum, brainstem, pituitary).
  outside?: boolean
  funcs: Func[]
  summary: string
  emotion: string
  sense: string
  note?: string
}

export const OUTLINES: Record<BrainView, string> = {
  lateral: 'M40,150 C38,95 95,48 175,40 C260,32 345,55 380,110 C400,145 392,185 368,200 C350,210 330,208 318,214 C290,236 250,244 214,236 C190,230 178,214 168,206 C140,205 110,208 90,200 C58,190 42,175 40,150 Z',
  medial: 'M40,170 C35,100 95,45 190,38 C285,32 372,60 394,130 C405,170 392,200 372,208 L330,214 C280,205 250,215 215,212 C190,210 175,222 150,222 C100,222 45,210 40,170 Z',
  deep: 'M210,30 C320,30 392,90 392,170 C392,240 330,275 210,275 C90,275 28,240 28,170 C28,90 100,30 210,30 Z',
}

export const REGIONS: Region[] = [
  // ---- lateral view (front of the brain on the left) ----
  { id: 'dlpfc', view: 'lateral', name: 'Dorsolateral prefrontal cortex', path: 'M0,0 L170,0 L150,160 L40,170 L0,170 Z', lx: 100, ly: 85, funcs: ['control', 'attention', 'memory'],
    summary: 'The upper-side front of the brain. It holds goals and rules in mind and helps you plan, switch tasks and resist impulses.',
    emotion: 'Helps you reappraise a situation (think about it differently) and dampen a strong reaction from deeper structures. It works with the amygdala and anterior cingulate rather than switching them off.',
    sense: 'Working memory: holding and manipulating information for a few seconds. Plans steps towards a goal and checks that an answer makes sense.',
    note: 'Often called the seat of “executive function”. That is a shorthand: it is one hub in a wider network, and it matures into the mid-twenties.' },
  { id: 'ofc', view: 'lateral', name: 'Orbitofrontal cortex', path: 'M0,170 L40,170 L150,160 L168,206 L0,215 Z', lx: 92, ly: 190, funcs: ['reward', 'control', 'social'],
    summary: 'The front part of the brain just above the eyes. It assigns value to things: how rewarding or unpleasant an option is.',
    emotion: 'Links feelings to decisions. It updates value when circumstances change (the same food is less appealing when you are full). Damage can lead to poor social judgment and impulsive choices.',
    sense: 'Combines taste, smell, touch and other signals into a judgment of “how good is this?”.' },
  { id: 'broca', view: 'lateral', name: 'Broca’s area', path: 'M82,128 L150,122 L156,172 L92,182 Z', lx: 118, ly: 150, funcs: ['language'],
    summary: 'In the left inferior frontal gyrus for most people. It is involved in producing speech and building sentences.',
    emotion: 'Part of how feelings become words; naming an emotion in words (“affect labelling”) is linked to calmer responses in some studies.',
    sense: 'Speech production and grammar. Damage can leave comprehension good but speech slow and effortful.' },
  { id: 'motor', view: 'lateral', name: 'Motor cortex', path: 'M170,0 L228,0 L192,162 L150,162 Z', lx: 188, ly: 70, funcs: ['movement'],
    summary: 'A strip across the top of the brain that sends commands for voluntary movement. Each part controls a different body area.',
    emotion: 'Emotions show up in the body (a clenched fist, a smile). Facial expression and posture run through the motor system.',
    sense: 'Sends movements out. Perception and movement are closely linked: the premotor area helps you understand actions you watch.' },
  { id: 's1', view: 'lateral', name: 'Somatosensory cortex', path: 'M228,0 L284,0 L244,162 L192,162 Z', lx: 236, ly: 70, funcs: ['senses', 'body'],
    summary: 'A strip just behind the motor strip that receives touch, pressure, temperature and pain from the body.',
    emotion: 'Contributes to how emotions feel in the body (a tight chest, a warm face) and to how pain feels.',
    sense: 'Builds a map of the body surface, with the hands and lips taking up the most space.' },
  { id: 'parietal', view: 'lateral', name: 'Parietal association cortex', path: 'M284,0 L332,0 L312,150 L244,162 Z', lx: 292, ly: 80, funcs: ['attention', 'senses', 'self'],
    summary: 'The upper-back of the brain. It combines vision, touch and body position into a map of space and directs attention.',
    emotion: 'Helps attend to emotionally important things in the environment. Parts support taking another person’s perspective.',
    sense: 'Spatial awareness, navigation, maths and a sense of where your body is in space. Damage can cause neglect of one side of space.' },
  { id: 'occipital', view: 'lateral', name: 'Occipital cortex (visual)', path: 'M332,0 L420,0 L420,300 L304,300 L312,150 Z', lx: 360, ly: 130, funcs: ['senses'],
    summary: 'The back of the brain. It receives information from the eyes and builds the first stages of what you see: edges, colour, motion.',
    emotion: 'Emotionally charged images get extra processing here, boosted by signals from the amygdala.',
    sense: 'Visual processing begins here. Signals then travel along two routes: one for “what is it?” (towards the temporal lobe) and one for “where is it and how do I act on it?” (towards the parietal lobe).' },
  { id: 'temporal', view: 'lateral', name: 'Temporal cortex', path: 'M150,172 L156,172 L244,164 L312,150 L330,300 L120,300 L100,200 Z', lx: 232, ly: 205, funcs: ['senses', 'language', 'memory', 'social'],
    summary: 'The side of the brain below the lateral sulcus. It contains the auditory cortex, language comprehension areas (Wernicke’s area in the left for most people) and visual object and face recognition.',
    emotion: 'Face and voice areas read emotion in others. The deeper temporal lobe holds the hippocampus and amygdala.',
    sense: 'Hearing, understanding words, recognising objects and faces, and storing meaning (semantic memory).' },
  { id: 'insula', view: 'lateral', name: 'Insula', path: 'M186,162 C200,150 240,152 258,164 C250,184 214,186 192,180 Z', lx: 222, ly: 168, deep: true, funcs: ['body', 'social', 'threat', 'attention'],
    summary: 'A fold of cortex hidden inside the lateral sulcus. It monitors the state of the body: heartbeat, gut feelings, pain, breathlessness.',
    emotion: 'Central to feeling emotions in the body. Active in disgust, pain, craving and empathy for others’ pain. Part of the salience network.',
    sense: 'Interoception (sensing the inside of the body) and detecting what is important right now.' },
  { id: 'cerebellum-l', view: 'lateral', name: 'Cerebellum', path: 'M290,214 L376,214 C386,232 370,262 330,266 C300,266 286,242 290,214 Z', lx: 332, ly: 242, outside: true, funcs: ['movement', 'attention'],
    summary: 'The “little brain” at the back and bottom. It fine-tunes movement, balance and timing and contains more neurons than the rest of the brain together.',
    emotion: 'Newer research links it to emotion and social processing, though its role there is less well understood.',
    sense: 'Learns smooth, automatic skills; contributes to timing and to some thinking tasks.' },
  { id: 'stem-l', view: 'lateral', name: 'Brainstem', path: 'M238,228 L282,226 L290,270 L252,284 Z', lx: 264, ly: 256, outside: true, funcs: ['body'],
    summary: 'The stalk connecting brain and spinal cord (midbrain, pons, medulla). It controls breathing, heart rate, sleep and wakefulness.',
    emotion: 'Sets the body’s baseline arousal. Chemical systems that start here (noradrenaline, serotonin, dopamine) reach the whole brain and shape mood and alertness.',
    sense: 'Relays nearly every signal between body and brain and keeps you awake.' },

  // ---- medial view (cut down the middle; front on the left) ----
  { id: 'vmpfc', view: 'medial', name: 'Ventromedial prefrontal cortex', path: 'M30,150 L60,88 L112,56 L138,72 L128,134 L120,172 L90,198 L40,196 Z', lx: 84, ly: 130, funcs: ['reward', 'social', 'control', 'self'],
    summary: 'The inner, lower part of the prefrontal cortex. It integrates emotion with decisions and quietens fear responses once a threat has passed.',
    emotion: 'Helps extinguish learned fear and keeps feelings in proportion. Damage can leave a person unable to feel the pull of a decision.',
    sense: 'Judging value and linking what you know to what matters to you. Part of the default mode network.' },
  { id: 'acc', view: 'medial', name: 'Anterior cingulate cortex', path: 'M112,118 C128,86 204,78 238,82 L234,96 C204,94 148,98 132,128 Z', lx: 176, ly: 92, funcs: ['attention', 'control', 'body', 'social'],
    summary: 'A band of cortex curving around the front of the corpus callosum. It detects conflict and errors and signals when more effort is needed.',
    emotion: 'Registers pain and emotional distress, including social pain, and is part of the salience network.',
    sense: 'Notes that something is off, an error or a clash between goals, and recruits attention.' },
  { id: 'pcc', view: 'medial', name: 'Posterior cingulate and precuneus', path: 'M246,50 L336,66 L338,124 L302,122 C296,100 270,92 246,92 Z', lx: 294, ly: 88, funcs: ['self', 'memory', 'attention'],
    summary: 'Medial regions towards the back. Together with the medial prefrontal cortex they form the core of the default mode network, active when the mind wanders or recalls the past.',
    emotion: 'Active when you think about yourself, about other people, and about what might happen.',
    sense: 'Self-related thought, autobiographical memory and imagining the future.' },
  { id: 'cc', view: 'medial', name: 'Corpus callosum', path: 'M108,130 C130,98 290,88 322,130 L314,136 C288,108 140,112 118,140 Z', lx: 214, ly: 122, funcs: ['attention'],
    summary: 'The thick bundle of fibres that connects the left and right hemispheres.',
    emotion: 'Lets the two halves share emotional and analytical information.',
    sense: 'Integrates the two sides: for example, vision from the left and right halves of space.' },
  { id: 'thalamus', view: 'medial', name: 'Thalamus', path: 'M170,146 C170,128 240,128 242,146 C244,168 172,170 170,146 Z', lx: 206, ly: 150, funcs: ['senses', 'attention', 'body'],
    summary: 'A relay station deep in the centre. Nearly all sensory information (except smell) passes through it on its way to the cortex, and it directs attention.',
    emotion: 'Carries bodily and emotional signals between deep and cortical areas, and takes part in arousal.',
    sense: 'Filters and routes what reaches awareness. It is more of a two-way switchboard than a simple relay.' },
  { id: 'hypothalamus', view: 'medial', name: 'Hypothalamus', path: 'M156,172 C156,162 184,160 186,172 C188,186 158,190 156,172 Z', lx: 168, ly: 180, funcs: ['body', 'threat', 'reward'],
    summary: 'A small region below the thalamus. It keeps the body in balance: temperature, hunger, thirst, sleep, and the stress hormone system.',
    emotion: 'Drives the body’s stress response. It triggers the release of cortisol (via the pituitary and adrenal glands) and the “fight or flight” changes in heart rate and blood pressure.',
    sense: 'Links the brain to hormones and drives basic needs that colour every decision.' },
  { id: 'pituitary', view: 'medial', name: 'Pituitary gland', path: 'M166,202 a8,8 0 1,0 16,0 a8,8 0 1,0 -16,0 Z', lx: 174, ly: 222, outside: true, funcs: ['body'],
    summary: 'A pea-sized gland that hangs below the hypothalamus and releases hormones that control other glands.',
    emotion: 'Releases hormones in the stress system (ACTH) and oxytocin, linked to bonding.',
    sense: 'Not involved in perception; it is the hormone relay of the brain.' },
  { id: 'hippo', view: 'medial', name: 'Hippocampus', path: 'M176,202 C200,186 250,188 284,204 C292,212 284,218 274,214 C252,202 214,206 192,218 Z', lx: 232, ly: 200, deep: true, funcs: ['memory', 'threat'],
    summary: 'A curved structure deep in the temporal lobe, seen here through the middle of the brain. It forms new memories of events and places.',
    emotion: 'Provides context for emotion: it tells the amygdala whether a situation is the same as one that was dangerous before. It is sensitive to chronic stress.',
    sense: 'Turns experience into lasting memory, builds mental maps and supports imagining the future.' },
  { id: 'amygdala', view: 'medial', name: 'Amygdala', path: 'M150,204 a14,12 0 1,0 28,0 a14,12 0 1,0 -28,0 Z', lx: 162, ly: 230, deep: true, funcs: ['threat', 'social', 'reward', 'attention'],
    summary: 'An almond-sized cluster at the front of the hippocampus on each side. It rapidly detects things that matter, especially potential threats, and sets off the body’s response.',
    emotion: 'Important in fear and in tagging experiences as emotionally significant, but it is not a “fear centre”: it also responds to novelty, to faces and to rewards.',
    sense: 'Biases attention and memory towards what matters, so emotional events are remembered better.' },
  { id: 'v1', view: 'medial', name: 'Primary visual cortex', path: 'M338,72 L396,112 L398,162 L380,198 L344,178 L336,124 Z', lx: 364, ly: 136, funcs: ['senses'],
    summary: 'The medial surface of the occipital lobe, where signals from the eyes first arrive in the cortex.',
    emotion: 'Receives feedback from the amygdala, so emotional images are seen more vividly.',
    sense: 'Edges, orientation, motion and contrast: the building blocks of sight.' },
  { id: 'stem-m', view: 'medial', name: 'Brainstem', path: 'M196,168 L238,168 L264,262 L228,278 L212,214 Z', lx: 250, ly: 246, outside: true, funcs: ['body', 'attention'],
    summary: 'Midbrain, pons and medulla, connecting the brain to the spinal cord. It controls breathing, heart rate and the sleep-wake cycle.',
    emotion: 'Houses the main sources of dopamine, serotonin and noradrenaline, which tune mood, motivation and alertness.',
    sense: 'The reticular system keeps the cortex awake and alert; without it there is no awareness.' },
  { id: 'cerebellum-m', view: 'medial', name: 'Cerebellum', path: 'M262,208 C262,184 350,180 374,200 C386,226 340,252 298,244 C274,238 262,224 262,208 Z', lx: 322, ly: 214, outside: true, funcs: ['movement', 'attention'],
    summary: 'The “little brain” behind the brainstem. It coordinates movement and balance and fine-tunes timing.',
    emotion: 'Newer work links the cerebellum to emotion regulation and social thinking.',
    sense: 'Learns automatic skills and predicts the sensory consequences of movement.' },

  // ---- deep (coronal slice: a cut across the brain from ear to ear) ----
  { id: 'cc-d', view: 'deep', name: 'Corpus callosum', path: 'M130,70 C180,56 240,56 290,70 L286,84 C240,74 180,74 134,84 Z', lx: 210, ly: 66, funcs: ['attention'],
    summary: 'The bridge of fibres joining the two hemispheres, seen here from the front.',
    emotion: 'Lets the two halves share signals.', sense: 'Integrates left and right.' },
  { id: 'ventricles', view: 'deep', name: 'Lateral ventricles', path: 'M186,90 C176,86 160,96 164,118 C168,128 180,126 190,112 Z M234,90 C244,86 260,96 256,118 C252,128 240,126 230,112 Z', lx: 210, ly: 108, funcs: [],
    summary: 'Fluid-filled spaces in the centre of the brain. They hold cerebrospinal fluid, which cushions the brain and helps clear waste.',
    emotion: 'Not directly involved.', sense: 'Not directly involved.' },
  { id: 'caudate', view: 'deep', name: 'Caudate nucleus', path: 'M156,86 C146,90 140,112 150,132 C158,134 166,126 164,112 C164,100 162,92 156,86 Z M264,86 C274,90 280,112 270,132 C262,134 254,126 256,112 C256,100 258,92 264,86 Z', lx: 144, ly: 112, funcs: ['reward', 'control', 'movement'],
    summary: 'Part of the basal ganglia, curving beside the ventricles. It is involved in learning habits and goal-directed actions.',
    emotion: 'Takes part in the reward loop that learns from the outcome of your choices.',
    sense: 'Helps select actions and shift from deliberate to automatic behaviour.' },
  { id: 'putamen', view: 'deep', name: 'Putamen and globus pallidus', path: 'M126,128 C118,148 122,176 140,188 C152,184 154,158 150,138 C144,128 134,124 126,128 Z M294,128 C302,148 298,176 280,188 C268,184 266,158 270,138 C276,128 286,124 294,128 Z', lx: 116, ly: 160, funcs: ['movement', 'reward'],
    summary: 'The outer part of the basal ganglia. Involved in starting and smoothing movement and in building habits. Loss of dopamine cells that feed this system causes Parkinson’s disease.',
    emotion: 'Contributes to habit formation, including habits of emotion and craving.',
    sense: 'Turns practised sequences into smooth routines.' },
  { id: 'accumbens', view: 'deep', name: 'Nucleus accumbens', path: 'M186,170 a10,9 0 1,0 20,0 a10,9 0 1,0 -20,0 Z M214,170 a10,9 0 1,0 20,0 a10,9 0 1,0 -20,0 Z', lx: 210, ly: 192, funcs: ['reward'],
    summary: 'A small hub at the base of the striatum, rich in dopamine receptors. Central to motivation, “wanting” and reinforcement.',
    emotion: 'Signals “this is worth pursuing”. Drugs of abuse, gambling and attractive foods all act strongly on it.',
    sense: 'Helps decide what is worth your effort and learns from surprise rewards.' },
  { id: 'thalamus-d', view: 'deep', name: 'Thalamus', path: 'M180,140 C190,132 230,132 240,140 C246,156 232,168 210,168 C188,168 174,156 180,140 Z', lx: 210, ly: 154, funcs: ['senses', 'attention', 'body'],
    summary: 'The sensory relay and attention switchboard, seen here as a pair merged across the middle.',
    emotion: 'Passes emotional and bodily signals between regions.', sense: 'Routes nearly all sensory input to the cortex.' },
  { id: 'insula-d', view: 'deep', name: 'Insula', path: 'M92,150 C82,160 84,182 98,190 C110,184 112,162 104,150 Z M328,150 C338,160 336,182 322,190 C310,184 308,162 316,150 Z', lx: 78, ly: 170, funcs: ['body', 'social', 'threat', 'attention'],
    summary: 'The folded cortex at the side, tucked deep inside the lateral sulcus.',
    emotion: 'Registers the body’s state and underlies feelings of disgust, pain and empathy.',
    sense: 'Interoception: sensing your heartbeat and gut.' },
  { id: 'amygdala-d', view: 'deep', name: 'Amygdala', path: 'M150,216 a12,10 0 1,0 24,0 a12,10 0 1,0 -24,0 Z M246,216 a12,10 0 1,0 24,0 a12,10 0 1,0 -24,0 Z', lx: 160, ly: 240, funcs: ['threat', 'social', 'reward', 'attention'],
    summary: 'Seen in the temporal lobe on each side, at the front end of the hippocampus.',
    emotion: 'Quickly flags what matters, especially threats, and triggers the body’s response.',
    sense: 'Biases attention and memory towards the emotionally important.' },
  { id: 'hippo-d', view: 'deep', name: 'Hippocampus', path: 'M120,228 C130,212 156,214 166,232 C150,246 128,244 120,228 Z M300,228 C290,212 264,214 254,232 C270,246 292,244 300,228 Z', lx: 120, ly: 256, funcs: ['memory', 'threat'],
    summary: 'The seahorse-shaped memory structure, seen in cross-section, one on each side.',
    emotion: 'Supplies context so that feelings fit the situation.',
    sense: 'Forms memories of events and places.' },
]
