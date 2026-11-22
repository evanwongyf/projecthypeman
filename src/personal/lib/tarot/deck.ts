// The 78-card tarot deck in the Rider-Waite-Smith tradition: names, numbers and the
// traditional meanings that readers use. Meanings are conventions, not facts about the future;
// different decks and readers differ. The pictures are the 1909 Rider-Waite-Smith scans in
// public/tarot (public domain); a drawn symbol card is the fallback when an image is missing.

export type Suit = 'major' | 'wands' | 'cups' | 'swords' | 'pentacles'

export type Card = { id: string; name: string; num: string; suit: Suit; glyph?: string; up: string; rev: string; meaning: string; ask: string }

export const SUITS: Record<Suit, { name: string; element: string; theme: string; color: string }> = {
  major: { name: 'Major Arcana', element: 'Spirit', theme: 'Life’s big themes and turning points', color: '#7d5fff' },
  wands: { name: 'Wands', element: 'Fire', theme: 'Energy, ambition, creativity, will', color: '#e07b2a' },
  cups: { name: 'Cups', element: 'Water', theme: 'Emotion, relationships, intuition', color: '#3b6fd8' },
  swords: { name: 'Swords', element: 'Air', theme: 'Thought, truth, conflict, communication', color: '#5b6b7e' },
  pentacles: { name: 'Pentacles', element: 'Earth', theme: 'Work, money, body, the material world', color: '#2f9e6e' },
}

// name | number | glyph | upright | reversed | meaning | question
const MAJOR = `
The Fool|0|✦|beginnings, innocence, spontaneity, a leap of faith|recklessness, naivety, hesitation, fear of the unknown|A fresh start taken with trust and curiosity. The risk is real, but so is the freedom of not yet knowing the rules.|Where am I ready to begin, and what am I afraid to risk?
The Magician|I|∞|skill, willpower, resourcefulness, making things happen|manipulation, untapped potential, scattered effort|You have the tools you need. The card is about turning intention into action by focusing what you have.|What resources do I already have that I am not using?
The High Priestess|II|☽|intuition, mystery, inner knowing, patience|secrets, ignoring intuition, surface knowledge|Things not yet revealed. It invites quiet attention to what you sense but cannot yet explain.|What do I know without being able to say why?
The Empress|III|♀|abundance, nurture, creativity, comfort, nature|dependence, smothering, creative block, neglect of self|Growth and care. Something is being nurtured, whether a project, a relationship or yourself.|What needs nurturing, and what needs to be let to grow?
The Emperor|IV|♂|structure, authority, stability, leadership|rigidity, domination, lack of discipline|Order and boundaries. The card asks for responsible control, and warns against control for its own sake.|Where do I need structure, and where am I too rigid?
The Hierophant|V|✠|tradition, conventions, teaching, belonging|rebellion, dogma, questioning rules, unconventionality|Inherited institutions and shared values. Learn from the tradition, or ask whether it still serves.|Which rules do I follow by habit rather than choice?
The Lovers|VI|♥|love, harmony, alignment of values, a meaningful choice|disharmony, imbalance, misaligned values, indecision|A choice that expresses who you are, often between people or paths. Honest alignment matters more than romance alone.|What choice would be true to my values?
The Chariot|VII|➤|determination, control, victory through discipline|lack of direction, aggression, loss of control|Progress by holding opposing forces together and steering. Momentum requires focus.|What am I steering, and what pulls in opposite directions?
Strength|VIII|♌|courage, patience, compassion, inner strength|self-doubt, raw emotion, insecurity|Strength that is gentle rather than forceful: taming fear and impulse with patience.|Where can gentleness achieve more than force?
The Hermit|IX|☆|solitude, reflection, guidance, searching within|isolation, withdrawal, loneliness, refusing advice|A time to step back and seek your own light. Wisdom comes from stillness.|What do I need to understand by myself?
Wheel of Fortune|X|☸|cycles, change, luck, turning points|bad luck, resistance to change, repeating patterns|Life moves in cycles. Some things are out of your hands, and the card suggests flexibility.|What is changing that I cannot control, and how can I adapt?
Justice|XI|⚖|fairness, truth, cause and effect, accountability|unfairness, dishonesty, avoiding responsibility|Decisions have consequences. The card asks for honesty and a fair weighing of facts.|What would a fair decision look like here?
The Hanged Man|XII|⚓|pause, surrender, a new perspective, letting go|stalling, resistance, needless sacrifice|Suspension that changes your view. Waiting or giving something up may reveal what pushing could not.|What would I see if I looked at this upside down?
Death|XIII|☠|endings, transformation, release, transition|resisting change, stagnation, fear of letting go|Almost never literal. A phase ends so another can begin. Clinging makes the change harder.|What is over, and what am I ready to release?
Temperance|XIV|♒|balance, moderation, patience, blending|excess, imbalance, impatience, discord|Mixing opposites in the right proportion. It favours the long view and a steady, measured pace.|Where do I need more balance or patience?
The Devil|XV|♑|attachment, temptation, shadow, addiction, materialism|release, breaking free, reclaiming power, awareness|Bonds we have chosen, often without seeing how. The chains are loose: awareness is the first step out.|What am I attached to that limits me?
The Tower|XVI|⚡|sudden upheaval, revelation, collapse of false structures|fear of change, averting disaster, delayed upheaval|A sudden shake-up that breaks what was unstable. It can be painful, and it clears ground for something truer.|What false structure is already cracking?
The Star|XVII|★|hope, renewal, inspiration, calm after the storm|discouragement, lost faith, despair|Healing and fresh hope after difficulty. A quiet confidence that things can improve.|What gives me hope, and how can I tend it?
The Moon|XVIII|☾|illusion, uncertainty, intuition, the unconscious, fear|confusion lifting, clarity returning, repressed feelings|Things are not what they seem. Fears and dreams distort, and you may need to move forward carefully.|What fear might be distorting my view?
The Sun|XIX|☀|joy, success, vitality, clarity, optimism|temporary gloom, overconfidence, unrealistic expectations|Warmth, openness and things going well. The card values simple happiness and honest confidence.|What brings me real joy right now?
Judgement|XX|♪|reckoning, calling, reflection, absolution, rebirth|self-doubt, ignoring the call, harsh self-judgement|A moment of honest review and a call to rise to something. Forgive the past and answer the call.|What is calling me to change?
The World|XXI|◎|completion, integration, achievement, wholeness|incompletion, shortcuts, lack of closure|A cycle completes. Celebrate, integrate what you learned, and prepare for the next beginning.|What have I completed, and what comes next?
`

// Minor arcana: number | upright | reversed | meaning | question
const RANKS = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Page', 'Knight', 'Queen', 'King']

const WANDS = `
new spark, inspiration, a bold beginning|delays, lack of motivation, missed spark|The seed of a new project or drive. Energy is available, and it needs direction.|What new energy do I feel, and what will I do with it?
planning, choices, vision, standing at a threshold|fear of the unknown, poor planning, staying put|You hold the world in your hand and must decide where to go. Plan, then leave the comfort zone.|What bigger vision am I ready to pursue?
expansion, foresight, early results, looking ahead|obstacles, delays, lack of foresight|Your ventures are launched and returns are on the way. Look ahead and keep building.|What am I waiting for, and how can I prepare?
celebration, stability, homecoming, community|conflict at home, instability, delayed celebration|A milestone worth celebrating, often shared with others. A stable base.|What deserves celebration right now?
competition, conflict, disagreement, diverse views|avoiding conflict, resolving tension, inner conflict|Many voices and clashing wills. It can be healthy rivalry or simple chaos.|Is this conflict productive, or a distraction?
victory, recognition, pride, public success|self-doubt, lack of recognition, fall from grace|Success acknowledged by others. Confidence earned by effort.|What am I proud of, and do I need the applause?
defence, perseverance, standing your ground|giving up, overwhelmed, feeling besieged|You hold a position and defend it. Persistence matters more than perfection.|What am I defending, and is it worth it?
speed, movement, rapid progress, news|delays, frustration, slowing down|Things move fast. Messages, travel and action accelerate.|What is coming quickly, and am I ready?
resilience, persistence, last stretch, caution|exhaustion, giving up, paranoia|Battered but still standing. You are nearly there, and need the last of your stamina.|What reserve of strength do I still have?
burden, responsibility, overcommitment, hard work|dropping burdens, delegation, burnout|You carry too much, or a heavy load that is nearly finished. Ask what you can put down.|What am I carrying that I could share or drop?
enthusiasm, exploration, a message of opportunity|hasty plans, lack of direction, immaturity|A keen beginner with big curiosity and a spark of an idea.|What do I want to explore, just for the thrill?
action, adventure, impulsiveness, passion|haste, scattered energy, recklessness|Charging ahead with energy and little restraint. Exciting, and sometimes rash.|Am I acting from passion, or just speed?
warmth, confidence, determination, a magnetic leader|selfishness, jealousy, insecurity|Confident warmth that inspires others and gets things done with charm.|Where can I lead with warmth?
vision, leadership, bold decisions, entrepreneurship|domineering, impulsive, high expectations|A natural leader with a clear vision who turns ideas into reality.|What does my vision need from me?
`
const CUPS = `
new feelings, love, compassion, emotional opening|emotional block, repressed feelings, emptiness|A fresh wave of emotion, creativity or connection. A cup overflowing.|What feeling is asking to be welcomed?
partnership, mutual attraction, connection, unity|imbalance, a broken bond, disharmony|Two people meeting with mutual respect, whether in love, friendship or work.|Where is there real reciprocity in my life?
friendship, celebration, community, joy shared|overindulgence, gossip, isolation|Joy with others. Community, support and shared achievements.|Who do I want to celebrate with?
apathy, contemplation, reevaluation, missed offers|new motivation, noticing options, awareness|Withdrawal into boredom or reflection, perhaps overlooking something being offered.|What am I overlooking because I am looking inward?
loss, grief, regret, disappointment|acceptance, moving on, finding peace|Focus on what is lost while others remain standing. Grief that can eventually turn.|What remains that I have not yet noticed?
nostalgia, childhood, kindness, reunion|stuck in the past, unrealistic memories|Warm memories, simple kindness and exchanges between people.|What from the past still nourishes me?
choices, fantasy, illusions, wishful thinking|clarity, reality check, making a choice|Many tempting options, not all of them real. Sort the dream from the plan.|Which of these options is real?
walking away, disillusionment, searching for more|aimless drifting, fear of leaving, avoidance|Leaving something familiar because it no longer satisfies.|What am I leaving, and what am I seeking?
contentment, satisfaction, gratitude, wishes fulfilled|greed, dissatisfaction, smugness|Emotional satisfaction. Sometimes called the wish card.|What would feel like enough?
harmony, family, lasting fulfilment, alignment|broken home, discord, misaligned values|Deep emotional contentment and a sense of belonging.|What does a happy home mean to me?
a gentle message, creativity, intuition, sensitivity|emotional immaturity, creative blocks, moodiness|A sensitive, imaginative messenger. A surprising feeling or message.|What small feeling is trying to get my attention?
romance, charm, imagination, following the heart|moodiness, unrealistic, jealousy|An idealist who follows their heart. Romantic, though not always practical.|Am I following feeling or fantasy?
compassion, calm, emotional security, intuition|insecurity, emotional manipulation, dependency|Emotionally mature and nurturing, with deep empathy and steady boundaries.|How can I care without losing myself?
emotional balance, diplomacy, generosity, wisdom|emotional manipulation, moodiness, cold|Mastery of emotions. Calm, wise and fair in the face of drama.|How can I respond to emotion with calm?
`
const SWORDS = `
clarity, truth, a breakthrough, mental sharpness|confusion, clouded judgement, brutality|A moment of clear thought, a decision or a hard truth, cutting through confusion.|What truth do I need to see clearly?
stalemate, difficult decision, avoidance, blocked emotions|indecision, information overload, no right answer|A standoff or choice you are avoiding. A blindfold you may remove.|What am I refusing to look at?
heartbreak, grief, sorrow, painful truth|healing, forgiveness, moving on|Emotional pain, honestly faced. It is hard, and it passes.|What hurt do I need to acknowledge?
rest, recovery, contemplation, retreat|burnout, restlessness, returning too soon|A pause to recharge. Rest before the next effort.|Where do I need to rest?
conflict, defeat, winning at a cost, tension|reconciliation, ending conflict, regret|Hollow victory or conflict. Ask what winning would really cost.|What is this fight really about?
transition, moving on, calm after trouble, leaving behind|stuck, resistance to change, unfinished business|Moving to calmer waters, carrying burdens with you.|What am I carrying into the next phase?
deception, strategy, stealth, going it alone|coming clean, conscience, being found out|Cunning or evasion, which could be strategy or self-deception.|Is there something I am not being straightforward about?
restriction, feeling trapped, self-imposed limits|freedom, self-acceptance, new perspective|Bound by beliefs more than by walls. The ties are looser than they look.|What limits are in my own mind?
anxiety, worry, nightmares, sleepless nights|hope, reaching out, facing fears|Worry that feels larger at night. Often worse in the mind than in life.|What worry would shrink if I shared it?
painful ending, rock bottom, betrayal, exhaustion|recovery, resisting an end, lingering pain|A hard ending, dramatic though final. The only way is up.|What can finally be over?
curiosity, new ideas, vigilance, communication|gossip, haste, scattered thoughts|A keen, alert mind eager to learn and question.|What question would I like to ask?
fast action, ambition, directness, driven thinking|impulsiveness, tactlessness, aggression|Charging at an idea with sharp words. Quick, sometimes too quick.|Am I thinking before I act?
independence, clear thinking, honesty, perception|coldness, bitterness, harsh judgement|A clear, direct thinker with firm boundaries and experience.|Where could honesty with kindness help?
intellect, authority, truth, fair judgement|manipulation, cruelty, abuse of power|Authority built on reason and ethics. Decisions made with clear logic.|What would an impartial judge decide?
`
const PENT = `
opportunity, prosperity, a new venture, abundance|missed chance, scarcity, poor planning|A seed of material opportunity: a job, a project or resources.|What opportunity could I plant today?
balance, adaptability, juggling priorities|overwhelmed, disorganised, poor balance|Keeping several things moving at once and staying flexible.|What am I juggling, and what could I drop?
teamwork, craftsmanship, learning, collaboration|poor teamwork, mediocrity, lack of skill|Skill developed with others. Good work is recognised.|Who could I learn from or work with?
security, saving, control, conservation|greed, hoarding, insecurity|Holding on to resources for safety, which can tip into clinging.|Is my caution protecting me or limiting me?
hardship, loss, isolation, poverty of spirit|recovery, charity, spiritual poverty|Cold and in need, with help close at hand if you look.|Where could I ask for support?
generosity, charity, giving and receiving, fairness|debt, one-sided charity, strings attached|Resources shared fairly, with the question of who gives and who receives.|Is my giving and receiving balanced?
patience, long-term view, assessment, investment|impatience, poor returns, lack of reward|Pausing to look at what you have grown, and waiting for the harvest.|Am I judging the harvest too early?
diligence, craftsmanship, skill, dedication|perfectionism, lack of focus, uninspired work|Steady practice and attention to detail that builds mastery.|What is worth my patient attention?
abundance, luxury, self-sufficiency, reward|over-reliance, superficiality, overwork|Enjoying the results of your own hard work, with independence.|What have I earned that I should enjoy?
legacy, wealth, family, long-term security|family disputes, loss of stability, short-term thinking|Lasting stability and inheritance, whether in money, family or tradition.|What do I want to build that lasts?
ambition, study, a practical opportunity|lack of progress, procrastination, impractical|A diligent student with a practical eye on the long term.|What skill am I willing to build slowly?
hard work, routine, responsibility, reliability|boredom, stagnation, laziness|Slow, steady and thorough. Reliable and persistent, if a little stubborn.|Where does steadiness serve me?
nurture, practical, down-to-earth, provider|self-care neglected, smothering, materialism|A warm, practical caregiver who makes a comfortable home and looks after resources.|How can I care for myself and others in practical ways?
abundance, security, leadership in business, discipline|stubbornness, obsession with wealth, corruption|A successful, steady leader who has built security through disciplined work.|What does real security mean to me?
`

function parseMajor(): Card[] {
  return MAJOR.trim().split('\n').map((line, i) => {
    const [name, num, glyph, up, rev, meaning, ask] = line.split('|')
    return { id: `major-${i}`, name, num, suit: 'major' as Suit, glyph, up, rev, meaning, ask }
  })
}
function parseSuit(suit: Exclude<Suit, 'major'>, text: string): Card[] {
  return text.trim().split('\n').map((line, i) => {
    const [up, rev, meaning, ask] = line.split('|')
    const rank = RANKS[i]
    const num = i < 10 ? String(i + 1) : rank
    return { id: `${suit}-${i + 1}`, name: `${rank} of ${SUITS[suit].name}`, num, suit, up, rev, meaning, ask }
  })
}

export const DECK: Card[] = [...parseMajor(), ...parseSuit('wands', WANDS), ...parseSuit('cups', CUPS), ...parseSuit('swords', SWORDS), ...parseSuit('pentacles', PENT)]

export type Spread = { id: string; name: string; positions: { name: string; prompt: string }[]; blurb: string }
export const SPREADS: Spread[] = [
  { id: 'one', name: 'One card', blurb: 'The simplest practice: a daily card to reflect on.', positions: [{ name: 'Focus', prompt: 'What is worth my attention today?' }] },
  { id: 'three-time', name: 'Past, present, future', blurb: 'A short story in three beats. Read the future card as a direction, not a forecast.', positions: [{ name: 'What shaped this', prompt: 'The background to the situation.' }, { name: 'Where you are', prompt: 'The current dynamic, as it is now.' }, { name: 'What is emerging', prompt: 'A direction that may develop if things continue.' }] },
  { id: 'three-sca', name: 'Situation, challenge, advice', blurb: 'A practical three-card spread for a specific question.', positions: [{ name: 'Situation', prompt: 'The heart of the matter.' }, { name: 'Challenge', prompt: 'What stands in the way, inside or outside you.' }, { name: 'Advice', prompt: 'A suggested approach to consider.' }] },
  { id: 'decision', name: 'Decision (five cards)', blurb: 'For weighing two options. It does not decide for you; it surfaces what you may not have considered.', positions: [{ name: 'Where you stand', prompt: 'Your starting point.' }, { name: 'Path A', prompt: 'What this option offers and costs.' }, { name: 'Path B', prompt: 'What the other option offers and costs.' }, { name: 'The hidden factor', prompt: 'Something you may be overlooking.' }, { name: 'Guidance', prompt: 'A value or principle to guide the choice.' }] },
  { id: 'celtic', name: 'Celtic Cross (ten cards)', blurb: 'The classic full spread. Take your time; read it as a story, not ten separate answers.', positions: [{ name: '1. The present', prompt: 'The heart of the matter.' }, { name: '2. The challenge', prompt: 'What crosses it: a complication or opposing force.' }, { name: '3. The foundation', prompt: 'The deeper roots or basis.' }, { name: '4. The recent past', prompt: 'What is just passing.' }, { name: '5. The crown', prompt: 'Your aim or the best possible outcome.' }, { name: '6. The near future', prompt: 'What is likely to come next.' }, { name: '7. You', prompt: 'Your attitude and role.' }, { name: '8. Surroundings', prompt: 'Others’ influence and the environment.' }, { name: '9. Hopes and fears', prompt: 'What you wish for or dread (often both).' }, { name: '10. The outcome', prompt: 'Where the pattern may lead if unchanged.' }] },
]
