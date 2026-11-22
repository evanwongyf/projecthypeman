/**
 * Measured specs for the shoe catalogue, as published on each model's
 * RunRepeat lab review (https://runrepeat.com). Figures are their lab
 * measurements of a men's sample: weight in grams, stack in mm measured at
 * 12% (heel) and 75% (forefoot) of internal length; brandDrop is the
 * manufacturer's stated drop. Only values read off the page are included.
 * Retrieved November 2026.
 */

export type ShoeSpec = {
  url: string
  weightG: number
  heelMm: number
  foreMm: number
  labDropMm: number
  brandDropMm: number | null
  msrpUsd: number | null
  outsole?: string
  upper?: string
}

const S = (
  slug: string,
  weightG: number,
  heelMm: number,
  foreMm: number,
  labDropMm: number,
  brandDropMm: number | null,
  msrpUsd: number | null,
  outsole?: string,
  upper?: string
): ShoeSpec => ({ url: `https://runrepeat.com/${slug}`, weightG, heelMm, foreMm, labDropMm, brandDropMm, msrpUsd, outsole, upper })

/** Keyed by `${brand} ${model}` exactly as in shoes.ts. */
export const SHOE_SPECS: Record<string, ShoeSpec> = {
  'Nike Pegasus 41': S('nike-pegasus-41', 281, 33.6, 22.2, 11.4, 10, 140, undefined, 'Mesh'),
  'Nike Pegasus Plus': S('nike-pegasus-plus', 244, 33.0, 23.6, 9.4, 10, 180, undefined, 'Flyknit'),
  'Nike Vomero 18': S('nike-vomero-18', 298, 42.5, 28.6, 13.9, 10, 150, undefined, 'Mesh'),
  'Nike Invincible 3': S('nike-zoom-x-invincible-run-flyknit-3', 284, 35.2, 25.6, 9.6, 9, 180, undefined, 'Flyknit'),
  'Nike Structure 25': S('nike-structure-25', 302, 36.7, 24.6, 12.1, 10, 140, undefined, 'Mesh'),
  'Nike Zoom Fly 6': S('nike-zoom-fly-6', 248, 39.7, 30.1, 9.6, 8, 170, undefined, 'Mesh'),
  'Nike Vaporfly 3': S('nike-zoom-x-vaporfly-next-3', 190, 37.1, 26.0, 11.1, 8, 250, undefined, 'Flyknit'),
  'Nike Alphafly 3': S('nike-alphafly-3', 201, 38.1, 29.6, 8.5, 8, 285, 'Fast Shot rubber', 'Atomknit'),
  'Nike Pegasus Trail 5': S('nike-pegasus-trail-5', 286, 34.6, 25.0, 9.6, 9.5, 150, 'All Terrain Compound (ATC)', 'Mesh'),
  'Nike Zegama 2': S('nike-zegama-2', 302, 30.3, 26.3, 4.0, 4, 180, 'Vibram Megagrip', 'Mesh'),
  'Nike Ultrafly': S('nike-ultrafly', 299, 36.6, 24.8, 11.8, 8.5, 260, 'Vibram Megagrip Litebase', 'Vaporweave mesh'),
  'Adidas Adizero Adios Pro 3': S('adidas-adizero-adios-pro-3', 218, 37.8, 29.8, 8.0, 6.5, 250, 'Continental', 'Mesh'),
  'Adidas Adizero Adios Pro 4': S('adidas-adizero-adios-pro-4', 200, 36.6, 28.5, 8.1, 6, 250, 'Lighttraxion (small Continental forefoot patch)', 'Mesh'),
  'Adidas Adizero Boston 12': S('adidas-adizero-boston-12', 261, 34.5, 28.4, 6.1, 6.5, 160, 'Continental', 'Mesh'),
  'Adidas Adizero SL2': S('adidas-adizero-sl2', 245, 34.9, 26.7, 8.2, 9, 130, undefined, 'Monomesh'),
  'Adidas Adizero Evo SL': S('adidas-adizero-evo-sl', 223, 36.1, 28.1, 8.0, 6.5, 150, 'Continental forefoot patch + clear rubber heel', 'Mesh'),
  'Adidas Supernova Rise': S('adidas-supernova-rise', 278, 32.5, 22.8, 9.7, 10, 140, 'Adiwear + translucent rubber', 'Mesh'),
  'Adidas Ultraboost 5': S('adidas-ultraboost-5', 292, 35.2, 24.6, 10.6, 10, 180, 'Continental (partial) + translucent compound', 'Primeknit'),
  'Adidas Adizero Takumi Sen 10': S('adidas-adizero-takumi-sen-10', 200, 30.6, 22.8, 7.8, 6, 180, 'Continental', 'Engineered mesh'),

  'ASICS Novablast 4': S('asics-novablast-4', 259, 39.2, 30.2, 9.0, 8, 140, 'AHAR', 'Mesh'),
  'ASICS Novablast 5': S('asics-novablast-5', 254, 40.9, 33.5, 7.4, 8, 150, 'AHAR LO', 'Mesh'),
  'ASICS Gel-Nimbus 26': S('asics-gel-nimbus-26', 303, 40.4, 32.0, 8.4, 8, 160, 'AHAR+ heel, ASICSGRIP forefoot', 'Knit'),
  'ASICS Gel-Nimbus 27': S('asics-gel-nimbus-27', 299, 42.7, 34.4, 8.3, 8, 165, 'Hybrid ASICSGRIP', 'Mesh'),
  'ASICS Gel-Kayano 31': S('asics-gel-kayano-31', 295, 39.3, 27.8, 11.5, 10, 165, 'ASICSGRIP', 'Mesh'),
  'ASICS GT-2000 13': S('asics-gt-2000-13', 264, 36.6, 27.2, 9.4, 8, 140, 'AHAR+', 'Mesh'),
  'ASICS Gel-Cumulus 26': S('asics-gel-cumulus-26', 259, 36.8, 28.6, 8.2, 8, 140, 'FluidRide (rubberised EVA)', 'Mesh'),
  'ASICS Superblast 2': S('asics-superblast-2', 252, 42.8, 34.6, 8.2, 8, 200, 'ASICSGRIP', 'Mesh / knit'),
  'ASICS Magic Speed 4': S('asics-magic-speed-4', 237, 42.5, 32.9, 9.6, 8, 170, 'ASICSGRIP', 'Mesh'),
  'ASICS Metaspeed Sky Paris': S('asics-metaspeed-sky-paris', 183, 39.1, 32.6, 6.5, 5, 250, 'ASICSGRIP', 'Motionwrap 2.0 mesh'),
  'ASICS Gel-Trabuco 12': S('asics-gel-trabuco-12', 299, 35.4, 27.6, 7.8, 8, 140, 'ASICSGRIP', 'Mesh'),
  'ASICS Noosa Tri 16': S('asics-noosa-tri-16', 217, 32.8, 26.9, 5.9, 5, 135, 'ASICSGRIP', 'Mesh'),

  'Hoka Clifton 9': S('hoka-clifton-9', 249, 32.7, 26.6, 6.1, 5, 145, undefined, 'Knit'),
  'Hoka Clifton 10': S('hoka-clifton-10', 275, 44.4, 32.0, 12.4, 8, 150, undefined, 'Mesh'),
  'Hoka Bondi 8': S('hoka-bondi-8', 311, 36.2, 30.0, 6.2, 4, 165, undefined, 'Mesh'),
  'Hoka Bondi 9': S('hoka-bondi-9', 303, 41.3, 32.2, 9.1, 5, 170, undefined, 'Knit'),
  'Hoka Mach 6': S('hoka-mach-6', 232, 36.0, 26.4, 9.6, 5, 140, undefined, 'Mesh'),
  'Hoka Mach X 2': S('hoka-mach-x-2', 247, 44.6, 33.7, 10.9, 5, 190, undefined, 'Mesh'),
  'Hoka Rincon 4': S('hoka-rincon-4', 231, 36.0, 26.6, 9.4, 5, 125, 'Rubberised EVA', 'Mesh'),
  'Hoka Arahi 7': S('hoka-arahi-7', 266, 34.2, 27.9, 6.3, 5, 145, undefined, 'Knit'),
  'Hoka Gaviota 5': S('hoka-gaviota-5', 299, 34.9, 32.7, 2.2, 6, 175, undefined, 'Mesh'),
  'Hoka Rocket X 2': S('hoka-rocket-x-2', 218, 37.7, 31.1, 6.6, 5, 250, undefined, 'Mesh'),
  'Hoka Skyward X': S('hoka-skyward-x', 315, 46.3, 37.1, 9.2, 5, 225, undefined, 'Knit'),
  'Hoka Speedgoat 6': S('hoka-speedgoat-6', 278, 32.1, 27.2, 4.9, 5, 155, 'Vibram Megagrip', 'Mesh'),
  'Hoka Challenger 7': S('hoka-challenger-7', 250, 32.9, 24.1, 8.8, 5, 145, undefined, 'Mesh'),

  'Brooks Ghost 16': S('brooks-ghost-16', 266, 35.1, 22.7, 12.4, 12, 140, undefined, 'Mesh'),
  'Brooks Ghost Max 2': S('brooks-ghost-max-2', 305, 39.0, 29.1, 9.9, 6, 150, undefined, 'Mesh'),
  'Brooks Glycerin 21': S('brooks-glycerin-21', 278, 37.2, 26.6, 10.6, 10, 160, 'RoadTack rubber', 'Knit'),
  'Brooks Glycerin 22': S('brooks-glycerin-22', 293, 38.5, 28.2, 10.3, 10, 165, undefined, 'Mesh'),
  'Brooks Adrenaline GTS 24': S('brooks-adrenaline-gts-24', 291, 39.0, 25.5, 13.5, 12, 140, undefined, 'Mesh'),
  'Brooks Launch 10': S('brooks-launch-10', 230, 33.8, 23.8, 10.0, 10, 110, undefined, 'Mesh'),
  'Brooks Hyperion Elite 4': S('brooks-hyperion-elite-4', 220, 39.1, 27.3, 11.8, 8, 250, undefined, 'Knit'),
  'Brooks Cascadia 18': S('brooks-cascadia-18', 310, 32.6, 23.8, 8.8, 8, 140, 'TrailTack', 'Mesh'),
  'Brooks Caldera 7': S('brooks-caldera-7', 305, 36.7, 27.8, 8.9, 6, 150, undefined, 'Mesh'),
  'Brooks Catamount 3': S('brooks-catamount-3', 255, 28.3, 21.5, 6.8, 6, 170, 'TrailTack Green', 'Mesh'),

  'Saucony Ride 17': S('saucony-ride-17', 288, 35.1, 26.6, 8.5, 8, 140, undefined, 'Mesh'),
  'Saucony Triumph 22': S('saucony-triumph-22', 286, 38.6, 28.9, 9.7, 10, 160, undefined, 'Mesh'),
  'Saucony Guide 17': S('saucony-guide-17', 275, 34.9, 27.9, 7.0, 6, 140, undefined, 'Mesh'),
  'Saucony Kinvara 15': S('saucony-kinvara-15', 194, 27.9, 23.5, 4.4, 4, 120, 'Mostly exposed foam, reinforced EVA', 'Mesh'),
  'Saucony Endorphin Speed 4': S('saucony-endorphin-speed-4', 237, 36.2, 27.5, 8.7, 8, 170, undefined, 'Mesh'),
  'Saucony Endorphin Pro 4': S('saucony-endorphin-pro-4', 220, 38.1, 28.6, 9.5, 8, 225, 'XT-900 rubber', 'Mesh'),
  'Saucony Endorphin Elite 2': S('saucony-endorphin-elite-2', 197, 39.9, 32.4, 7.5, 8, 290, undefined, 'Knit / mesh'),
  'Saucony Hurricane 24': S('saucony-hurricane-24', 315, 40.5, 34.2, 6.3, 6, 160, undefined, 'Mesh'),
  'Saucony Peregrine 14': S('saucony-peregrine-14', 266, 27.3, 25.1, 2.2, 4, 140, 'PWRTRAC', 'Mesh'),
  'Saucony Xodus Ultra 3': S('saucony-xodus-ultra-3', 302, 35.1, 29.2, 5.9, 6, 160, 'PWRTRAC', 'Mesh'),

  'New Balance Fresh Foam X 880v14': S('new-balance-fresh-foam-x-880-v-14', 251, 33.0, 25.0, 8.0, 8, 140, 'NDurance', 'Knit'),
  'New Balance Fresh Foam X Hierro v8': S('new-balance-fresh-foam-x-hierro-v-8', 298, 32.2, 24.1, 8.1, 6, 150, 'Vibram Eco-Step', 'Mesh'),

  'On Cloudmonster 2': S('on-cloudmonster-2', 292, 37.9, 31.3, 6.6, 6, 180, undefined, 'Mesh'),
  'On Cloudsurfer': S('on-cloudsurfer', 237, 36.3, 21.7, 14.6, 10, 160, undefined, 'Mesh'),
  'On Cloudultra 2': S('on-cloudultra-2', 296, 30.2, 20.0, 10.2, 6, 180, 'Missiongrip', 'Mesh'),

  'Puma Velocity Nitro 3': S('puma-velocity-nitro-3', 264, 34.8, 25.5, 9.3, 10, 135, 'PumaGrip', 'Mesh'),
  'Puma Deviate Nitro 3': S('puma-deviate-nitro-3', 268, 37.4, 27.3, 10.1, 10, 160, 'PumaGrip ATR', 'Knit'),
  'Puma Deviate Nitro Elite 3': S('puma-deviate-nitro-elite-3', 204, 39.2, 28.6, 10.6, 8, 230, 'PumaGrip', 'Mesh'),
  'Puma MagMax Nitro': S('puma-magmax-nitro', 291, 42.9, 33.3, 9.6, 8, 180, 'PumaGrip (soft formulation)', 'Mesh'),
  'Puma ForeverRun Nitro': S('puma-forever-run-nitro', 274, 36.1, 26.1, 10.0, 10, 150, 'PumaGrip', 'Mesh'),

  'Altra Torin 7': S('altra-torin-7', 255, 27.6, 28.4, -0.8, 0, 150, undefined, 'Mesh'),
  'Altra Escalante 4': S('altra-escalante-4', 237, 23.8, 22.4, 1.4, 0, 130, undefined, 'Knit'),
  'Altra Via Olympus 2': S('altra-via-olympus-2', 295, 34.8, 35.0, -0.2, 0, 165, undefined, 'Mesh'),
  'Altra Experience Flow': S('altra-experience-flow', 235, 30.7, 26.6, 4.1, 4, 140, undefined, 'Mesh'),
  'Altra Lone Peak 8': S('altra-lone-peak-8', 288, 22.7, 21.3, 1.4, 0, 140, 'MaxTrac', 'Mesh'),

  'Mizuno Wave Rider 28': S('mizuno-wave-rider-28', 276, 39.3, 24.6, 14.7, 12, 140, undefined, 'Mesh'),
  'Mizuno Wave Inspire 20': S('mizuno-wave-inspire-20', 302, 37.7, 25.1, 12.6, 12, 140, 'X10 carbon rubber', 'Mesh'),
  'Mizuno Wave Sky 8': S('mizuno-wave-sky-8', 271, 40.7, 30.7, 10.0, 8, 170, 'X10', 'Knit'),

  'Salomon Speedcross 6': S('salomon-speedcross-6', 296, 36.5, 22.4, 14.1, 10, 145, 'Contagrip', 'Mesh'),
  'Salomon Sense Ride 5': S('salomon-sense-ride-5', 291, 27.2, 18.5, 8.7, 8.3, 140, 'Contagrip', 'Mesh'),
  'Salomon S/Lab Genesis': S('salomon-s-lab-genesis', 249, 31.9, 24.1, 7.8, 8, 199, 'Contagrip', 'Matryx'),
  'Salomon Ultra Glide 2': S('salomon-ultra-glide-2', 286, 30.6, 23.4, 7.2, 6, 150, 'Contagrip', 'Mesh'),
  'Salomon Aero Glide 2': S('salomon-aero-glide-2', 268, 35.5, 24.2, 11.3, 10, 160, 'Contagrip', 'Mesh'),

  'Topo Athletic Phantom 3': S('topo-athletic-phantom-3', 269, 32.6, 26.8, 5.8, 5, 145, undefined, 'Mesh'),
  'Topo Athletic Ultraventure 4': S('topo-ultraventure-4', 286, 35.1, 28.5, 6.6, 5, 150, 'Vibram XS Trek', 'Mesh'),
  'Merrell Agility Peak 5': S('merrell-agility-peak-5', 289, 39.2, 25.8, 13.4, 6, 140, 'Vibram Megagrip', 'Mesh'),
  'Inov-8 Trailfly': S('inov-8-trailfly', 282, 30.1, 24.1, 6.0, 6, 150, 'Graphene-Grip', 'Engineered mesh'),
}
