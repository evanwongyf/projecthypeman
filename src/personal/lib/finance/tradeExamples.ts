import { pathRows } from './series'

// Synthetic candle paths for the entries-and-exits guides. They are shaped to show one idea
// each, not taken from any real market. Candle index = (leg - 1) * perLeg + (step - 1).

export const TRADE = {
  // A range under resistance at about 105, a breakout, a pullback to the old resistance and a
  // continuation. perLeg 4: breakout leg is candles 24 to 27, the pullback 28 to 31.
  breakout: pathRows([98, 105, 101, 105.1, 102.5, 105, 103.5, 112, 105.8, 117], 4, 21),
  // An uptrend with three pullbacks. perLeg 5: pullback legs are 5-9, 15-19 and 25-29.
  pullbacks: pathRows([90, 100, 95, 106, 100.5, 112, 106.5, 118], 5, 22),
  // A range that oscillates around 100: buy the lows, sell the highs. perLeg 5.
  range: pathRows([100, 104, 96, 104.2, 96.3, 104, 95.8, 103.5, 100], 5, 23),
  // A strong trend with shallow pullbacks, for trailing stops. perLeg 5.
  trend: pathRows([100, 111, 107, 120, 115, 128, 123, 133, 119, 112], 5, 24),
  // A stop that is gapped through: ten ordinary candles then an overnight gap down.
  gap: [
    [100, 101.2, 99.4, 100.8], [100.8, 102, 100.3, 101.6], [101.6, 102.4, 100.9, 101.2], [101.2, 101.9, 100.2, 100.5], [100.5, 101.4, 99.8, 101],
    [101, 101.8, 100.4, 100.6], [100.6, 101.1, 99.7, 99.9], [99.9, 100.6, 99.2, 99.6], [99.6, 100.2, 98.9, 99.1], [99.1, 99.8, 98.7, 99.3],
    [93.4, 94.2, 92.6, 93.0], [93.0, 94.5, 92.4, 94.1], [94.1, 95.2, 93.6, 94.8],
  ],
  // An uptrend where a position is built in three steps. perLeg 5.
  pyramid: pathRows([100, 106, 103, 112, 108.5, 120], 6, 25),
}
