import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'Every first aid course teaches some version of the same fixed checklist for a reason: under stress, people skip steps, and a fixed order stops you from missing something critical. The classic sequence is Danger, Response, Airway, Breathing, Circulation (DRABC, or DRSABC with Send for help added), each step gates the next, so you never move on to breathing while the airway is still blocked.',
  nutshell: [
    '**D**anger: is the scene safe for you to approach?',
    '**R**esponse: is the person conscious, do they respond to voice or a gentle shake?',
    '**S**end for help: call emergency services, or get someone else to.',
    '**A**irway: is it open and clear?',
    '**B**reathing: are they breathing normally?',
    '**C**irculation: are they bleeding seriously, and (if trained) do they have a pulse?',
  ],
  sections: [
    {
      id: 'flow',
      title: 'The full sequence',
      blocks: [
        {
          t: 'diagram',
          title: 'The primary survey',
          caption: 'Each box gates the next: do not move on until the one before it is answered.',
          nodes: [
            { id: 'd', label: 'Danger', sub: 'is the scene safe?', shape: 'diamond', tone: 'pink', col: 1, row: 0, w: 140 },
            { id: 'safe', label: 'Make safe or wait', shape: 'rect', tone: 'orange', col: 0, row: 0.6, w: 150 },
            { id: 'r', label: 'Response', sub: 'talk, then gently shake the shoulders', shape: 'diamond', tone: 'teal', col: 1, row: 1.3, w: 160 },
            { id: 'rp', label: 'Conscious: assess their complaint directly', shape: 'rect', tone: 'mint', col: 2, row: 1.3, w: 165 },
            { id: 's', label: 'Send for help', sub: 'call or get someone to call', shape: 'rect', tone: 'lavender', col: 1, row: 2.2, w: 160 },
            { id: 'a', label: 'Airway', sub: 'open it: tilt the head, lift the chin', shape: 'diamond', tone: 'teal', col: 1, row: 3.1, w: 150 },
            { id: 'b', label: 'Breathing', sub: 'look, listen, feel for up to 10 seconds', shape: 'diamond', tone: 'teal', col: 1, row: 4, w: 155 },
            { id: 'cpr', label: 'Not breathing normally → start CPR', shape: 'rect', tone: 'pink', col: 0, row: 4.7, w: 170 },
            { id: 'c', label: 'Circulation', sub: 'serious bleeding? treat it now', shape: 'diamond', tone: 'teal', col: 1, row: 5, w: 155 },
            { id: 'recovery', label: 'Breathing, unresponsive → recovery position', shape: 'rect', tone: 'mint', col: 2, row: 4.7, w: 175 },
          ],
          edges: [
            { from: 'd', to: 'safe', label: 'unsafe', tone: 'orange' },
            { from: 'safe', to: 'r' },
            { from: 'd', to: 'r', label: 'safe' },
            { from: 'r', to: 'rp', label: 'responsive', tone: 'mint' },
            { from: 'r', to: 's', label: 'unresponsive', tone: 'pink' },
            { from: 's', to: 'a' },
            { from: 'a', to: 'b' },
            { from: 'b', to: 'cpr', label: 'no / abnormal', tone: 'pink' },
            { from: 'b', to: 'recovery', label: 'breathing normally', tone: 'mint' },
            { from: 'recovery', to: 'c' },
          ],
        },
      ],
    },
    {
      id: 'detail',
      title: 'Each step in a little more detail',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Danger', body: 'Scan for traffic, fire, electrical hazards, unstable structures, or an ongoing threat from another person. If present, do not approach until it is controlled or you have a safe way around it.' },
            { title: 'Response', body: 'Speak loudly and clearly, “Can you hear me? Open your eyes.”, and gently shake the shoulders. Never shake the head or neck, in case of spinal injury.' },
            { title: 'Send for help', body: 'As soon as you know this is serious, call emergency services yourself or point directly at one bystander and tell them to, “You, in the red jacket, call an ambulance.” A vague call to a crowd is often ignored.' },
            { title: 'Airway', body: 'In an unresponsive person, the tongue can fall back and block the airway. Tilt the head back and lift the chin to open it before checking breathing.' },
            { title: 'Breathing', body: 'With the airway open, look for chest movement, listen for breath sounds, and feel for breath on your cheek, for up to 10 seconds. Occasional gasping is not normal breathing, it can be a sign of cardiac arrest.' },
            { title: 'Circulation', body: 'Control any serious bleeding you can see. Formal pulse checks are not emphasised for untrained bystanders in current guidance, if someone is not breathing normally, start CPR rather than spending time searching for a pulse.' },
          ],
        },
      ],
    },
  ],
}

export default guide
