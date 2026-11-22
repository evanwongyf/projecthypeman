import * as THREE from 'three'
import { Figure } from './figure'
import type { Ground, Muscle, Prop } from './figure'
import { sample, track } from './pose'
import type { Key, Track } from './pose'

// A small 3D studio for one exercise: lights, a floor that can scroll under a runner, a
// camera you can swing around, and the figure.

export type View = { az: number; el: number; dist: number; y: number }
export const VIEWS = {
  front: { az: 0, el: 6, dist: 3.7, y: 0.95 },
  three: { az: 38, el: 10, dist: 3.7, y: 0.95 },
  side: { az: 90, el: 4, dist: 3.7, y: 0.95 },
  low: { az: 70, el: 12, dist: 3.2, y: 0.5 },
  tall: { az: 32, el: 6, dist: 4.3, y: 1.15 },
  hang: { az: 32, el: 2, dist: 4.6, y: 1.55 },
  high: { az: 60, el: 18, dist: 4.3, y: 1.3 },
} satisfies Record<string, View>
export type ViewName = keyof typeof VIEWS

export type Motion = {
  keys: Key[]
  // One cycle (one rep, or one stride for running), in ms.
  ms: number
  ground?: Ground
  props?: Prop[]
  // Floor speed in metres per second, for running and walking in place.
  travel?: number
  view?: ViewName
}

function floorTexture() {
  const c = document.createElement('canvas')
  c.width = c.height = 256
  const g = c.getContext('2d')!
  g.fillStyle = '#efe7da'
  g.fillRect(0, 0, 256, 256)
  g.strokeStyle = 'rgba(60,45,30,0.13)'
  g.lineWidth = 2
  for (let i = 0; i <= 256; i += 64) {
    g.beginPath()
    g.moveTo(i, 0)
    g.lineTo(i, 256)
    g.moveTo(0, i)
    g.lineTo(256, i)
    g.stroke()
  }
  const t = new THREE.CanvasTexture(c)
  t.wrapS = t.wrapT = THREE.RepeatWrapping
  t.repeat.set(10, 10)
  t.colorSpace = THREE.SRGBColorSpace
  t.anisotropy = 4
  return t
}

export class Stage {
  readonly renderer: THREE.WebGLRenderer
  readonly scene = new THREE.Scene()
  readonly camera = new THREE.PerspectiveCamera(32, 1, 0.1, 60)
  readonly figure: Figure
  private floorTex: THREE.CanvasTexture
  private track?: Track
  private motion?: Motion
  view: View = { ...VIEWS.three }

  constructor(canvas: HTMLCanvasElement, tone = 1) {
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false, preserveDrawingBuffer: true })
    this.renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1))
    this.renderer.shadowMap.enabled = true
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping
    this.renderer.toneMappingExposure = 1.05
    this.renderer.outputColorSpace = THREE.SRGBColorSpace

    const bg = new THREE.Color('#f6efe4')
    this.scene.background = bg
    this.scene.fog = new THREE.Fog(bg, 8, 18)

    this.scene.add(new THREE.HemisphereLight('#fff8ee', '#b7a58c', 1.1))
    const key = new THREE.DirectionalLight('#fff3e0', 2.3)
    key.position.set(2.5, 5, 3.5)
    key.castShadow = true
    key.shadow.mapSize.set(2048, 2048)
    key.shadow.camera.left = -2.5
    key.shadow.camera.right = 2.5
    key.shadow.camera.top = 3
    key.shadow.camera.bottom = -2
    key.shadow.bias = -0.0004
    key.shadow.normalBias = 0.02
    key.shadow.radius = 4
    this.scene.add(key)
    const rim = new THREE.DirectionalLight('#dbe8ff', 0.9)
    rim.position.set(-3, 3, -4)
    this.scene.add(rim)

    this.floorTex = floorTexture()
    const floor = new THREE.Mesh(new THREE.CircleGeometry(12, 64), new THREE.MeshStandardMaterial({ map: this.floorTex, roughness: 0.95 }))
    floor.rotation.x = -Math.PI / 2
    floor.receiveShadow = true
    this.scene.add(floor)

    this.figure = new Figure(tone)
    this.scene.add(this.figure.root, this.figure.props)
  }

  setMotion(m: Motion) {
    this.motion = m
    this.track = track(m.keys)
    this.figure.useProps(m.props ?? [])
  }

  // How long one cycle of the current motion takes, in ms.
  get cycleMs() {
    return this.motion?.ms ?? 1000
  }

  setView(v: View) {
    this.view = v
  }

  resize(w: number, h: number) {
    this.renderer.setSize(w, h, false)
    this.camera.aspect = w / h
    this.camera.updateProjectionMatrix()
  }

  // Draws the exercise at a point in its cycle; `time` (s) scrolls the floor for runners.
  draw(phase: number, time = 0) {
    if (this.track && this.motion) {
      this.figure.apply(sample(this.track, phase), this.motion.ground)
      this.figure.updateProps(phase)
      this.floorTex.offset.y = this.motion.travel ? (time * this.motion.travel) / 2.4 : 0
    }
    const { az, el, dist, y } = this.view
    const a = THREE.MathUtils.degToRad(az)
    const e = THREE.MathUtils.degToRad(el)
    this.camera.position.set(Math.sin(a) * Math.cos(e) * dist, y + Math.sin(e) * dist, Math.cos(a) * Math.cos(e) * dist)
    this.camera.lookAt(0, y, 0)
    this.renderer.render(this.scene, this.camera)
  }

  highlight(m: Muscle[]) {
    this.figure.setHighlight(m)
  }

  dispose() {
    this.scene.traverse((o) => {
      const mesh = o as THREE.Mesh
      if (mesh.geometry) mesh.geometry.dispose()
      const mat = mesh.material as THREE.Material | THREE.Material[] | undefined
      if (Array.isArray(mat)) mat.forEach((x) => x.dispose())
      else mat?.dispose()
    })
    this.floorTex.dispose()
    this.renderer.dispose()
  }
}
