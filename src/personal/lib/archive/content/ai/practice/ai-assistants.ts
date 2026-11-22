import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'AI assistants such as ChatGPT, Claude, Gemini and Microsoft Copilot, coding assistants such as GitHub Copilot and Cursor, and image tools such as Midjourney are now everyday tools. Used well, they are a patient tutor and a fast first-draft machine; used carelessly, they produce confident errors and can short-circuit your own learning.',
  nutshell: [
    'They are language models: excellent at language, explanation and code, unreliable on facts they cannot check.',
    'For study, use them to **explain, question and quiz** you, not to do the thinking for you.',
    'Give context and say what you want; ask for sources, then check them.',
    'Follow your school’s or employer’s rules on AI use and data privacy.',
  ],
  sections: [
    {
      id: 'landscape',
      title: 'Kinds of AI tools',
      blocks: [
        {
          t: 'table',
          head: ['Kind', 'Examples', 'Good for'],
          rows: [
            ['General chat assistants', 'ChatGPT (OpenAI), Claude (Anthropic), Gemini (Google), Copilot (Microsoft), Le Chat (Mistral)', 'Explaining, drafting, summarising, brainstorming, analysing documents'],
            ['Search-style assistants', 'Perplexity, search engines’ AI answers', 'Answers with links to sources (still check them)'],
            ['Coding assistants', 'GitHub Copilot, Cursor, Claude Code', 'Autocomplete, explaining code, writing tests, refactoring'],
            ['Image and video', 'Midjourney, DALL·E, Stable Diffusion, Adobe Firefly; video tools like Sora, Veo', 'Illustrations, concept art, editing'],
            ['Speech and audio', 'Whisper (transcription), text-to-speech voices', 'Transcribing lectures, accessibility'],
            ['Study-specific', 'NotebookLM, AI features in flashcard and note apps', 'Working from your own notes and sources'],
          ],
          caption: 'Products and features change quickly; this is a snapshot.',
        },
      ],
    },
    {
      id: 'study',
      title: 'Using AI to learn (not to avoid learning)',
      blocks: [
        {
          t: 'dodont',
          do: [
            'Ask for an explanation at your level, then explain it back and ask what you got wrong',
            'Ask it to quiz you, one question at a time, and to wait for your answer',
            'Paste your own notes and ask for gaps, flashcards or a summary to check against',
            'Ask for a worked example, then a similar problem without the answer',
            'Use it to get unstuck, then continue yourself',
          ],
          dont: [
            'Submit AI-written work as your own where that is not allowed',
            'Trust references, quotes, statistics or dates without checking them',
            'Let it do practice problems for you: the effort is what builds memory',
            'Paste personal, medical or confidential information into tools that may store it',
          ],
        },
        {
          t: 'example',
          title: 'A tutoring prompt',
          lines: [
            { text: '"I’m learning about backpropagation for the first time. Explain it with a tiny numerical example. Then ask me three questions, one at a time, to check I understood. Don’t give the answers until I’ve tried."' },
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Check with a second source', text: 'For anything that matters (dates, figures, medical, legal or financial information), confirm with a textbook, an official site or a teacher. Ask the assistant "how sure are you, and how could I verify this?"' },
      ],
    },
    {
      id: 'how-they-fail',
      title: 'How assistants go wrong',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'Hallucination', body: 'Fluent, specific, wrong: made-up citations, wrong dates, invented functions in code.' },
            { title: 'Sycophancy', body: 'Agreeing with you too readily. Ask it to argue the other side or find flaws.' },
            { title: 'Out-of-date knowledge', body: 'Training stops at a cut-off date; without web search it does not know recent events.' },
            { title: 'Hidden reasoning errors', body: 'Arithmetic slips and logical jumps inside long answers. Ask it to show working, or to use a code tool.' },
          ],
        },
        { t: 'callout', tone: 'fact', title: 'A record-breaking launch', text: 'ChatGPT, released on 30 November 2022, was estimated to have reached 100 million monthly users within about two months, at the time the fastest growth of any consumer app.' },
      ],
    },
  ],
  sources: ['UNESCO. (2023). *Guidance for Generative AI in Education and Research*.', 'Bastani, H., et al. (2024). Generative AI can harm learning. *SSRN Working Paper* (later published in *PNAS*, 2025).', 'Hu, K. (2023, February 2). ChatGPT sets record for fastest-growing user base. *Reuters*.'],
  related: ['ai/generative/prompting', 'ai/generative/llms', 'ai/practice/ethics'],
}

export default guide
