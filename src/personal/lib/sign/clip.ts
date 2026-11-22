import type { Camera, Item } from './hand'
import { BODY_BOX, bodyClip, bodyFrame, closeClip, closeFrame } from './scene'
import type { BodyKey, CloseKey } from './scene'

// Anything that can be drawn at a moment in time: a close-up of a hand or the signer.
export type Clip = { duration: number; frame: (t: number, cam: Camera) => { items: Item[]; box: [number, number, number, number] } }

export function handClip(keys: CloseKey[]): Clip {
  const c = closeClip(keys)
  return { duration: c.duration, frame: (t, cam) => closeFrame(c, t, cam) }
}

export function signerClip(keys: BodyKey[]): Clip {
  const c = bodyClip(keys)
  return { duration: c.duration, frame: (t, cam) => ({ items: bodyFrame(c, t, cam), box: BODY_BOX }) }
}
