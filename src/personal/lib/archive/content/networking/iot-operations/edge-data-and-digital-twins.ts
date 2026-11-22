import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'An IoT system is, in the end, a data system. Sensors produce streams of timestamped readings, often from thousands or millions of sources, of uneven quality. Deciding where to process them (on the device, at the edge, in the cloud), how to store time-series data, how to detect problems, and how to model physical things in software (digital twins) are the questions this guide addresses. It also covers the sampling theorem, which sets a hard limit on how fast you must measure, and the data-quality pitfalls that make IoT analytics harder than it looks.',
  nutshell: [
    '**Edge computing** processes data near the source to cut **latency**, **bandwidth** and **cost**, and to work through **outages** and protect **privacy**.',
    'Split work by tier: **device** (filter, compress, react), **gateway/edge** (aggregate, buffer, run local rules or models), **cloud** (store, analyse, train, manage).',
    '**Time-series databases** and **stream processing** handle high-volume timestamped data.',
    '**Sampling theorem**: sample at **more than twice** the highest frequency you care about, or you get **aliasing**.',
    '**Digital twins** are software models of physical assets kept in sync with sensor data, used to monitor, simulate and predict.',
  ],
  sections: [
    {
      id: 'where',
      title: 'Where should the processing happen?',
      blocks: [
        {
          t: 'table',
          head: ['Tier', 'Good at', 'Examples of work'],
          rows: [
            ['Device (MCU)', 'Immediate, tiny decisions; saving radio use', 'Threshold alarms, averaging, compression, wake-on-event, tiny ML (keyword spotting, anomaly detection)'],
            ['Gateway or edge server', 'Local aggregation, translation between protocols, buffering during outages, low-latency control', 'Protocol conversion, filtering, running rules and video analytics on site, store-and-forward'],
            ['Cloud', 'Large storage, heavy analytics, fleet-wide views, model training', 'Time-series storage, dashboards, machine learning, integration with business systems'],
          ],
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Latency', title: 'Close to the action', body: 'A safety shut-off or a conveyor controller cannot wait for a round trip to a data centre. Local decisions are essential.' },
            { tag: 'Bandwidth', title: 'Send less', body: 'A camera streaming video constantly is expensive. Detect events locally and send only clips or counts.' },
            { tag: 'Resilience', title: 'Work offline', body: 'Edge nodes keep running when the Internet fails and forward the backlog when it returns.' },
            { tag: 'Privacy', title: 'Data stays local', body: 'Processing on site can keep raw audio, video or personal data inside the building, sending only the results.' },
          ],
        },
        { t: 'callout', tone: 'note', title: 'Edge, fog and cloud', text: '“Fog computing” is a term for intermediate layers between edge and cloud. In practice the boundaries are fuzzy; what matters is deciding, for each job, the tier that balances latency, cost, reliability and privacy.' },
      ],
    },
    {
      id: 'sampling',
      title: 'How often to measure: sampling and aliasing',
      blocks: [
        {
          t: 'math',
          tex: 'f_{s} > 2\\, f_{\\max}',
          caption: 'The Nyquist-Shannon sampling theorem: the sampling rate must exceed twice the highest frequency in the signal.',
          plain: 'To capture a wiggling signal faithfully, you must measure it more than twice per wiggle. If you measure more slowly, fast changes masquerade as slow ones, which is called aliasing, and the information is lost for good. Before sampling, filter out frequencies above half the sampling rate.',
          where: [
            { sym: 'f_{s}', def: 'sampling rate: measurements per second (hertz)' },
            { sym: 'f_{\\max}', def: 'highest frequency present in the signal that you care about' },
          ],
          syntax: [
            { sym: 'f_{\\max}', say: '“f max”: the fastest oscillation in the signal.' },
            { sym: '>', say: 'Strictly greater than: you need more than twice the highest frequency.' },
          ],
          worked: {
            title: 'Vibration monitoring on a motor',
            steps: [
              'A motor runs at 3,000 rpm, so it turns \\(50\\) times per second. Bearing faults show up as vibration at several times that, up to about \\(1\\) kHz.',
              'The minimum sampling rate is \\(f_s > 2 \\times 1000 = 2000\\) samples per second.',
              'In practice use \\(2.5\\) to \\(5\\) times the highest frequency, so \\(2.5\\) to \\(5\\) kHz, with an analogue anti-aliasing filter.',
              'At 5 kHz with 16-bit samples on three axes: \\(5000 \\times 2 \\times 3 = 30{,}000\\) bytes per second, about \\(2.6\\) GB per day per sensor if sent raw.',
            ],
            answer: 'Sample at about 2.5 to 5 kHz. Sending raw data would produce roughly 2.6 GB a day for one sensor, which is why the sensor or an edge gateway should compute features (such as spectra and RMS values) and send those instead.',
          },
        },
        {
          t: 'table',
          head: ['Signal', 'Typical rate', 'Reason'],
          rows: [
            ['Room temperature', 'Once a minute or slower', 'Changes slowly'],
            ['Power consumption', 'Every second to every minute', 'Depends on the load; faster for fault detection'],
            ['Vibration, audio', 'Kilohertz', 'Contains fast oscillations'],
            ['GPS tracking', 'Every second to every few minutes', 'Trade between accuracy and battery'],
            ['Alarms and events', 'On change', 'Report when something happens, with a periodic heartbeat'],
          ],
        },
      ],
    },
    {
      id: 'store',
      title: 'Storing and processing time-series data',
      blocks: [
        {
          t: 'table',
          head: ['Tool type', 'Examples', 'Use'],
          rows: [
            ['Time-series databases', 'InfluxDB, TimescaleDB, Prometheus, QuestDB, cloud services', 'Efficient storage and queries over time ranges, downsampling, retention policies'],
            ['Stream processing', 'Apache Kafka, Flink, Spark Streaming, cloud streaming services', 'Process events as they arrive: windows, joins, alerts'],
            ['Object storage and data lakes', 'S3-compatible storage with Parquet files', 'Cheap long-term storage for analysis and machine learning'],
            ['Dashboards and alerting', 'Grafana, Node-RED, cloud dashboards', 'Visualise and notify'],
          ],
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Retention', title: 'Keep detail for a while, summaries for longer', body: 'Store raw data for days and downsampled averages for years, to control cost.' },
            { tag: 'Windows', title: 'Aggregate over time', body: 'Compute means, minimums, maximums and counts over fixed or sliding windows rather than looking at single points.' },
            { tag: 'Late data', title: 'Messages arrive out of order', body: 'Devices buffer and send later. Use event timestamps from the device, not arrival time, and tolerate lateness.' },
            { tag: 'Cardinality', title: 'Many series', body: 'Millions of devices times several metrics make millions of series. Choose labels carefully to keep queries fast.' },
          ],
        },
      ],
    },
    {
      id: 'quality',
      title: 'Data quality, anomalies and tiny ML',
      blocks: [
        {
          t: 'checklist',
          items: [
            'Synchronise clocks (NTP, or timestamps added by a gateway); bad timestamps ruin analysis.',
            'Record units, sensor model and calibration with the data.',
            'Detect stuck values, spikes, drift and missing data; do not silently fill gaps.',
            'Calibrate sensors, and know their accuracy: a ±0.5 °C sensor cannot show a 0.1 °C trend reliably.',
            'Keep raw data when feasible, so that you can reprocess when you find a bug.',
            'Version your payload schema, and validate on ingest.',
          ],
        },
        {
          t: 'math',
          tex: 'z = \\frac{x - \\mu}{\\sigma}',
          caption: 'The z-score: how many standard deviations a reading is from the recent average.',
          plain: 'Subtract the typical value from a reading, then divide by how much readings normally vary. The result tells you how unusual the reading is. A very large positive or negative number suggests an anomaly.',
          where: [
            { sym: 'x', def: 'the new reading' },
            { sym: '\\mu', def: 'the mean of recent readings' },
            { sym: '\\sigma', def: 'the standard deviation of recent readings' },
          ],
          syntax: [{ sym: '\\mu,\\ \\sigma', say: '“mu” and “sigma”: the Greek letters for the mean and the standard deviation.' }],
          worked: {
            title: 'A temperature spike',
            steps: [
              'Over the last hour a freezer’s temperature has averaged \\(\\mu = -18.0\\) °C with a standard deviation \\(\\sigma = 0.4\\) °C.',
              'A new reading is \\(x = -16.4\\) °C.',
              '\\(z = \\dfrac{-16.4 - (-18.0)}{0.4} = \\dfrac{1.6}{0.4} = 4.0\\).',
            ],
            answer: 'A z-score of 4 is very unusual if readings are roughly normal (it should occur about 1 time in 15,000). Raise an alert, but check for a door opening or a sensor fault first, and require several consecutive high readings to cut false alarms.',
          },
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'TinyML', title: 'Machine learning on microcontrollers', body: 'Small neural networks (using frameworks such as TensorFlow Lite for Microcontrollers or Edge Impulse) run in tens of kilobytes for keyword spotting, gesture recognition and vibration anomaly detection, with no cloud round trip.' },
            { tag: 'Predictive maintenance', title: 'Fix before failure', body: 'Vibration, temperature and current patterns predict failures. Success depends on good labelled history, which is often scarce.' },
            { tag: 'Digital twin', title: 'A model of the asset', body: 'A digital twin is a software representation of a physical thing (a pump, a building, a factory), updated by sensor data, used to monitor, simulate and optimise.' },
            { tag: 'Twin platforms', title: 'Services and standards', body: 'Cloud platforms offer twin services and modelling languages (such as Azure’s DTDL). Start with a clear question; a twin without one becomes an expensive dashboard.' },
          ],
        },
        { t: 'links', items: [{ path: 'networking/iot-operations/device-management-and-updates', note: 'Next: managing devices' }, { path: 'cloud/fundamentals/edge-and-iot-cloud', note: 'The cloud pipeline' }, { path: 'ai/start-here', note: 'Machine learning basics' }] },
      ],
    },
  ],
  sources: [
    'Shannon, C. E. (1949). Communication in the presence of noise. Proceedings of the IRE.',
    'Shi, W., et al. (2016). Edge computing: vision and challenges. IEEE Internet of Things Journal.',
    'Warden, P., and Situnayake, D. (2019). TinyML. O’Reilly.',
    'Grieves, M., and Vickers, J. (2017). Digital twin: mitigating unpredictable, undesirable emergent behavior in complex systems. In Transdisciplinary Perspectives on Complex Systems.',
    'Kleppmann, M. (2017). Designing Data-Intensive Applications. O’Reilly (stream processing and time).',
  ],
  related: ['networking/iot-connectivity/iot-application-protocols', 'networking/iot-operations/device-management-and-updates', 'cloud/fundamentals/edge-and-iot-cloud'],
}

export default guide
