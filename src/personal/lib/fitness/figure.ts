import * as THREE from 'three'
import type { Pose, Side } from './pose'

// The 3D exercise figure: a smooth mannequin in a t-shirt, shorts and trainers, built from
// simple shapes on a skeleton of joints. `apply` sets a pose and then settles the body on
// the floor (or a bench, or under a bar) so feet, hands and back land where they should.

export type Muscle = 'legs' | 'glutes' | 'calves' | 'core' | 'chest' | 'back' | 'shoulders' | 'arms'
export type Ground = 'floor' | 'hang' | 'bench'
export type Prop = 'barbell' | 'dumbbells' | 'kettlebell' | 'bar' | 'bench' | 'rope' | 'box'

export const BAR_HEIGHT = 2.25
export const BENCH_HEIGHT = 0.45
export const BOX_HEIGHT = 0.45

const rad = THREE.MathUtils.degToRad

export const SKIN_TONES = ['#f3cfb3', '#e2b08a', '#c68a5f', '#93603e', '#5e3b26']

type Limb = { hip: THREE.Group; knee: THREE.Group; ankle: THREE.Group; shoulder: THREE.Group; elbow: THREE.Group; wrist: THREE.Group; hand: THREE.Mesh }

export class Figure {
  readonly root = new THREE.Group()
  readonly props = new THREE.Group()
  private spineLow = new THREE.Group()
  private chest = new THREE.Group()
  private neck = new THREE.Group()
  private L: Limb
  private R: Limb
  private markers: { o: THREE.Object3D; r: number; torso: boolean }[] = []
  private muscleMeshes = new Map<Muscle, THREE.Mesh[]>()
  private skin: THREE.MeshStandardMaterial
  private propMeshes: Partial<Record<Prop, THREE.Object3D>> = {}
  private ropeTube?: THREE.Mesh
  private highlight = new Set<Muscle>()
  private skinMats: THREE.MeshStandardMaterial[] = []

  constructor(tone = 1) {
    this.skin = new THREE.MeshStandardMaterial({ color: SKIN_TONES[tone] ?? SKIN_TONES[1], roughness: 0.55 })
    this.skinMats.push(this.skin)
    const shirt = new THREE.MeshStandardMaterial({ color: '#3f8f8b', roughness: 0.85 })
    const shorts = new THREE.MeshStandardMaterial({ color: '#2c3440', roughness: 0.8 })
    const shoe = new THREE.MeshStandardMaterial({ color: '#f2f2f0', roughness: 0.6 })
    const sole = new THREE.MeshStandardMaterial({ color: '#e46f3a', roughness: 0.7 })
    const hair = new THREE.MeshStandardMaterial({ color: '#2b211b', roughness: 0.9 })

    const shadow = (m: THREE.Mesh) => {
      m.castShadow = true
      m.receiveShadow = true
      return m
    }
    const sphere = (r: number, mat: THREE.Material, at: [number, number, number] = [0, 0, 0], scale: [number, number, number] = [1, 1, 1]) => {
      const m = shadow(new THREE.Mesh(new THREE.SphereGeometry(r, 28, 20), mat))
      m.position.set(...at)
      m.scale.set(...scale)
      return m
    }
    // A tapered segment hanging down from its joint, with a rounded end.
    const segment = (len: number, r1: number, r2: number, mat: THREE.Material, from = 0) => {
      const m = shadow(new THREE.Mesh(new THREE.CylinderGeometry(r1, r2, len - from, 24, 1), mat))
      m.position.y = -(from + (len - from) / 2)
      return m
    }
    const tag = (m: THREE.Mesh, muscle: Muscle) => {
      // Each tagged mesh gets its own material so it can light up alone.
      const own = (m.material as THREE.MeshStandardMaterial).clone()
      if (m.material === this.skin) this.skinMats.push(own)
      m.material = own
      this.muscleMeshes.set(muscle, [...(this.muscleMeshes.get(muscle) ?? []), m])
      return m
    }
    const mark = (parent: THREE.Object3D, at: [number, number, number], r: number, torso = false) => {
      const o = new THREE.Object3D()
      o.position.set(...at)
      parent.add(o)
      this.markers.push({ o, r, torso })
    }

    // Pelvis (the root sits between the hip joints).
    this.root.add(tag(sphere(0.165, shorts, [0, 0.0, 0], [1, 0.72, 0.78]), 'glutes'))
    mark(this.root, [0, -0.02, -0.12], 0.02, true)
    mark(this.root, [0, -0.02, 0.11], 0.02, true)
    mark(this.root, [0, -0.11, -0.02], 0.01, true)
    mark(this.root, [0.13, 0, 0], 0.03, true)
    mark(this.root, [-0.13, 0, 0], 0.03, true)

    // Spine: abdomen, then chest, shoulders, neck and head.
    this.spineLow.position.y = 0.05
    this.root.add(this.spineLow)
    this.spineLow.add(tag(sphere(0.15, shirt, [0, 0.1, 0], [1.0, 1.1, 0.74]), 'core'))
    mark(this.spineLow, [0, 0.1, -0.1], 0.01, true)
    mark(this.spineLow, [0, 0.1, 0.1], 0.01, true)
    this.chest.position.y = 0.19
    this.spineLow.add(this.chest)
    const chestMesh = tag(sphere(0.18, shirt, [0, 0.12, 0], [1.08, 1.06, 0.68]), 'chest')
    this.chest.add(chestMesh)
    // The back shares the chest shape; a second shell lets it light up on its own.
    const backMesh = tag(sphere(0.181, shirt, [0, 0.12, -0.004], [1.08, 1.06, 0.68]), 'back')
    ;(backMesh.geometry as THREE.SphereGeometry).dispose()
    backMesh.geometry = new THREE.SphereGeometry(0.181, 28, 20, Math.PI, Math.PI)
    this.chest.add(backMesh)
    mark(this.chest, [0, 0.12, -0.13], 0.01, true)
    mark(this.chest, [0, 0.12, 0.13], 0.01, true)
    mark(this.chest, [0.17, 0.2, 0], 0.05, true)
    mark(this.chest, [-0.17, 0.2, 0], 0.05, true)

    this.neck.position.y = 0.28
    this.chest.add(this.neck)
    this.neck.add(shadow(new THREE.Mesh(new THREE.CylinderGeometry(0.048, 0.055, 0.12, 20), this.skin)))
    this.neck.children[0].position.y = 0.03
    const head = new THREE.Group()
    head.position.y = 0.1
    this.neck.add(head)
    head.add(sphere(0.1, this.skin, [0, 0.09, 0.005], [0.93, 1.16, 1.02]))
    const cap = shadow(new THREE.Mesh(new THREE.SphereGeometry(0.106, 28, 16, 0, Math.PI * 2, 0, Math.PI * 0.52), hair))
    cap.position.set(0, 0.1, -0.008)
    cap.scale.set(0.95, 1.12, 1.05)
    cap.rotation.x = -0.35
    head.add(cap)
    head.add(sphere(0.018, this.skin, [0, 0.07, 0.1], [0.8, 1.1, 1]))
    head.add(sphere(0.022, this.skin, [0.093, 0.08, 0], [0.5, 1, 0.8]))
    head.add(sphere(0.022, this.skin, [-0.093, 0.08, 0], [0.5, 1, 0.8]))
    mark(head, [0, 0.09, 0], 0.11, true)

    const limb = (s: 1 | -1): Limb => {
      // Arm.
      const shoulder = new THREE.Group()
      shoulder.position.set(0.185 * s, 0.2, 0)
      this.chest.add(shoulder)
      shoulder.add(tag(sphere(0.066, shirt, [0, -0.015, 0], [1, 0.95, 1]), 'shoulders'))
      shoulder.add(tag(segment(0.285, 0.056, 0.044, this.skin), 'arms'))
      shoulder.add(segment(0.13, 0.068, 0.062, shirt))
      const elbow = new THREE.Group()
      elbow.position.y = -0.285
      shoulder.add(elbow)
      elbow.add(sphere(0.044, this.skin))
      elbow.add(tag(segment(0.25, 0.044, 0.033, this.skin), 'arms'))
      mark(elbow, [0, 0, 0], 0.04)
      const wrist = new THREE.Group()
      wrist.position.y = -0.25
      elbow.add(wrist)
      const hand = sphere(0.047, this.skin, [0, -0.065, 0], [0.85, 1.6, 0.55])
      wrist.add(hand)
      mark(wrist, [0, -0.12, 0], 0.02)
      mark(wrist, [0, -0.05, 0], 0.03)

      // Leg.
      const hip = new THREE.Group()
      hip.position.set(0.09 * s, -0.04, 0)
      this.root.add(hip)
      hip.add(tag(segment(0.43, 0.088, 0.058, this.skin), 'legs'))
      hip.add(segment(0.22, 0.097, 0.088, shorts))
      const knee = new THREE.Group()
      knee.position.y = -0.43
      hip.add(knee)
      knee.add(sphere(0.058, this.skin))
      knee.add(tag(segment(0.41, 0.06, 0.037, this.skin), 'calves'))
      mark(knee, [0, 0, 0.03], 0.05)
      const ankle = new THREE.Group()
      ankle.position.y = -0.41
      knee.add(ankle)
      const foot = shadow(new THREE.Mesh(new THREE.CapsuleGeometry(0.045, 0.16, 8, 20), shoe))
      foot.rotation.x = Math.PI / 2
      foot.position.set(0, -0.04, 0.055)
      foot.scale.set(1, 1, 0.8)
      ankle.add(foot)
      const soleMesh = shadow(new THREE.Mesh(new THREE.BoxGeometry(0.085, 0.022, 0.25), sole))
      soleMesh.position.set(0, -0.073, 0.055)
      ankle.add(soleMesh)
      mark(ankle, [0, -0.085, -0.07], 0.002)
      mark(ankle, [0, -0.085, 0.18], 0.002)
      return { hip, knee, ankle, shoulder, elbow, wrist, hand }
    }
    this.L = limb(1)
    this.R = limb(-1)
    this.root.position.y = 0.97
  }

  setTone(tone: number) {
    for (const m of this.skinMats) m.color.set(SKIN_TONES[tone] ?? SKIN_TONES[1])
  }

  // Lights up the muscles an exercise works.
  setHighlight(muscles: Muscle[]) {
    this.highlight = new Set(muscles)
    for (const [m, meshes] of this.muscleMeshes)
      for (const mesh of meshes) {
        const mat = mesh.material as THREE.MeshStandardMaterial
        const on = this.highlight.has(m)
        mat.emissive.set(on ? '#ff5a1f' : '#000000')
        mat.emissiveIntensity = on ? 0.55 : 0
      }
  }

  private side(l: Limb, s: Side, sign: 1 | -1) {
    const [hf, ha, hr] = s.hip
    l.hip.rotation.set(-rad(hf), rad(hr) * sign, rad(ha) * sign, 'ZXY')
    l.knee.rotation.set(rad(s.knee), 0, 0)
    l.ankle.rotation.set(-rad(s.ankle), 0, 0)
    const [sf, sa, sr] = s.shoulder
    l.shoulder.rotation.set(-rad(sf), -rad(sr) * sign, rad(sa) * sign, 'ZXY')
    l.elbow.rotation.set(-rad(s.elbow), 0, 0)
    l.wrist.rotation.set(-rad(s.wrist), 0, 0)
    l.hand.scale.set(0.85 + s.grip * 0.25, 1.6 - s.grip * 0.7, 0.55 + s.grip * 0.45)
  }

  apply(p: Pose, ground: Ground = 'floor') {
    const r = this.root
    r.rotation.set(rad(p.pitch), rad(p.yaw), rad(p.roll), 'YXZ')
    r.position.set(p.x, 0.97, p.z)
    this.spineLow.rotation.set(rad(p.spine[0] * 0.45), -rad(p.spine[2] * 0.4), rad(p.spine[1] * 0.4), 'XZY')
    this.chest.rotation.set(rad(p.spine[0] * 0.55), -rad(p.spine[2] * 0.6), rad(p.spine[1] * 0.6), 'XZY')
    this.neck.rotation.set(rad(p.neck[0]), -rad(p.neck[2]), rad(p.neck[1]), 'XZY')
    this.side(this.L, p.L, 1)
    this.side(this.R, p.R, -1)
    r.updateMatrixWorld(true)

    const v = new THREE.Vector3()
    let shift: number
    if (ground === 'hang') {
      const a = this.L.wrist.localToWorld(v.set(0, -0.07, 0)).y
      const b = this.R.wrist.localToWorld(v.set(0, -0.07, 0)).y
      shift = BAR_HEIGHT - (a + b) / 2
    } else {
      let min = Infinity
      for (const m of this.markers) {
        if (ground === 'bench' && !m.torso) continue
        min = Math.min(min, m.o.getWorldPosition(v).y - m.r)
      }
      shift = (ground === 'bench' ? BENCH_HEIGHT : 0) - min
    }
    r.position.y += shift + p.lift
    r.updateMatrixWorld(true)
  }

  // ── equipment ────────────────────────────────────────────────────────────

  private handAt(l: Limb) {
    return l.wrist.localToWorld(new THREE.Vector3(0, -0.07, 0.01))
  }

  useProps(props: Prop[]) {
    for (const o of Object.values(this.propMeshes)) this.props.remove(o!)
    this.propMeshes = {}
    if (this.ropeTube) {
      this.props.remove(this.ropeTube)
      this.ropeTube.geometry.dispose()
      this.ropeTube = undefined
    }
    const metal = new THREE.MeshStandardMaterial({ color: '#b9bec4', metalness: 0.85, roughness: 0.3 })
    const black = new THREE.MeshStandardMaterial({ color: '#1f2226', roughness: 0.6 })
    const wood = new THREE.MeshStandardMaterial({ color: '#b98a5a', roughness: 0.8 })
    const pad = new THREE.MeshStandardMaterial({ color: '#30343a', roughness: 0.7 })
    const cast = (m: THREE.Mesh) => {
      m.castShadow = true
      m.receiveShadow = true
      return m
    }
    for (const p of props) {
      const g = new THREE.Group()
      if (p === 'barbell') {
        const bar = cast(new THREE.Mesh(new THREE.CylinderGeometry(0.014, 0.014, 2.0, 16), metal))
        bar.rotation.z = Math.PI / 2
        g.add(bar)
        for (const s of [-1, 1])
          for (const [x, r] of [
            [0.72, 0.225],
            [0.79, 0.2],
          ] as const) {
            const plate = cast(new THREE.Mesh(new THREE.CylinderGeometry(r, r, 0.05, 40), black))
            plate.rotation.z = Math.PI / 2
            plate.position.x = x * s
            g.add(plate)
          }
      } else if (p === 'dumbbells') {
        for (const _ of [0, 1]) {
          const d = new THREE.Group()
          const handle = cast(new THREE.Mesh(new THREE.CylinderGeometry(0.016, 0.016, 0.16, 12), metal))
          handle.rotation.z = Math.PI / 2
          d.add(handle)
          for (const s of [-1, 1]) {
            const end = cast(new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.055, 0.07, 6), black))
            end.rotation.z = Math.PI / 2
            end.position.x = 0.11 * s
            d.add(end)
          }
          g.add(d)
        }
      } else if (p === 'kettlebell') {
        const bell = cast(new THREE.Mesh(new THREE.SphereGeometry(0.1, 24, 18), black))
        bell.position.y = -0.13
        bell.scale.set(1, 0.92, 1)
        g.add(bell)
        const handle = cast(new THREE.Mesh(new THREE.TorusGeometry(0.065, 0.014, 10, 24, Math.PI), black))
        handle.position.y = -0.05
        g.add(handle)
      } else if (p === 'bar') {
        const bar = cast(new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 1.6, 16), metal))
        bar.rotation.z = Math.PI / 2
        bar.position.y = BAR_HEIGHT
        g.add(bar)
        for (const s of [-1, 1]) {
          const post = cast(new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, BAR_HEIGHT + 0.05, 12), black))
          post.position.set(0.8 * s, (BAR_HEIGHT + 0.05) / 2, 0)
          g.add(post)
        }
      } else if (p === 'bench') {
        const top = cast(new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.07, 1.25), pad))
        top.position.set(0, BENCH_HEIGHT - 0.035, -0.3)
        g.add(top)
        for (const z of [-0.8, 0.2]) {
          const leg = cast(new THREE.Mesh(new THREE.BoxGeometry(0.06, BENCH_HEIGHT - 0.07, 0.06), metal))
          leg.position.set(0, (BENCH_HEIGHT - 0.07) / 2, z)
          g.add(leg)
        }
      } else if (p === 'box') {
        const box = cast(new THREE.Mesh(new THREE.BoxGeometry(0.6, BOX_HEIGHT, 0.5), wood))
        box.position.set(0, BOX_HEIGHT / 2, 0.55)
        g.add(box)
      }
      this.propMeshes[p] = g
      this.props.add(g)
    }
  }

  // Moves hand-held equipment to the hands. Call after `apply`.
  updateProps(phase: number) {
    const l = this.handAt(this.L)
    const r = this.handAt(this.R)
    const mid = l.clone().add(r).multiplyScalar(0.5)
    const bb = this.propMeshes.barbell
    if (bb) {
      bb.position.copy(mid)
      const dir = l.clone().sub(r).normalize()
      bb.quaternion.setFromUnitVectors(new THREE.Vector3(1, 0, 0), dir)
    }
    const db = this.propMeshes.dumbbells
    if (db) {
      const q = new THREE.Quaternion()
      ;[this.L, this.R].forEach((limb, i) => {
        const d = db.children[i]
        d.position.copy(i === 0 ? l : r)
        limb.wrist.getWorldQuaternion(q)
        d.quaternion.copy(q)
      })
    }
    const kb = this.propMeshes.kettlebell
    if (kb) {
      // Swung, it carries on in line with the arms; held at the chest, it hangs down.
      kb.position.copy(mid)
      const elbows = this.L.elbow.getWorldPosition(new THREE.Vector3()).add(this.R.elbow.getWorldPosition(new THREE.Vector3())).multiplyScalar(0.5)
      const along = mid.clone().sub(elbows).normalize()
      const down = along.y < -0.2 ? along : new THREE.Vector3(0, -1, 0)
      kb.quaternion.setFromUnitVectors(new THREE.Vector3(0, -1, 0), down)
    }
    if (this.propMeshes.rope) this.drawRope(l, r, phase)
  }

  // The skipping rope: a curve from hand to hand whose far point swings round the body
  // once per cycle: over the head, in front, under the feet and up behind.
  private drawRope(l: THREE.Vector3, r: THREE.Vector3, phase: number) {
    const a = phase * Math.PI * 2
    const centre = this.root.getWorldPosition(new THREE.Vector3())
    const far = new THREE.Vector3((l.x + r.x) / 2, centre.y + Math.cos(a) * 0.99, centre.z + Math.sin(a) * 0.5)
    const control = far.clone().multiplyScalar(2).sub(l.clone().add(r).multiplyScalar(0.5))
    const geo = new THREE.TubeGeometry(new THREE.QuadraticBezierCurve3(l, control, r), 40, 0.007, 6, false)
    if (!this.ropeTube) {
      this.ropeTube = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: '#e0473a', roughness: 0.6 }))
      this.ropeTube.castShadow = true
      this.props.add(this.ropeTube)
    } else {
      this.ropeTube.geometry.dispose()
      this.ropeTube.geometry = geo
    }
  }
}
