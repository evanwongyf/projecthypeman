import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'At the centre of every IoT device is a small computer, usually a microcontroller, surrounded by sensors, actuators, a radio and a power source. Unlike a laptop, it runs one purpose-built program, often with no operating system or a tiny real-time one, and it spends nearly all its time asleep. This guide covers how to choose a microcontroller, how sensors and analogue-to-digital converters work, the buses that connect parts (I²C, SPI, UART), real-time operating systems, and, above all, power: the arithmetic of sleep and active currents that decides battery life, with a lab to experiment.',
  nutshell: [
    'A **microcontroller (MCU)** combines a processor, memory and peripherals on one chip. A **system-on-chip (SoC)** adds a radio. Examples: **ESP32** (Wi-Fi and Bluetooth), **nRF52** (Bluetooth), **STM32**, **RP2040**.',
    '**Single-board computers** (Raspberry Pi) run Linux and suit gateways and prototypes, but use far more power.',
    '**Sensors** convert physical quantities to electrical signals; an **ADC** turns voltages into numbers; an N-bit ADC has **2^N** levels.',
    '**I²C**, **SPI** and **UART** are the common ways to connect sensors and modules to an MCU.',
    '**Battery life** is set by **average current**: mostly the **sleep current** and the **duty cycle** of short, power-hungry bursts.',
  ],
  sections: [
    {
      id: 'mcu',
      title: 'Choosing the brain',
      blocks: [
        {
          t: 'table',
          head: ['Platform', 'Typical specs', 'Strengths', 'Typical use'],
          rows: [
            ['ESP32 family (Espressif)', 'Dual-core 240 MHz (original), around 520 KB RAM, Wi-Fi and Bluetooth; newer variants use RISC-V cores', 'Cheap, Wi-Fi built in, huge community', 'Smart plugs, sensors on mains or a battery that wakes rarely'],
            ['nRF52 / nRF53 (Nordic)', 'Arm Cortex-M4 or M33, 64 to 128 MHz, Bluetooth LE, Thread, Zigbee', 'Very low power, strong radio stack', 'Wearables, beacons, battery sensors'],
            ['STM32 (STMicroelectronics)', 'Arm Cortex-M0 to M7; wide range of speeds and sizes', 'Rich peripherals, ultra-low-power families', 'Industrial, motor control, metering'],
            ['RP2040 and RP2350 (Raspberry Pi)', 'Dual Cortex-M0+ 133 MHz, 264 KB RAM (RP2040); no radio on the bare chip', 'Cheap, easy to program, programmable I/O', 'Hobby projects, custom interfaces'],
            ['Arduino boards', 'Many chips (AVR, ARM, ESP)', 'Beginner-friendly tools and libraries', 'Learning and prototypes'],
            ['Raspberry Pi (single-board computer)', 'Quad-core Arm, 1 to 8 GB RAM, runs Linux', 'Full operating system, easy networking and storage', 'Gateways, edge processing, cameras'],
          ],
          caption: 'Representative figures; models change quickly. Always check the datasheet.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'MCU', title: 'Microcontroller', body: 'A processor with flash (program), RAM and peripherals. Boots in milliseconds and sleeps at microamps. Runs bare-metal code or an RTOS.' },
            { tag: 'SoC', title: 'System-on-chip with radio', body: 'Integrates the MCU and a radio (Wi-Fi, BLE, 802.15.4). Simplifies design and certification.' },
            { tag: 'MPU', title: 'Microprocessor', body: 'Runs a full operating system (Linux) with external RAM. More capable, uses hundreds of milliwatts to watts, and takes seconds to boot.' },
            { tag: 'Module', title: 'Pre-certified modules', body: 'Radio modules come with regulatory certification (FCC, CE, IMDA in Singapore), saving cost and time for products.' },
          ],
        },
      ],
    },
    {
      id: 'sensors',
      title: 'Sensors, actuators and analogue to digital',
      blocks: [
        {
          t: 'table',
          head: ['Quantity', 'Sensor types', 'Interface'],
          rows: [
            ['Temperature, humidity, pressure', 'BME280, SHT31, DS18B20, thermistors', 'I²C, 1-Wire, analogue'],
            ['Motion and orientation', 'Accelerometers, gyroscopes (IMU), PIR motion detectors', 'I²C, SPI, digital'],
            ['Light and colour', 'Photodiodes, ambient-light sensors, colour sensors', 'Analogue, I²C'],
            ['Distance', 'Ultrasonic, time-of-flight (laser), radar', 'Digital, I²C'],
            ['Gas and air quality', 'Metal-oxide, NDIR CO₂, particulate (PM2.5) sensors', 'Analogue, UART, I²C'],
            ['Position', 'GNSS (GPS) modules', 'UART'],
            ['Current and power', 'Shunt monitors, Hall-effect sensors, energy-metering chips', 'I²C, SPI'],
          ],
        },
        {
          t: 'math',
          tex: '\\text{resolution} = \\frac{V_{\\text{ref}}}{2^{N}}',
          caption: 'The smallest voltage step an N-bit analogue-to-digital converter can distinguish.',
          plain: 'An ADC measures a voltage by comparing it with a reference and reporting a whole number. With N bits there are 2 to the power N possible numbers. The reference voltage divided by that count is the size of one step.',
          where: [
            { sym: 'V_{\\text{ref}}', def: 'the full-scale reference voltage (often the supply, such as 3.3 V)' },
            { sym: 'N', def: 'the number of bits of the converter' },
          ],
          syntax: [{ sym: '2^{N}', say: '“two to the N”: the number of distinct levels (12 bits give 4,096).' }],
          worked: {
            title: 'A 12-bit ADC on a 3.3 V supply',
            steps: [
              'Levels: \\(2^{12} = 4096\\).',
              'Step size: \\(\\dfrac{3.3}{4096} \\approx 0.000806\\) V, about \\(0.8\\) mV.',
              'A temperature sensor outputs 10 mV per °C. One ADC step is \\(0.8 / 10 = 0.08\\) °C.',
              'In practice noise, reference accuracy and the sensor limit the real resolution, and the effective number of bits is often 9 to 11 on a microcontroller.',
            ],
            answer: 'A 12-bit ADC at 3.3 V resolves about 0.8 mV. For a 10 mV/°C sensor that is a nominal 0.08 °C, though noise and accuracy mean you cannot trust the last bits. Averaging several readings helps.',
          },
        },
        {
          t: 'table',
          head: ['Bus', 'Wires', 'Speed (typical)', 'Notes'],
          rows: [
            ['I²C', '2 (SDA data, SCL clock) plus power', '100 kHz, 400 kHz (up to a few MHz in some modes)', 'Many devices on one pair of wires, each with a 7-bit address; needs pull-up resistors'],
            ['SPI', '4 (MOSI, MISO, SCK, chip-select per device)', 'Several MHz to tens of MHz', 'Fast, simple, one chip-select per device'],
            ['UART (serial)', '2 (TX, RX)', '9,600 to 115,200 baud and higher', 'Point to point; used for GPS, modems, debug consoles'],
            ['1-Wire', '1 data wire', 'Slow (kilobits)', 'DS18B20 temperature sensors; long cables'],
            ['GPIO and PWM', '1 pin', 'N/A', 'Switch outputs, read buttons, dim LEDs, drive servos'],
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Electrical safety', text: 'Keep microcontroller projects on low voltage (3.3 V or 5 V). Switching mains power with a relay should be done only with properly rated, certified modules and by someone qualified; a mistake can cause fire or electrocution. Use the right voltage levels: many sensors are not 5 V tolerant.' },
      ],
    },
    {
      id: 'rtos',
      title: 'Software: bare metal, RTOS and sleep',
      blocks: [
        {
          t: 'table',
          head: ['Approach', 'What it is', 'When to use'],
          rows: [
            ['Bare metal (super-loop)', 'One loop: read, process, send, sleep', 'Simple devices'],
            ['RTOS (FreeRTOS, Zephyr)', 'A small kernel with tasks, queues, timers and drivers', 'Several concurrent jobs with timing needs; radio stacks'],
            ['Arduino or MicroPython', 'High-level frameworks', 'Quick prototyping; MicroPython uses more memory and power'],
            ['Embedded Linux', 'A full operating system on a microprocessor', 'Gateways and cameras'],
          ],
        },
        {
          t: 'steps',
          items: [
            { title: 'Sleep by default', body: 'The processor and radio are off or in deep sleep nearly all the time. A real-time clock or a sensor interrupt wakes the device.' },
            { title: 'Wake, measure, decide', body: 'Take a reading, apply simple filtering or thresholds. Skip sending if nothing changed.' },
            { title: 'Transmit briefly', body: 'Power up the radio only when needed, send compact data, and power it down.' },
            { title: 'Go back to sleep', body: 'Use a watchdog timer to recover from hangs, and handle failures with back-off so that devices do not drain batteries trying to reconnect.' },
          ],
        },
      ],
    },
    {
      id: 'power',
      title: 'Power and battery life',
      blocks: [
        {
          t: 'math',
          tex: 'I_{\\text{avg}} = \\frac{I_{\\text{active}}\\, t_{\\text{active}} + I_{\\text{sleep}}\\,(T - t_{\\text{active}})}{T}, \\qquad \\text{life} = \\frac{0.8\\, C}{I_{\\text{avg}}}',
          caption: 'Average current of a duty-cycled device, and battery life with 20 per cent of capacity held back.',
          plain: 'Over one wake-up cycle, add the charge used while awake to the charge used while asleep, and divide by the cycle length. The result is the average current. Dividing the usable battery capacity by it gives the running time in hours.',
          where: [
            { sym: 'I_{\\text{active}}, I_{\\text{sleep}}', def: 'current drawn awake and asleep' },
            { sym: 't_{\\text{active}}', def: 'time awake per cycle' },
            { sym: 'T', def: 'time between wake-ups (the cycle length)' },
            { sym: 'C', def: 'battery capacity in mAh (the factor 0.8 reserves margin)' },
          ],
          syntax: [{ sym: 'I_{\\text{avg}}', say: '“I average”: the time-weighted mean current.' }],
          worked: {
            title: 'A coin-cell Bluetooth sensor',
            steps: [
              'Sleep current \\(3\\ \\mu\\text{A} = 0.003\\) mA; active \\(8\\) mA for \\(30\\) ms every \\(60\\) s; battery \\(225\\) mAh.',
              'Charge awake: \\(8 \\times 0.030 = 0.24\\) mA·s. Charge asleep: \\(0.003 \\times 59.97 \\approx 0.18\\) mA·s.',
              'Average current: \\(\\dfrac{0.24 + 0.18}{60} = 0.007\\) mA \\(= 7\\ \\mu\\text{A}\\).',
              'Life: \\(\\dfrac{0.8 \\times 225}{0.007} = \\dfrac{180}{0.007} \\approx 25{,}700\\) hours \\(\\approx 2.9\\) years.',
            ],
            answer: 'About 2.9 years. Note that sleeping (0.18) costs nearly as much as being awake (0.24), so cutting sleep current from 3 µA to 1 µA or reporting every two minutes would each extend life substantially. Try it in the lab.',
          },
        },
        { t: 'net-lab', viz: 'battery' },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Radio', title: 'Transmitting is expensive', body: 'A Wi-Fi connection may draw 100 to 250 mA while active, with a second or more to connect. BLE and LoRa bursts use tens of milliamps for milliseconds to seconds.' },
            { tag: 'Leakage', title: 'Hidden drains', body: 'Voltage regulators, pull-ups, LEDs and sensors left powered can dominate sleep current. Measure with a source-measure unit or a power profiler.' },
            { tag: 'Battery', title: 'Capacity is not constant', body: 'Cold, high pulses and ageing reduce capacity. Coin cells do poorly with high current bursts; add a capacitor or use a different chemistry.' },
            { tag: 'Harvesting', title: 'Energy harvesting', body: 'Small solar cells, vibration or thermal harvesters can supplement or replace batteries for very low-power devices.' },
          ],
        },
        { t: 'links', items: [{ path: 'networking/iot-foundations/build-a-sensor-node', note: 'Next: a build project' }, { path: 'networking/iot-connectivity/iot-short-range-radios', note: 'Radios and their power costs' }, { path: 'cybersecurity/attack-surface/iot-security', note: 'Securing devices at the hardware level' }] },
      ],
    },
  ],
  sources: [
    'Espressif Systems. ESP32 Series Datasheet; Nordic Semiconductor. nRF52 Series product specifications.',
    'Barr, M., and Massa, A. (2006). Programming Embedded Systems, 2nd edition. O’Reilly.',
    'NXP Semiconductors (2014). UM10204: I²C-bus specification and user manual.',
    'Zephyr Project and FreeRTOS documentation.',
    'Elecia White (2011). Making Embedded Systems. O’Reilly.',
  ],
  related: ['networking/iot-foundations/iot-architecture', 'networking/iot-foundations/build-a-sensor-node', 'cybersecurity/attack-surface/iot-security'],
}

export default guide
