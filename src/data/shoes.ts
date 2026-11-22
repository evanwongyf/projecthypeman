/**
 * 100 popular running shoes, compiled for the Archive.
 *
 * No openly licensed shoe-spec dataset exists, so this catalogue is written
 * by hand from brand-published information about each model. Drop is the
 * brand-listed figure for the version named, and is left null where it was
 * not certain. Shoes are revised often — verify against the current version.
 */

export type ShoeKind = 'daily' | 'max' | 'stability' | 'tempo' | 'race' | 'trail' | 'minimal'

export type Shoe = {
  brand: string
  model: string
  kind: ShoeKind
  surface: 'road' | 'trail'
  foam: string
  plate: string
  upper: string
  outsole: string
  dropMm: number | null
  description: string
  bestFor: string
  features: string[]
}

function s(
  brand: string,
  model: string,
  kind: ShoeKind,
  foam: string,
  plate: string,
  dropMm: number | null,
  description: string,
  bestFor: string,
  features: string[],
  extra: Partial<Pick<Shoe, 'upper' | 'outsole' | 'surface'>> = {}
): Shoe {
  const surface = extra.surface ?? (kind === 'trail' ? 'trail' : 'road')
  return {
    brand,
    model,
    kind,
    surface,
    foam,
    plate,
    dropMm,
    description,
    bestFor,
    features,
    upper: extra.upper ?? 'Engineered mesh',
    outsole: extra.outsole ?? (surface === 'trail' ? 'Lugged rubber' : 'Rubber'),
  }
}

export const SHOES: Shoe[] = [
  // ---------- Nike ----------
  s('Nike', 'Pegasus 41', 'daily', 'ReactX + Air Zoom units', 'None', 10, 'The long-running workhorse: a responsive, durable trainer for almost any run.', 'Daily miles, beginners, one-shoe rotations', ['Heel and forefoot Air Zoom units', 'ReactX foam is more energy-returning than React', 'Waffle-inspired outsole']),
  s('Nike', 'Pegasus Plus', 'daily', 'ZoomX (PEBA)', 'None', 10, 'Pegasus shape with a full-length ZoomX midsole for a bouncier ride.', 'Uptempo daily runs', ['Full-length ZoomX', 'Flyknit upper', 'Lighter than the standard Pegasus'], { upper: 'Flyknit' }),
  s('Nike', 'Vomero 18', 'max', 'ZoomX + ReactX', 'None', 10, 'Nike\'s highest-stack daily cushioned shoe.', 'Long easy runs, recovery days', ['ZoomX core over a ReactX carrier', 'High stack for comfort', 'Wide, stable base']),
  s('Nike', 'Invincible 3', 'max', 'ZoomX (PEBA)', 'None', 9, 'A huge slab of soft ZoomX for maximum cushioning.', 'Recovery runs, very long easy runs', ['Soft, bouncy PEBA foam', 'Wide rocker base', 'Flyknit upper'], { upper: 'Flyknit' }),
  s('Nike', 'Structure 25', 'stability', 'Cushlon 3.0', 'None', 10, 'Nike\'s supportive daily trainer.', 'Runners who want mild support', ['Firmer medial sidewall', 'Wider base', 'Padded heel']),
  s('Nike', 'Zoom Fly 6', 'tempo', 'ZoomX + SR-02', 'Carbon', 8, 'A carbon-plated trainer that approximates race-day feel for workouts.', 'Tempo runs, long runs with pace', ['Full-length carbon Flyplate', 'More durable than race shoes', 'Rocker geometry']),
  s('Nike', 'Vaporfly 3', 'race', 'ZoomX (PEBA)', 'Carbon', 8, 'The shoe that started the super-shoe era, refined.', 'Road races 5K to marathon', ['Full-length carbon Flyplate', 'Very light', 'Aggressive rocker'], { upper: 'Flyknit' }),
  s('Nike', 'Alphafly 3', 'race', 'ZoomX + Air Zoom pods', 'Carbon', 8, 'Maximal-stack marathon racer with forefoot Air pods.', 'Marathons and half marathons', ['Forefoot Air Zoom pods', 'Carbon Flyplate', 'Atomknit upper'], { upper: 'Atomknit' }),
  s('Nike', 'Streakfly', 'race', 'ZoomX (PEBA)', 'None', 6, 'Low, light ZoomX racer for short, fast road races.', '5K and 10K racing', ['Very low weight', 'No plate — more ground feel', 'Snug race fit']),
  s('Nike', 'Pegasus Trail 5', 'trail', 'ReactX', 'None', null, 'Road-to-trail version of the Pegasus.', 'Mixed surfaces, light trails', ['Moderate lugs', 'Works on pavement too', 'Comfortable upper'], { surface: 'trail' }),
  s('Nike', 'Zegama 2', 'trail', 'ZoomX (PEBA)', 'None', null, 'High-cushion trail shoe for long mountain days.', 'Ultras and long trail runs', ['ZoomX for trail', 'Vibram outsole', 'Protective upper'], { outsole: 'Vibram' }),
  s('Nike', 'Ultrafly', 'trail', 'ZoomX (PEBA)', 'Carbon', null, 'Carbon-plated trail racer.', 'Trail racing', ['Carbon Flyplate', 'Vibram Litebase outsole', 'Race-oriented fit'], { outsole: 'Vibram Litebase' }),

  // ---------- Adidas ----------
  s('Adidas', 'Adizero Adios Pro 3', 'race', 'Lightstrike Pro', 'Carbon EnergyRods', 6.5, 'Adidas\'s marathon super shoe with rod-based propulsion.', 'Half and full marathons', ['Carbon EnergyRods instead of a plate', 'Lightstrike Pro foam', 'Continental rubber'], { outsole: 'Continental rubber' }),
  s('Adidas', 'Adizero Adios Pro 4', 'race', 'Lightstrike Pro', 'Carbon EnergyRods', null, 'The newer Adios Pro with a revised rocker and foam layout.', 'Marathon racing', ['Updated rocker', 'Lighter upper', 'Continental rubber'], { outsole: 'Continental rubber' }),
  s('Adidas', 'Adizero Boston 12', 'tempo', 'Lightstrike Pro + Lightstrike 2.0', 'Glass-fibre EnergyRods', 6.5, 'A firm, fast trainer for workouts and long runs.', 'Tempo, intervals, marathon-pace work', ['Glass-fibre rods', 'Durable', 'Continental rubber'], { outsole: 'Continental rubber' }),
  s('Adidas', 'Adizero SL2', 'daily', 'Lightstrike Pro + Lightstrike 2.0', 'None', null, 'An affordable, light daily trainer with some racing DNA.', 'Daily runs with occasional pace', ['Lightstrike Pro in the forefoot', 'Light', 'Good value']),
  s('Adidas', 'Adizero Evo SL', 'tempo', 'Lightstrike Pro', 'None', null, 'Super-shoe foam without the plate, at a lower price.', 'Uptempo training, racing for those who dislike plates', ['Full Lightstrike Pro', 'No plate', 'Very light']),
  s('Adidas', 'Supernova Rise', 'daily', 'Dreamstrike+', 'Support rods', 10, 'A comfortable, cushioned daily trainer.', 'Easy and long runs', ['Dreamstrike+ foam', 'Rods for light support', 'Comfortable upper']),
  s('Adidas', 'Ultraboost 5', 'daily', 'Light Boost (TPU)', 'None', null, 'The iconic Boost shoe, lighter than before.', 'Casual and easy runs', ['TPU bead foam', 'Primeknit upper', 'Continental rubber'], { upper: 'Primeknit', outsole: 'Continental rubber' }),
  s('Adidas', 'Adizero Takumi Sen 10', 'race', 'Lightstrike Pro', 'EnergyRods', null, 'Low, light racer for 5K and 10K.', 'Short road races', ['Lower stack', 'Very light', 'Snappy rods']),

  // ---------- ASICS ----------
  s('ASICS', 'Novablast 4', 'daily', 'FF Blast+ Eco', 'None', 8, 'A bouncy, fun daily trainer.', 'Daily runs, long runs', ['Trampoline-inspired geometry', 'Bio-based foam', 'Light for its cushioning']),
  s('ASICS', 'Novablast 5', 'daily', 'FF Blast Max', 'None', 8, 'The next Novablast with a softer, bouncier foam.', 'Daily runs', ['New FF Blast Max foam', 'Soft ride', 'Versatile']),
  s('ASICS', 'Gel-Nimbus 26', 'max', 'FF Blast+ Eco + PureGEL', 'None', 8, 'Plush, premium cushioning.', 'Long easy runs', ['PureGEL heel insert', 'Soft knit upper', 'Wide base']),
  s('ASICS', 'Gel-Nimbus 27', 'max', 'FF Blast+ Eco + PureGEL', 'None', 8, 'The latest Nimbus, refined for comfort.', 'Recovery and easy runs', ['PureGEL', 'Updated upper', 'Smooth transitions']),
  s('ASICS', 'Gel-Kayano 31', 'stability', 'FF Blast+ Eco', 'None', 10, 'Premium stability with a modern, soft feel.', 'Overpronators, long easy runs', ['4D Guidance System', 'PureGEL', 'Wide base']),
  s('ASICS', 'GT-2000 13', 'stability', 'FF Blast+', 'None', 8, 'A lighter, more affordable stability trainer.', 'Daily stability', ['3D Guidance System', 'Lighter than Kayano', 'Good value']),
  s('ASICS', 'Gel-Cumulus 26', 'daily', 'FF Blast+', 'None', 8, 'A balanced, comfortable neutral trainer.', 'Daily miles', ['PureGEL', 'Comfortable fit', 'Durable']),
  s('ASICS', 'Superblast 2', 'tempo', 'FF Turbo+ / FF Blast+', 'None', 8, 'A high-stack, light, do-it-all trainer.', 'Long runs, tempo, easy days', ['Supercritical foam', 'Very light for its stack', 'Versatile']),
  s('ASICS', 'Magic Speed 4', 'tempo', 'FF Turbo+ / FF Blast+', 'Carbon', 8, 'Affordable carbon-plated speed trainer.', 'Tempo and race-pace sessions', ['Carbon plate', 'Durable outsole', 'Good value']),
  s('ASICS', 'Metaspeed Sky Paris', 'race', 'FF Turbo+', 'Carbon', 5, 'Racer for stride-lengthening runners.', 'Road races', ['Carbon plate', 'Very light', 'Designed for longer strides']),
  s('ASICS', 'Metaspeed Edge Paris', 'race', 'FF Turbo+', 'Carbon', 8, 'Racer for cadence-driven runners.', 'Road races', ['Carbon plate', 'Higher drop', 'Designed for higher cadence']),
  s('ASICS', 'Gel-Trabuco 12', 'trail', 'FF Blast', 'None', null, 'Cushioned, protective trail shoe.', 'Long trail runs', ['ASICSGRIP outsole', 'Protective upper', 'Stable'], { outsole: 'ASICSGRIP' }),
  s('ASICS', 'Noosa Tri 16', 'tempo', 'FF Blast+', 'None', 5, 'Bright, quick shoe designed for triathlon.', 'Triathlon and speedwork', ['Easy on/off', 'Drains well', 'Light']),

  // ---------- Hoka ----------
  s('Hoka', 'Clifton 9', 'daily', 'Compression-moulded EVA', 'None', 5, 'Light, cushioned and smooth-rolling.', 'Daily and easy runs', ['Early-stage meta-rocker', 'Light', 'Soft']),
  s('Hoka', 'Clifton 10', 'daily', 'EVA foam', 'None', null, 'The latest Clifton with a higher stack.', 'Daily runs', ['Meta-rocker', 'Increased stack', 'Soft ride']),
  s('Hoka', 'Bondi 8', 'max', 'EVA', 'None', 4, 'Hoka\'s maximum-cushion classic.', 'Recovery runs, walking, long easy runs', ['Very high stack', 'Extended heel', 'Stable base']),
  s('Hoka', 'Bondi 9', 'max', 'Supercritical EVA', 'None', null, 'Max cushioning with a more responsive foam.', 'Easy and long runs', ['Supercritical foam', 'High stack', 'Wide base']),
  s('Hoka', 'Mach 6', 'tempo', 'Supercritical EVA', 'None', 5, 'Light, snappy trainer for faster days.', 'Tempo and daily runs', ['Supercritical foam', 'Light', 'Rocker']),
  s('Hoka', 'Mach X 2', 'tempo', 'PEBA + supercritical EVA', 'PEBA plate', null, 'Plated trainer with dual foams.', 'Long runs with pace', ['Pebax plate', 'Dual-density midsole', 'Rocker']),
  s('Hoka', 'Rincon 4', 'daily', 'Supercritical EVA', 'None', 5, 'Light, budget-friendly cushioned trainer.', 'Daily runs, tempo', ['Very light', 'Good value', 'Rocker']),
  s('Hoka', 'Arahi 7', 'stability', 'Compression-moulded EVA', 'None', 5, 'Stability without a traditional post.', 'Stability for daily runs', ['J-Frame support', 'Light', 'Rocker']),
  s('Hoka', 'Gaviota 5', 'stability', 'Compression-moulded EVA', 'None', 5, 'Max-cushion stability shoe.', 'Long runs for runners needing support', ['H-Frame support', 'High stack', 'Wide base']),
  s('Hoka', 'Rocket X 2', 'race', 'PEBA + supercritical EVA', 'Carbon', 5, 'Hoka\'s carbon-plated road racer.', 'Road races', ['Carbon plate', 'Dual foam', 'Rocker']),
  s('Hoka', 'Cielo X1 2.0', 'race', 'PEBA', 'Carbon', null, 'Hoka\'s maximal marathon racer.', 'Marathon racing', ['High-stack PEBA', 'Carbon plate', 'Aggressive rocker']),
  s('Hoka', 'Skyward X', 'max', 'PEBA + supercritical EVA', 'Carbon', 5, 'A plated max-cushion trainer.', 'Long runs', ['Carbon plate', 'Very high stack', 'Rocker']),
  s('Hoka', 'Speedgoat 6', 'trail', 'Compression-moulded EVA', 'None', 5, 'The best-selling cushioned trail shoe.', 'Trails, ultras', ['Vibram Megagrip', 'Deep lugs', 'Protective cushioning'], { outsole: 'Vibram Megagrip' }),
  s('Hoka', 'Challenger 7', 'trail', 'Compression-moulded EVA', 'None', 5, 'Road-to-trail all-rounder.', 'Mixed terrain', ['Moderate lugs', 'Runs well on road', 'Comfortable']),
  s('Hoka', 'Tecton X 2', 'trail', 'PEBA', 'Parallel carbon plates', null, 'Carbon-plated trail racer.', 'Trail racing', ['Two parallel carbon plates', 'Vibram Megagrip', 'Light'], { outsole: 'Vibram Megagrip' }),

  // ---------- Brooks ----------
  s('Brooks', 'Ghost 16', 'daily', 'DNA Loft v3', 'None', 12, 'Smooth, reliable neutral trainer.', 'Daily miles, beginners', ['Nitrogen-infused foam', 'Smooth transitions', 'Durable']),
  s('Brooks', 'Ghost Max 2', 'max', 'DNA Loft v3', 'None', 6, 'High-stack, lower-drop Ghost.', 'Easy runs, walking, standing all day', ['Glide rocker', 'Wide base', 'Soft']),
  s('Brooks', 'Glycerin 21', 'max', 'DNA Loft v3', 'None', 10, 'Brooks\'s plush neutral trainer.', 'Long easy runs', ['Soft nitrogen-infused foam', 'Plush upper', 'Smooth']),
  s('Brooks', 'Glycerin 22', 'max', 'DNA Tuned', 'None', 10, 'The newer Glycerin with a dual-cell foam.', 'Easy and long runs', ['DNA Tuned foam', 'Soft heel, firmer forefoot', 'Comfortable']),
  s('Brooks', 'Adrenaline GTS 24', 'stability', 'DNA Loft v3', 'GuideRails', 12, 'One of the best-known stability shoes.', 'Overpronators, daily runs', ['GuideRails holistic support', 'Smooth ride', 'Durable']),
  s('Brooks', 'Launch 10', 'tempo', 'DNA Flash v2', 'None', 10, 'Light, firm, affordable speed shoe.', 'Tempo and short races', ['Nitrogen-infused foam', 'Light', 'Good value']),
  s('Brooks', 'Hyperion Elite 4', 'race', 'DNA Flash v2', 'Carbon (SpeedVault+)', 8, 'Brooks\'s carbon racer.', 'Road races', ['Nitrogen-infused DNA Flash v2', 'SpeedVault+ carbon plate', 'Rapid Roll rocker']),
  s('Brooks', 'Cascadia 18', 'trail', 'DNA Loft v2', 'Rock plate', null, 'Protective, stable trail shoe.', 'Technical trails', ['TrailTack rubber', 'Trail Adapt System', 'Rock protection'], { outsole: 'TrailTack' }),
  s('Brooks', 'Caldera 7', 'trail', 'DNA Loft v3', 'None', null, 'Max-cushion trail shoe.', 'Long trail days', ['High stack', 'Wide base', 'TrailTack rubber'], { outsole: 'TrailTack' }),
  s('Brooks', 'Catamount 3', 'trail', 'DNA Flash', 'SkyVault plate', null, 'Fast, light trail shoe.', 'Trail racing', ['SkyVault propulsion plate', 'Light', 'TrailTack Green rubber'], { outsole: 'TrailTack Green' }),

  // ---------- Saucony ----------
  s('Saucony', 'Ride 17', 'daily', 'PWRRUN+', 'None', 8, 'A versatile neutral daily trainer.', 'Daily runs', ['Bouncy PWRRUN+', 'Comfortable fit', 'Balanced']),
  s('Saucony', 'Triumph 22', 'max', 'PWRRUN PB', 'None', 10, 'Plush PEBA-bead max-cushion trainer.', 'Long runs, easy days', ['PEBA bead foam', 'Soft and bouncy', 'Premium upper']),
  s('Saucony', 'Guide 17', 'stability', 'PWRRUN', 'None', null, 'Modern stability with a centre-path design.', 'Stability daily runs', ['CenterPath technology', 'Wide base', 'Soft']),
  s('Saucony', 'Kinvara 15', 'tempo', 'PWRRUN', 'None', 4, 'Light, low and flexible.', 'Tempo, strides, short runs', ['Low drop', 'Light', 'Flexible']),
  s('Saucony', 'Endorphin Speed 4', 'tempo', 'PWRRUN PB', 'Nylon', 8, 'A cult-favourite plated trainer.', 'Tempo, long runs, racing', ['Winged nylon plate', 'PEBA bead foam', 'SpeedRoll rocker']),
  s('Saucony', 'Endorphin Pro 4', 'race', 'PWRRUN HG + PWRRUN PB', 'Carbon', 8, 'Saucony\'s carbon marathon racer.', 'Road races', ['Carbon plate', 'Dual PEBA foams', 'SpeedRoll']),
  s('Saucony', 'Endorphin Elite 2', 'race', 'IncrediRUN (TPEE)', 'Carbon', null, 'Saucony\'s top-end racer.', 'Marathon racing', ['Carbon plate', 'New IncrediRUN TPEE foam', 'Aggressive geometry']),
  s('Saucony', 'Hurricane 24', 'stability', 'PWRRUN PB + PWRRUN', 'None', null, 'Max-cushion stability.', 'Long runs for runners needing support', ['CenterPath', 'High stack', 'Wide base']),
  s('Saucony', 'Peregrine 14', 'trail', 'PWRRUN', 'Rock plate', 4, 'Versatile, agile trail shoe.', 'Technical trails', ['PWRTRAC outsole', 'Deep lugs', 'Rock plate'], { outsole: 'PWRTRAC' }),
  s('Saucony', 'Xodus Ultra 3', 'trail', 'PWRRUN PB', 'Rock plate', null, 'Cushioned ultra-distance trail shoe.', 'Ultras', ['PEBA bead foam', 'Vibram Megagrip', 'Protective'], { outsole: 'Vibram Megagrip' }),

  // ---------- New Balance ----------
  s('New Balance', 'Fresh Foam X 1080v14', 'max', 'Fresh Foam X', 'None', 6, 'Soft, premium neutral trainer.', 'Long runs, easy days', ['Plush Fresh Foam X', 'Soft upper', 'Smooth rocker']),
  s('New Balance', 'Fresh Foam X 880v14', 'daily', 'Fresh Foam X', 'None', 10, 'Reliable, traditional daily trainer.', 'Daily miles', ['Balanced cushioning', 'Durable', 'Comfortable']),
  s('New Balance', 'Fresh Foam X 860v14', 'stability', 'Fresh Foam X', 'None', null, 'A classic medial-post stability trainer.', 'Daily stability', ['Dual-density medial post', 'Durable', 'Supportive']),
  s('New Balance', 'Fresh Foam X More v5', 'max', 'Fresh Foam X', 'None', 4, 'Very high stack, wide platform.', 'Recovery runs, walking', ['Massive stack', 'Wide base', 'Low drop']),
  s('New Balance', 'FuelCell Rebel v4', 'tempo', 'FuelCell (PEBA blend)', 'None', 6, 'Light, bouncy, fun speed trainer.', 'Tempo, intervals, daily pace', ['PEBA-blend foam', 'Very light', 'Wide forefoot']),
  s('New Balance', 'FuelCell SC Elite v4', 'race', 'FuelCell (PEBA)', 'Carbon', 4, 'New Balance\'s carbon marathon racer.', 'Road races', ['Carbon Energy Arc plate', 'PEBA foam', 'Rocker']),
  s('New Balance', 'FuelCell SC Trainer v3', 'tempo', 'FuelCell', 'Carbon', null, 'A high-stack plated trainer.', 'Long runs and workouts', ['Carbon plate', 'High stack', 'Durable']),
  s('New Balance', 'Fresh Foam X Hierro v8', 'trail', 'Fresh Foam X', 'None', null, 'Cushioned trail shoe.', 'Long trail runs', ['Vibram Megagrip', 'Comfortable', 'Protective'], { outsole: 'Vibram Megagrip' }),

  // ---------- On ----------
  s('On', 'Cloudmonster 2', 'max', 'Helion superfoam', 'Speedboard', 6, 'Big, bouncy CloudTec trainer.', 'Long runs, daily runs', ['Large CloudTec pods', 'Speedboard', 'Rocker']),
  s('On', 'Cloudsurfer', 'daily', 'Helion HF', 'None', null, 'Soft, smooth daily trainer.', 'Daily runs', ['CloudTec Phase', 'Soft landings', 'Light']),
  s('On', 'Cloudboom Echo 4', 'race', 'Helion HF', 'Carbon Speedboard', null, 'On\'s marathon super shoe.', 'Marathon racing', ['Carbon Speedboard', 'High stack', 'Light']),
  s('On', 'Cloudflow 4', 'tempo', 'Helion', 'Speedboard', null, 'Light, quick trainer.', 'Tempo and short runs', ['Light', 'Speedboard', 'Firm and fast']),
  s('On', 'Cloudultra 2', 'trail', 'Helion', 'Speedboard', null, 'Cushioned trail ultra shoe.', 'Ultras', ['FlipRelease lacing', 'Missiongrip outsole', 'Comfort'], { outsole: 'Missiongrip' }),

  // ---------- Puma ----------
  s('Puma', 'Velocity Nitro 3', 'daily', 'Nitro over an EVA carrier', 'None', 10, 'Light, good-value daily trainer.', 'Daily runs', ['Nitrogen-infused foam', 'PumaGrip outsole', 'Light'], { outsole: 'PumaGrip' }),
  s('Puma', 'Deviate Nitro 3', 'tempo', 'Nitro + Nitro Elite', 'Carbon', null, 'Plated trainer and racer.', 'Tempo, long runs, racing', ['Carbon PWRPLATE', 'Dual Nitro foams', 'PumaGrip'], { outsole: 'PumaGrip' }),
  s('Puma', 'Deviate Nitro Elite 3', 'race', 'Nitro Elite (A-TPU)', 'Carbon', null, 'Puma\'s carbon racer.', 'Road races', ['Carbon PWRPLATE', 'Very light', 'Grippy outsole'], { outsole: 'PumaGrip' }),
  s('Puma', 'MagMax Nitro', 'max', 'Nitro', 'None', null, 'Puma\'s max-cushion trainer.', 'Long easy runs', ['High stack', 'Soft', 'Grippy outsole'], { outsole: 'PumaGrip' }),
  s('Puma', 'ForeverRun Nitro', 'stability', 'Nitro', 'None', null, 'Supportive Nitro trainer.', 'Stability daily runs', ['RunGuide support', 'Nitro foam', 'Durable']),

  // ---------- Altra ----------
  s('Altra', 'Torin 7', 'minimal', 'Altra EGO MAX', 'None', 0, 'Zero-drop, cushioned, wide toe box.', 'Daily runs for zero-drop fans', ['Zero drop', 'FootShape toe box', 'Cushioned']),
  s('Altra', 'Escalante 4', 'minimal', 'Altra EGO', 'None', 0, 'Flexible zero-drop road shoe.', 'Daily runs, transition to low drop', ['Zero drop', 'Knit upper', 'Flexible'], { upper: 'Knit' }),
  s('Altra', 'Via Olympus 2', 'max', 'Altra EGO MAX', 'None', 0, 'Max-cushion zero-drop road shoe.', 'Long runs', ['Zero drop', 'High stack', 'Wide toe box']),
  s('Altra', 'Experience Flow', 'daily', 'Compression-moulded EVA', 'None', 4, 'Altra\'s low-drop (not zero) trainer.', 'Runners moving towards low drop', ['4 mm drop', 'Light', 'Roomy toe box']),
  s('Altra', 'Lone Peak 8', 'trail', 'Altra EGO', 'StoneGuard', 0, 'The classic zero-drop trail shoe.', 'Trails and hiking', ['Zero drop', 'MaxTrac outsole', 'Wide toe box'], { outsole: 'MaxTrac' }),

  // ---------- Mizuno ----------
  s('Mizuno', 'Wave Rider 28', 'daily', 'Mizuno Enerzy + Enerzy NXT heel', 'Wave plate (Pebax Rnew)', 12, 'Mizuno\'s long-running neutral trainer.', 'Daily runs', ['Wave plate for stability', 'Enerzy NXT foam', 'Durable']),
  s('Mizuno', 'Wave Inspire 20', 'stability', 'Mizuno Enerzy', 'Wave plate', 12, 'Mizuno\'s stability trainer.', 'Stability daily runs', ['Wave plate', 'Supportive', 'Durable']),
  s('Mizuno', 'Wave Sky 8', 'max', 'Mizuno Enerzy NXT', 'None', null, 'Plush cushioned trainer.', 'Long easy runs', ['Soft foam', 'High stack', 'Comfortable']),

  // ---------- Salomon ----------
  s('Salomon', 'Speedcross 6', 'trail', 'EVA', 'None', 10, 'Aggressive mud and soft-ground shoe.', 'Mud, soft trails', ['Deep chevron lugs', 'Quicklace', 'Snug fit'], { outsole: 'Contagrip' }),
  s('Salomon', 'Sense Ride 5', 'trail', 'Energy Foam (EVA + OBC)', 'None', 8, 'Versatile everyday trail shoe.', 'All-round trails', ['Contagrip', 'Quicklace', 'Comfortable'], { outsole: 'Contagrip' }),
  s('Salomon', 'S/Lab Genesis', 'trail', 'optiFOAM (EVA-based)', 'None', null, 'Long-distance trail racer.', 'Trail ultras', ['Contagrip', 'Precise fit', 'Light'], { outsole: 'Contagrip' }),
  s('Salomon', 'Ultra Glide 2', 'trail', 'Energy Foam', 'None', null, 'Cushioned, rockered trail shoe.', 'Long trail runs', ['Rocker', 'Cushioned', 'Contagrip'], { outsole: 'Contagrip' }),
  s('Salomon', 'Aero Glide 2', 'daily', 'Energy Foam', 'None', null, 'Salomon\'s cushioned road trainer.', 'Daily road runs', ['Rocker', 'Cushioned', 'Comfortable']),

  // ---------- Others ----------
  s('Topo Athletic', 'Phantom 3', 'daily', 'ZipFoam', 'None', 5, 'Cushioned shoe with a roomy toe box.', 'Daily runs', ['Wide toe box', 'Low drop', 'Comfortable']),
  s('Topo Athletic', 'Ultraventure 4', 'trail', 'ZipFoam', 'None', 5, 'Cushioned trail shoe with a roomy toe box.', 'Long trail runs', ['Vibram Megagrip', 'Wide toe box', 'Cushioned'], { outsole: 'Vibram Megagrip' }),
  s('Skechers', 'GOrun Razor 4', 'tempo', 'Hyper Burst', 'None', null, 'Very light, underrated speed shoe.', 'Tempo and races', ['Very light', 'Supercritical foam', 'Good value']),
  s('La Sportiva', 'Bushido III', 'trail', 'EVA', 'Rock guard', null, 'Precise, grippy technical trail shoe.', 'Rocky, technical terrain', ['Sticky FriXion rubber', 'Precise fit', 'Protective'], { outsole: 'FriXion' }),
  s('Merrell', 'Agility Peak 5', 'trail', 'FloatPro', 'Rock plate', null, 'Grippy, cushioned trail shoe.', 'Mountain running', ['Vibram Megagrip', 'Deep lugs', 'Cushioned'], { outsole: 'Vibram Megagrip' }),
  s('Inov-8', 'Trailfly', 'trail', 'Powerflow Pro', 'None', null, 'Cushioned trail shoe from the fell-running brand.', 'Trail running', ['Grippy outsole', 'Comfortable', 'Durable']),
]
