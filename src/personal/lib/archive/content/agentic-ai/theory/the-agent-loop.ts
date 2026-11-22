import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Every LLM agent, however sophisticated, runs the same loop: the model reads the goal and everything that has happened so far, decides on an action, a program carries out that action (a tool call), and the result is added to the model’s context for the next turn. This guide traces the loop in detail.',
  nutshell: [
    '**ReAct** (Yao et al., 2022): interleave **reasoning** (“thought”) and **acting** (tool calls), with **observations** fed back.',
    '**Function calling**: the model outputs a structured request (tool name and arguments, usually JSON) that ordinary code executes.',
    'Each tool has a **schema**: a name, a description and typed parameters. Good descriptions matter as much as good prompts.',
    'The loop needs **stopping conditions**: goal met, step limit, budget limit, or ask a human.',
  ],
  sections: [
    {
      id: 'react',
      title: 'Reason, act, observe',
      blocks: [
        { t: 'cycle', items: [
          { name: 'Context', body: 'System instructions, the user’s goal, tool definitions, and the history of thoughts, actions and observations.' },
          { name: 'Reason', body: 'The model works out what it knows and what it needs next.' },
          { name: 'Act', body: 'The model emits a tool call, for example search(query="…").' },
          { name: 'Observe', body: 'The harness runs the tool and appends the result to the context.' },
        ] },
        { t: 'callout', tone: 'note', title: 'The model does not run anything', text: 'A language model only produces text. The surrounding program (the harness or scaffold) parses that text, decides whether the call is allowed, runs it and pastes the result back. All safety controls on what an agent can do live in that harness.' },
      ],
    },
    {
      id: 'schema',
      title: 'A tool schema',
      blocks: [
        { t: 'code', lang: 'text', title: 'A typical tool definition (JSON Schema style)', code: `{
  "name": "get_weather",
  "description": "Current weather for a city. Use when the user asks about weather now.",
  "input_schema": {
    "type": "object",
    "properties": {
      "city": { "type": "string", "description": "City name, e.g. Singapore" },
      "units": { "type": "string", "enum": ["metric", "imperial"] }
    },
    "required": ["city"]
  }
}` },
        { t: 'dodont', do: [
          'Write descriptions as if for a new colleague: when to use the tool and when not to',
          'Use clear, typed parameters with examples',
          'Return concise, structured results with useful error messages',
        ], dont: [
          'Give two tools with overlapping, confusing purposes',
          'Return huge raw outputs that fill the context',
          'Hide failures: return “error: city not found”, not an empty string',
        ] },
      ],
    },
    {
      id: 'trace',
      title: 'A traced example',
      blocks: [
        { t: 'example', title: 'Goal: “What will the trip to Kuala Lumpur cost in SGD if the hotel is 450 MYR a night for 3 nights?”', lines: [
          { label: 'Thought 1', text: 'I need the MYR to SGD exchange rate.' },
          { label: 'Action 1', text: 'fx_rate(from="MYR", to="SGD")' },
          { label: 'Observation 1', text: '{"rate": 0.29}' },
          { label: 'Thought 2', text: 'Total is 450 × 3 = 1350 MYR. Convert with the calculator to avoid arithmetic slips.' },
          { label: 'Action 2', text: 'calculate(expression="1350 * 0.29")' },
          { label: 'Observation 2', text: '{"result": 391.5}' },
          { label: 'Thought 3', text: 'I have the answer; no more tools needed.' },
          { label: 'Final answer', text: 'About S$391.50 for three nights at 450 MYR a night (rate 0.29, which changes daily).' },
        ] },
      ],
    },
    {
      id: 'stopping',
      title: 'Stopping and control',
      blocks: [
        { t: 'table', head: ['Stop condition', 'Why'], rows: [
          ['The model declares it is done', 'Normal ending; best paired with a check (tests, a validator)'],
          ['Maximum steps reached', 'Prevents infinite loops'],
          ['Token or money budget used', 'Prevents runaway cost'],
          ['Time limit', 'Keeps latency bounded'],
          ['High-risk action requested', 'Pause for human approval (payments, deleting data, sending emails)'],
          ['Repeated failure', 'The same error three times: change strategy or ask for help'],
        ] },
      ],
    },
  ],
  sources: [
    'Yao, S. et al. (2022). ReAct: Synergizing reasoning and acting in language models. arXiv:2210.03629 (ICLR 2023).',
    'Schick, T. et al. (2023). Toolformer: Language models can teach themselves to use tools. NeurIPS.',
    'Anthropic (2024). Building effective agents; Writing tools for agents (2025).',
  ],
  related: ['agentic-ai/theory/planning-and-reasoning', 'agentic-ai/maths/reliability', 'agentic-ai/threats/prompt-injection'],
}

export default guide
