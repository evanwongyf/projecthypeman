import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Beyond the classics, traders use dozens of indicators. Most are variations on a few ideas: where price sits in its recent range, how strong a trend is, and where it might reverse. Here are nine of the most widely used, each with its exact formula and a live chart in the indicator lab.',
  nutshell: [
    '**Trend strength**: ADX and the directional indicators (+DI, −DI).',
    '**Trailing stops**: Parabolic SAR.',
    '**All-in-one**: Ichimoku Kinko Hyo, a full trend system from Japan.',
    '**Levels**: floor-trader pivot points.',
    '**Oscillators**: Williams %R, CCI and the volume-weighted MFI.',
    '**Channels**: Keltner (ATR-based) and Donchian (highest high, lowest low).',
  ],
  sections: [
    {
      id: 'adx',
      title: 'ADX and the directional movement system',
      blocks: [
        {
          t: 'math',
          syntax: [
            { sym: String.raw`+DM_t`, say: String.raw`Read "plus D M at time t". The leading + is part of the name (upward directional movement), not an instruction to add.` },
            { sym: String.raw`\max(a,\ 0)`, say: String.raw`Read "the larger of a and zero": if a is negative it is replaced by 0, so the result is never below zero.` },
            { sym: String.raw`H_t - H_{t-1}`, say: String.raw`Read "H sub t minus H sub t minus 1": today's high minus yesterday's high. The subscript is just the day number.` },
          ],
          worked: {
            title: String.raw`A stock's upward movement over two days`,
            steps: [
              String.raw`Given: yesterday\'s high \(H_{t-1} = 52.40\) and today\'s high \(H_t = 53.10\).`,
              String.raw`Substitute: \(+DM_t = \max(53.10 - 52.40,\ 0)\).`,
              String.raw`Subtract: \(53.10 - 52.40 = 0.70\), so \(+DM_t = \max(0.70,\ 0) = 0.70\).`,
              String.raw`Now a different day: the high slips to \(52.90\). Then \(52.90 - 53.10 = -0.20\) and \(\max(-0.20,\ 0) = 0\), so there is no upward movement to record.`,
            ],
            answer: String.raw`\(+DM = 0.70\) on the first day and \(0\) on the second: the indicator only credits days when the high pushed higher.`,
          },
          tex: String.raw`+DM_t = \max(H_t - H_{t-1},\ 0)`,
          where: [
            { sym: 'H_t, H_{t-1}', def: 'Today’s and yesterday’s high' },
          ],
          caption: 'Simplified: today\'s rise, or zero if today was flat or down. Wilder\'s full original rule adds one more condition, only the larger of the day\'s two possible moves (up or down) counts, so a day can never register as both up and down at once.',
        },
        {
          t: 'math',
          syntax: [
            { sym: String.raw`-DM_t`, say: String.raw`Read "minus D M at time t". The minus is part of the name (downward movement); the value itself is never negative.` },
            { sym: String.raw`L_{t-1} - L_t`, say: String.raw`Yesterday's low minus today's low: positive only when the low has been pushed lower.` },
          ],
          worked: {
            title: String.raw`A stock's downward movement over two days`,
            steps: [
              String.raw`Given: yesterday\'s low \(L_{t-1} = 51.20\) and today\'s low \(L_t = 50.60\).`,
              String.raw`Substitute: \(-DM_t = \max(51.20 - 50.60,\ 0)\).`,
              String.raw`Subtract: \(51.20 - 50.60 = 0.60\), so \(-DM_t = 0.60\).`,
              String.raw`If instead today\'s low were \(51.50\), then \(51.20 - 51.50 = -0.30\) and \(\max(-0.30,\ 0) = 0\).`,
            ],
            answer: String.raw`\(-DM = 0.60\): the low fell by 60 cents, which counts as downward movement.`,
          },
          tex: String.raw`-DM_t = \max(L_{t-1} - L_t,\ 0)`,
          where: [
            { sym: 'L_t, L_{t-1}', def: 'Today’s and yesterday’s low' },
          ],
          caption: 'The mirror image of +DM above: today\'s fall, or zero if today was flat or up, again, only the larger of the two possible moves ultimately counts.',
        },
        {
          t: 'math',
          syntax: [
            { sym: String.raw`\widetilde{X}`, say: String.raw`Read "X tilde" or "X smoothed". The tilde is an instruction to apply Wilder's smoothing over 14 periods rather than use the raw daily value.` },
            { sym: String.raw`100\,\frac{a}{b}`, say: String.raw`Read "100 times a over b": divide a by b, then multiply by 100 to express it as a percentage.` },
          ],
          worked: {
            title: String.raw`+DI and −DI from smoothed values`,
            steps: [
              String.raw`Given (all smoothed over 14 days): \(\widetilde{+DM} = 0.42\), \(\widetilde{-DM} = 0.18\), \(\widetilde{TR} = 1.20\).`,
              String.raw`Substitute for +DI: \(100 \times 0.42 / 1.20\).`,
              String.raw`Divide: \(0.42 / 1.20 = 0.35\), so \(+DI = 35\).`,
              String.raw`Substitute for −DI: \(100 \times 0.18 / 1.20 = 100 \times 0.15 = 15\).`,
            ],
            answer: String.raw`\(+DI = 35\) and \(-DI = 15\): about 35% of the average true range was upward movement and 15% downward, so buyers are in charge.`,
          },
          tex: String.raw`+DI = 100\,\frac{\widetilde{+DM}}{\widetilde{TR}} \qquad -DI = 100\,\frac{\widetilde{-DM}}{\widetilde{TR}}`,
          where: [
            { sym: 'TR', def: 'True range: the largest of today’s high-low range and the gaps from yesterday’s close' },
            { sym: '+DI, -DI', def: 'The share of true range that was upward or downward movement' },
          ],
          caption: 'Tildes mean Wilder-smoothed over 14 periods.',
        },
        {
          t: 'math',
          syntax: [
            { sym: String.raw`|x|`, say: String.raw`Read "the absolute value of x" or "mod x": drop any minus sign, so |−5| = 5. Here it gives the size of the gap between +DI and −DI regardless of which is bigger.` },
            { sym: String.raw`{+DI} - {-DI}`, say: String.raw`Plus-DI minus minus-DI. The braces only keep the signs in the names from colliding with the subtraction.` },
            { sym: String.raw`\widetilde{DX}`, say: String.raw`Read "DX smoothed": average the DX values over 14 periods with Wilder's smoothing.` },
          ],
          worked: {
            title: String.raw`From +DI and −DI to DX and ADX`,
            steps: [
              String.raw`Given: \(+DI = 35\) and \(-DI = 15\) (from the block above).`,
              String.raw`Substitute: \(DX = 100 \times |35 - 15| / (35 + 15)\).`,
              String.raw`Evaluate: \(|35 - 15| = 20\) and \(35 + 15 = 50\), so \(DX = 100 \times 20/50 = 40\).`,
              String.raw`Smooth it. Suppose yesterday\'s ADX was \(28\). Wilder\'s smoothing over 14 periods gives \(ADX = (13 \times 28 + 40)/14 = 404/14 = 28.86\).`,
            ],
            answer: String.raw`\(DX = 40\) is a strong one-day reading, but \(ADX \approx 28.9\) is above 25, so the market is classed as trending, and +DI above −DI says the trend is up.`,
          },
          tex: String.raw`DX = 100\,\frac{|{+DI} - {-DI}|}{{+DI} + {-DI}} \qquad ADX = \widetilde{DX}`,
          caption: 'DX measures how far apart +DI and −DI are, as a share of their total; ADX is that number smoothed over 14 periods. ADX measures trend strength, not direction: above 25 is often read as trending, below 20 as range-bound. +DI above −DI suggests an uptrend, see the metric below for how to read ADX itself.',
        },
        {
          t: 'metric',
          name: 'the average directional index (ADX)',
          shows: 'How strongly a market is trending, regardless of whether the trend is up or down, a deliberately direction-blind measure. This is the key thing that separates ADX from almost every other indicator on this shelf: a rising ADX just means "this is becoming a clearer trend", whether price is climbing or falling, which makes it a filter to combine with a direction-reading tool (like +DI/−DI, or a moving average) rather than a signal on its own.',
          eli5: 'Think of ADX as a speedometer for "trendiness", not for "up or down". A car can be speeding up while going forwards or backwards, the speedometer only tells you how fast, not which way. ADX works the same way: it tells you how strongly the market is trending, and you need a separate tool (like +DI vs −DI) to know if that trend is up or down.',
          higher: 'A strong, well-established trend in one direction, trend-following tools (moving averages, MACD, breakout systems) tend to work well. Above 25 is the traditional threshold for "trending"; above 40–50 suggests a very strong trend, which paradoxically can also mean the move is mature and due for a pause, since extremely high ADX readings are relatively rare and don\'t persist forever.',
          lower: 'A weak or absent trend, the market is chopping sideways within a range. Below 20 is traditionally read as "range-bound", where trend-following tools tend to generate false signals (whipsaws) and range-trading or mean-reversion approaches (buying near support, selling near resistance) tend to work better instead.',
          typical: 'Many traders use ADX purely as a filter: only take trend-following signals (like moving-average crossovers) when ADX is above roughly 20–25, and switch to range-trading tactics or stand aside when it is below that.',
        },
        { t: 'fin-tool', tool: 'indicators', focus: 'adx' },
      ],
    },
    {
      id: 'sar',
      title: 'Parabolic SAR',
      blocks: [
        {
          t: 'math',
          syntax: [
            { sym: String.raw`SAR_{t+1}`, say: String.raw`Read "SAR at time t plus 1": tomorrow's stop level, calculated from today's.` },
            { sym: String.raw`AF\,(EP - SAR_t)`, say: String.raw`Read "AF times the quantity EP minus SAR sub t": first work out the gap between the extreme point and today's stop, then take the fraction AF of it.` },
          ],
          worked: {
            title: String.raw`Two days of a Parabolic SAR in an uptrend`,
            steps: [
              String.raw`Given: \(SAR_t = 48.00\), highest high so far \(EP = 52.00\), and \(AF = 0.02\) (the starting value).`,
              String.raw`Substitute: \(SAR_{t+1} = 48.00 + 0.02\,(52.00 - 48.00)\).`,
              String.raw`Evaluate the bracket: \(52.00 - 48.00 = 4.00\), and \(0.02 \times 4.00 = 0.08\), so \(SAR_{t+1} = 48.08\).`,
              String.raw`Next day price makes a new high, \(EP = 53.00\), so AF rises to \(0.04\): \(SAR = 48.08 + 0.04\,(53.00 - 48.08) = 48.08 + 0.04 \times 4.92 = 48.08 + 0.1968 = 48.2768\).`,
            ],
            answer: String.raw`The stop creeps up from \(48.00\) to about \(48.28\), and each new high makes it climb faster. If price closes below it, the system reverses.`,
          },
          tex: String.raw`SAR_{t+1} = SAR_t + AF\,(EP - SAR_t)`,
          where: [
            { sym: 'EP', def: 'Extreme point: highest high of the current uptrend (lowest low in a downtrend)' },
            { sym: 'AF', def: 'Acceleration factor: starts at 0.02, rises by 0.02 at each new extreme, up to 0.20' },
          ],
          caption: 'The stop accelerates towards price as the trend extends. When price crosses it, the system "stops and reverses".',
        },
        { t: 'fin-tool', tool: 'indicators', focus: 'psar' },
      ],
    },
    {
      id: 'ichimoku',
      title: 'Ichimoku Kinko Hyo ("one-glance equilibrium chart")',
      blocks: [
        {
          t: 'math',
          syntax: [
            { sym: String.raw`\max H_9`, say: String.raw`Read "the max of H over the last 9 periods": scan the last 9 highs and keep the biggest. \(\min L_9\) is the same for the lowest low.` },
            { sym: String.raw`\tfrac12(a + b)`, say: String.raw`Read "one half of a plus b": simply the midpoint, or average, of the two numbers.` },
          ],
          worked: {
            title: String.raw`Ichimoku lines for a share trading around 105`,
            steps: [
              String.raw`Given: 9-day high \(108\) and low \(96\); 26-day high \(110\) and low \(90\); 52-day high \(120\) and low \(86\).`,
              String.raw`Tenkan: \(T = \tfrac12(108 + 96) = 102\).`,
              String.raw`Kijun: \(K = \tfrac12(110 + 90) = 100\).`,
              String.raw`Span A: \(A = \tfrac12(102 + 100) = 101\). Span B: \(B = \tfrac12(120 + 86) = 103\).`,
              String.raw`The cloud runs between \(A = 101\) and \(B = 103\). With the close at \(105\), price is above the cloud.`,
            ],
            answer: String.raw`Price \(105\) sits above the cloud, and the fast line \(T = 102\) is above the base line \(K = 100\): both read as bullish.`,
          },
          tex: String.raw`\begin{aligned}
T &= \tfrac12(\max H_9 + \min L_9) \\
K &= \tfrac12(\max H_{26} + \min L_{26}) \\
A &= \tfrac12(T + K) \\
B &= \tfrac12(\max H_{52} + \min L_{52})
\end{aligned}`,
          where: [
            { sym: 'H_9, L_9', def: 'Highest high and lowest low of the last 9 periods (similarly for 26 and 52)' },
            { sym: 'T', def: 'Tenkan-sen (the "conversion line"), fast, reacts quickly to price' },
            { sym: 'K', def: 'Kijun-sen (the "base line"), slower, acts like a trend filter' },
            { sym: 'A', def: 'Senkou Span A, plotted 26 periods ahead of the current price' },
            { sym: 'B', def: 'Senkou Span B, also plotted 26 periods ahead' },
          ],
          caption: 'A sixth line, the Chikou Span, is simply the current close plotted 26 periods behind, not a separate calculation, just price shifted in time. The space between Spans A and B is the "cloud" (kumo): price above the cloud suggests an uptrend, below it a downtrend, and inside it a range; a thick cloud (the two spans far apart) is read as stronger support or resistance than a thin one, since it would take a bigger move to punch through.',
        },
        { t: 'fin-tool', tool: 'indicators', focus: 'ichimoku' },
        { t: 'callout', tone: 'fact', title: '30 years in the making', text: 'Ichimoku was developed by a Japanese journalist, Goichi Hosoda, who reportedly worked on it with assistants for some 30 years before publishing it in 1969. The 9, 26 and 52 settings come from a time when Japan had a six-day trading week (26 days ≈ a month).' },
      ],
    },
    {
      id: 'pivots',
      title: 'Pivot points',
      blocks: [
        {
          t: 'math',
          syntax: [
            { sym: String.raw`R_1, S_1`, say: String.raw`Read "R one" and "S one": the first resistance and first support levels. The numbers are labels, not powers.` },
            { sym: String.raw`2P - L`, say: String.raw`Read "two P minus L": double the pivot, then subtract the previous low.` },
          ],
          worked: {
            title: String.raw`Pivot levels from one day's trading`,
            steps: [
              String.raw`Given: yesterday\'s high \(H = 212.40\), low \(L = 205.60\), close \(C = 210.20\).`,
              String.raw`Pivot: \(P = (212.40 + 205.60 + 210.20)/3 = 628.20/3 = 209.40\).`,
              String.raw`Level 1: \(R_1 = 2(209.40) - 205.60 = 213.20\) and \(S_1 = 2(209.40) - 212.40 = 206.40\).`,
              String.raw`Range: \(H - L = 212.40 - 205.60 = 6.80\).`,
              String.raw`Level 2: \(R_2 = 209.40 + 6.80 = 216.20\) and \(S_2 = 209.40 - 6.80 = 202.60\).`,
            ],
            answer: String.raw`Today\'s watch-list runs \(202.60,\ 206.40,\ 209.40,\ 213.20,\ 216.20\): a ladder of levels where price may stall or bounce.`,
          },
          tex: String.raw`\begin{aligned}
P &= \frac{H + L + C}{3} \\
R_1 &= 2P - L, & S_1 &= 2P - H \\
R_2 &= P + (H - L), & S_2 &= P - (H - L)
\end{aligned}`,
          where: [{ sym: 'H, L, C', def: 'The previous day’s (or week’s) high, low and close' }],
          caption: 'Day traders use these as potential support and resistance levels for the next session.',
        },
        {
          t: 'example',
          title: 'Yesterday: high 105, low 98, close 103',
          lines: [
            { label: 'Pivot', text: '\\(P = (105 + 98 + 103)/3 = 102\\)' },
            { label: 'R1, S1', text: '\\(2(102) - 98 = 106;\\ 2(102) - 105 = 99\\)' },
            { label: 'R2, S2', text: '\\(102 + 7 = 109;\\ 102 - 7 = 95\\)' },
          ],
        },
      ],
    },
    {
      id: 'oscillators',
      title: 'Williams %R, CCI and MFI',
      blocks: [
        {
          t: 'math',
          syntax: [
            { sym: String.raw`\%R`, say: String.raw`Read "percent R" or "Williams percent R". The backslash just makes the % sign print; it is the name of the indicator.` },
            { sym: String.raw`-100\times\frac{a}{b}`, say: String.raw`Read "minus 100 times a over b": divide, multiply by 100, and flip the sign so the answer sits between −100 and 0.` },
            { sym: String.raw`H_{14}, L_{14}`, say: String.raw`The subscript 14 is the look-back: the highest high and lowest low over the last 14 periods.` },
          ],
          worked: {
            title: String.raw`Williams %R over a 14-day range`,
            steps: [
              String.raw`Given: 14-day high \(H_{14} = 150\), 14-day low \(L_{14} = 130\), current close \(C = 142\).`,
              String.raw`Substitute: \(\%R = -100 \times (150 - 142)/(150 - 130)\).`,
              String.raw`Evaluate: \((150 - 142) = 8\) and \((150 - 130) = 20\), so \(\%R = -100 \times 0.4 = -40\).`,
              String.raw`If the close had been \(132\) instead: \(-100 \times 18/20 = -90\).`,
            ],
            answer: String.raw`\(\%R = -40\) is mid-range (closer to the high); \(-90\) would be below \(-80\), the oversold zone.`,
          },
          tex: String.raw`\%R = -100\times\frac{H_{14} - C}{H_{14} - L_{14}}`,
          where: [
            { sym: 'C', def: 'The current close' },
            { sym: 'H_{14}, L_{14}', def: 'Highest high and lowest low of the last 14 periods' },
          ],
          caption: 'Larry Williams’ oscillator: the stochastic %K flipped upside down, from 0 (at the high) to −100 (at the low). Above −20 overbought, below −80 oversold, read it exactly like the stochastic oscillator (see [momentum](@finance/technical/momentum)), just on a negative scale.',
        },
        { t: 'fin-tool', tool: 'indicators', focus: 'williams' },
        {
          t: 'math',
          syntax: [
            { sym: String.raw`\text{SMA}_{20}(TP)`, say: String.raw`Read "the 20-period simple moving average of TP": average the last 20 typical prices.` },
            { sym: String.raw`|TP_i - \text{SMA}_{20}(TP)|`, say: String.raw`Read "the absolute value of TP sub i minus the average": how far each typical price sat from the average, ignoring direction.` },
            { sym: String.raw`\frac{1}{20}\sum`, say: String.raw`Read "one twentieth of the sum": add up the 20 absolute gaps and divide by 20, which is simply their average, the mean deviation.` },
            { sym: String.raw`0.015 \times MD`, say: String.raw`The denominator rescales the result: Lambert's fixed constant times the mean deviation.` },
          ],
          worked: {
            title: String.raw`One CCI reading`,
            steps: [
              String.raw`Given today\'s high \(52.60\), low \(51.20\), close \(52.20\): \(TP = (52.60 + 51.20 + 52.20)/3 = 156/3 = 52.00\).`,
              String.raw`Given the 20-day average typical price \(\text{SMA}_{20}(TP) = 50.00\) and the mean deviation of the last 20 typical prices \(MD = 1.60\).`,
              String.raw`Numerator: \(52.00 - 50.00 = 2.00\).`,
              String.raw`Denominator: \(0.015 \times 1.60 = 0.024\).`,
              String.raw`Divide: \(CCI = 2.00/0.024 = 83.3\).`,
            ],
            answer: String.raw`\(CCI \approx 83\): well above zero (price is above its average) but inside the \(\pm 100\) band, so not yet an extreme reading.`,
          },
          tex: String.raw`CCI = \frac{TP - \text{SMA}_{20}(TP)}{0.015 \times MD} \qquad TP = \frac{H + L + C}{3} \qquad MD = \frac{1}{20}\sum |TP_i - \text{SMA}_{20}(TP)|`,
          where: [
            { sym: 'TP', def: 'Typical price for the period' },
            { sym: 'MD', def: 'Mean deviation of typical price from its 20-period average' },
          ],
          caption: 'Donald Lambert chose the 0.015 constant so that about 70–80% of values fall between −100 and +100, which makes those two levels the natural read: above +100 is overbought (or, to trend traders, confirmation of a strong new trend starting), below −100 oversold, and the great majority of the time CCI just sits inside the band doing nothing notable.',
        },
        { t: 'fin-tool', tool: 'indicators', focus: 'cci' },
        {
          t: 'math',
          syntax: [
            { sym: String.raw`\sum_{\text{up}} TP\cdot V`, say: String.raw`Read "the sum, over the up days, of TP times V": for each day when typical price rose, multiply TP by volume, then add those up.` },
            { sym: String.raw`\sum_{\text{down}}`, say: String.raw`The same sum, but only over days when typical price fell.` },
            { sym: String.raw`\dfrac{a}{b}`, say: String.raw`Just a large fraction, a over b (nested inside the bigger fraction), so the whole formula reads "100 minus 100 over one plus the ratio".` },
          ],
          worked: {
            title: String.raw`A five-day money flow index (a shortened window)`,
            steps: [
              String.raw`Given daily typical prices \(20,\ 21,\ 20.5,\ 21.5,\ 21\) and volumes (thousands) \(1000,\ 1500,\ 1200,\ 2000,\ 800\).`,
              String.raw`Money flow \(TP \times V\): \(20000,\ 31500,\ 24600,\ 43000,\ 16800\).`,
              String.raw`Days 2 and 4 were up days (TP rose), days 3 and 5 down days. Up-flow: \(31500 + 43000 = 74500\). Down-flow: \(24600 + 16800 = 41400\).`,
              String.raw`Ratio: \(74500/41400 = 1.80\).`,
              String.raw`Substitute: \(MFI = 100 - 100/(1 + 1.80) = 100 - 35.7 = 64.3\).`,
            ],
            answer: String.raw`\(MFI \approx 64\): money flowed in on up days more than out on down days, but not yet near the 80 overbought line. A real MFI uses 14 days.`,
          },
          tex: String.raw`MFI = 100 - \frac{100}{1 + \dfrac{\sum_{\text{up}} TP\cdot V}{\sum_{\text{down}} TP\cdot V}}`,
          where: [
            { sym: 'TP', def: 'Typical price: (high + low + close) / 3' },
            { sym: 'V', def: 'Volume for the period' },
          ],
          caption: 'The money flow index is an RSI built on typical price times volume, so heavy-volume days count more. Read it exactly like RSI, 0 to 100 with 80/20 the usual overbought/oversold lines, the difference is that a rally on thin volume will not push MFI as high as the same rally on heavy volume would, which is the whole point of weighting by volume.',
        },
        { t: 'fin-tool', tool: 'indicators', focus: 'mfi' },
      ],
    },
    {
      id: 'channels',
      title: 'Keltner and Donchian channels',
      blocks: [
        {
          t: 'math',
          syntax: [
            { sym: String.raw`\pm`, say: String.raw`Read "plus or minus": two results, one with + (upper line) and one with − (lower line).` },
            { sym: String.raw`\text{EMA}_{20}`, say: String.raw`Read "the 20-period exponential moving average", used as the centre line.` },
            { sym: String.raw`2\,ATR_{10}`, say: String.raw`Read "two times ATR 10": the 10-period average true range, doubled.` },
            { sym: String.raw`\max H_{20},\ \min L_{20}`, say: String.raw`The highest high and lowest low of the last 20 periods: scan and keep the extreme.` },
          ],
          worked: {
            title: String.raw`Both channels on one share`,
            steps: [
              String.raw`Given: \(\text{EMA}_{20} = 100.00\), \(ATR_{10} = 1.80\), 20-day highest high \(104.50\), 20-day lowest low \(95.20\).`,
              String.raw`Keltner width: \(2 \times 1.80 = 3.60\).`,
              String.raw`Keltner upper: \(100.00 + 3.60 = 103.60\); lower: \(100.00 - 3.60 = 96.40\).`,
              String.raw`Donchian upper is just \(\max H_{20} = 104.50\); lower is \(\min L_{20} = 95.20\).`,
            ],
            answer: String.raw`Keltner channel \(96.40\) to \(103.60\), Donchian channel \(95.20\) to \(104.50\). A close above \(104.50\) would be a Donchian breakout.`,
          },
          tex: String.raw`\text{Keltner: } \text{EMA}_{20} \pm 2\,ATR_{10}\qquad\qquad \text{Donchian: } \max H_{20} \text{ and } \min L_{20}`,
          caption: 'Keltner channels scale with average true range rather than standard deviation (compare Bollinger Bands). Donchian channels are the basis of the Turtle traders’ breakout rules.',
        },
        { t: 'fin-tool', tool: 'indicators', focus: 'keltner' },
        { t: 'fin-tool', tool: 'indicators', focus: 'donchian' },
        { t: 'callout', tone: 'tip', title: 'The squeeze', text: 'When Bollinger Bands contract inside Keltner channels, volatility is unusually low; traders watch for the expansion that often follows ("the TTM squeeze").' },
      ],
    },
  ],
  sources: [
    'Wilder, J. W., Jr. (1978). *New Concepts in Technical Trading Systems*. Trend Research.',
    'Lambert, D. R. (1980). Commodity channel index: Tool for trading cyclic trends. *Commodities* (now *Futures*) magazine.',
    'Patel, M. (2010). *Trading with Ichimoku Clouds*. Wiley.',
    'Achelis, S. B. (2000). *Technical Analysis from A to Z* (2nd ed.). McGraw-Hill.',
  ],
  related: ['finance/technical/momentum', 'finance/technical/volatility', 'finance/frameworks/turtles'],
}

export default guide
