import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'A language model’s answer depends heavily on what you give it. **Prompting** is the craft of giving clear instructions and context; **retrieval-augmented generation (RAG)** feeds it relevant documents; **agents** let it use tools and take several steps to finish a task.',
  nutshell: [
    'Be specific: the task, the audience, the format, and what good looks like.',
    'Give **examples** (few-shot) and **context**; ask it to think step by step for reasoning tasks.',
    '**RAG** retrieves relevant passages and puts them in the prompt, so answers are grounded in your sources.',
    'An **agent** loops: think, call a tool, observe the result, repeat until done.',
  ],
  sections: [
    {
      id: 'techniques',
      title: 'Prompting techniques',
      blocks: [
        {
          t: 'table',
          head: ['Technique', 'What it is', 'Example'],
          rows: [
            ['Clear instructions', 'State the task, audience, length and format', '"Explain photosynthesis to a 12-year-old in 3 short paragraphs."'],
            ['Context', 'Give the background the model cannot know', 'Paste the essay question and marking criteria'],
            ['Few-shot examples', 'Show input → output pairs', 'Two example flashcards, then "now make 10 like these"'],
            ['Step-by-step reasoning', 'Ask it to work through the problem before answering', '"Work through this step by step, then give the final answer."'],
            ['Roles', 'Set a perspective', '"Act as a strict examiner marking this answer."'],
            ['Structure', 'Separate instructions from material with headings or tags', '<document>…</document> then the question'],
            ['Iterate', 'Treat it as a conversation; refine', '"Shorter, and add one worked example."'],
          ],
        },
        {
          t: 'example',
          title: 'Weak versus strong prompt',
          lines: [
            { label: 'Weak', text: '"Make notes on the French Revolution."' },
            { label: 'Strong', text: '"I am revising for a GCSE history exam on the causes of the French Revolution. Make one-page notes with headings for long-term, short-term and trigger causes, 3–4 bullet points each, and finish with 5 likely exam questions. Flag anything you are unsure of."' },
          ],
        },
        { t: 'callout', tone: 'fact', title: '"Let’s think step by step"', text: 'Kojima and colleagues (2022) found that simply adding "Let’s think step by step" raised one model’s accuracy on a set of maths word problems from about 18% to about 79%. Many newer models are trained to reason before answering by default.' },
      ],
    },
    {
      id: 'rag',
      title: 'Retrieval-augmented generation',
      blocks: [
        {
          t: 'flow',
          nodes: [
            { label: 'Question', tone: 'human' },
            { label: 'Embed the question', tone: 'process' },
            { label: 'Search a vector index', sub: 'your notes, docs, papers', tone: 'data' },
            { label: 'Top passages + question → prompt', tone: 'process' },
            { label: 'LLM answers, citing passages', tone: 'output' },
          ],
          caption: 'The model’s knowledge stays frozen, but RAG lets it use up-to-date or private information, and lets you check its sources.',
        },
        {
          t: 'math',
          tex: String.raw`\text{context} = \operatorname{top-}k_{\,d \in \mathcal{D}}\ \cos\big(E(q), E(d)\big)`,
          syntax: [
            { sym: String.raw`\operatorname{top-}k_{\,d \in \mathcal{D}}`, say: String.raw`Read "the top k over d in D": score every document d in the collection, sort, and keep only the k highest.` },
            { sym: String.raw`d \in \mathcal{D}`, say: String.raw`Read "d is a member of D": the subscript says which things you are looping over.` },
            { sym: String.raw`\cos(E(q), E(d))`, say: String.raw`Read "cosine of the embedding of q and the embedding of d": the angle-based similarity of two vectors, \(\frac{\mathbf{a}\cdot\mathbf{b}}{\lVert\mathbf{a}\rVert\lVert\mathbf{b}\rVert}\).` },
          ],
          worked: {
            steps: [
              String.raw`Use 2-dimensional toy embeddings. The question is \(E(q) = (1, 1)\) and there are three documents: \(d_1 = (2, 1)\), \(d_2 = (3, 1)\), \(d_3 = (-1, 1)\). Take \(k = 2\).`,
              String.raw`\(\|E(q)\| = \sqrt{2} \approx 1.4142\).`,
              String.raw`\(d_1\): dot \(= 2 + 1 = 3\), norm \(\sqrt{5} \approx 2.2361\), cosine \(= 3 / (1.4142 \times 2.2361) \approx 0.9487\).`,
              String.raw`\(d_2\): dot \(= 3 + 1 = 4\), norm \(\sqrt{10} \approx 3.1623\), cosine \(= 4 / (1.4142 \times 3.1623) \approx 0.8944\).`,
              String.raw`\(d_3\): dot \(= -1 + 1 = 0\), so cosine \(= 0\) (at right angles to the question).`,
            ],
            answer: String.raw`Ranking is \(d_1\) (0.949), \(d_2\) (0.894), \(d_3\) (0): the top-2 context passed to the model is \(d_1\) and \(d_2\), and \(d_3\) is left out.`,
          },
          where: [
            { sym: 'E(q), E(d)', def: 'The embeddings (vectors) of the question and of a candidate document' },
            { sym: '\\mathcal{D}', def: 'The whole collection of documents being searched' },
            { sym: 'k', def: 'How many top-scoring documents to hand to the model' },
          ],
          caption: 'Retrieval chooses the k documents whose embeddings are most similar to the question\'s, where cosine similarity (see [the maths](@ai/foundations/maths)) ranges from −1 to 1 and here is almost always close to 0–1, since text embeddings rarely point in truly opposite directions. A small k keeps the prompt short and focused but risks missing a relevant passage; a large k gives the model more to work with but dilutes the context with less-relevant material and costs more tokens.',
        },
      ],
    },
    {
      id: 'agents',
      title: 'Tools and agents',
      blocks: [
        {
          t: 'flow',
          nodes: [
            { label: 'Goal', sub: '"Find this week’s weather and plan my runs"', tone: 'human' },
            { label: 'Think', sub: 'decide the next step', tone: 'model' },
            { label: 'Act', sub: 'call a tool: search, code, calendar', tone: 'process' },
            { label: 'Observe', sub: 'read the tool’s result', tone: 'data' },
            { label: 'Answer when done', tone: 'output' },
          ],
          loop: 'think → act → observe repeats until the goal is met',
        },
        {
          t: 'code',
          title: 'Calling a model from Python (Anthropic SDK)',
          code: String.raw`import anthropic

client = anthropic.Anthropic()   # reads ANTHROPIC_API_KEY from the environment
reply = client.messages.create(
    model="claude-sonnet-5",
    max_tokens=500,
    system="You are a patient maths tutor. Ask one question at a time.",
    messages=[{"role": "user", "content": "Help me understand the chain rule."}],
)
print(reply.content[0].text)`,
          caption: 'Model names change over time; check the provider’s documentation for current ones.',
        },
        {
          t: 'dodont',
          do: ['Give agents limited permissions and review important actions', 'Keep a human in the loop for anything irreversible', 'Log what tools were called and why'],
          dont: ['Paste instructions from untrusted web pages straight into a prompt (prompt injection)', 'Give an agent your passwords or payment details without safeguards'],
        },
      ],
    },
  ],
  sources: ['Brown, T., et al. (2020). Language models are few-shot learners. *NeurIPS*.', 'Wei, J., et al. (2022). Chain-of-thought prompting elicits reasoning in large language models. *NeurIPS*.', 'Kojima, T., et al. (2022). Large language models are zero-shot reasoners. *NeurIPS*.', 'Lewis, P., et al. (2020). Retrieval-augmented generation for knowledge-intensive NLP tasks. *NeurIPS*.', 'Yao, S., et al. (2023). ReAct: Synergizing reasoning and acting in language models. *ICLR*.'],
  related: ['ai/generative/llms', 'ai/neural/embeddings', 'ai/practice/ai-assistants'],
}

export default guide
