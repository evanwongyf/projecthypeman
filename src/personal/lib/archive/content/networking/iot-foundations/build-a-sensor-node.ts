import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'The quickest way to understand IoT is to build one thing end to end. This project makes a small temperature and humidity node: a microcontroller reads a sensor, connects to Wi-Fi, publishes the readings over MQTT, sleeps to save power, and a dashboard shows the result. The steps are written for an ESP32 running MicroPython, though the ideas carry over to any platform. It also shows the places where a prototype becomes a product: reconnect logic, power budget, security and updates.',
  nutshell: [
    '**Goal**: read temperature and humidity every few minutes, publish to an **MQTT broker**, **deep sleep** between readings, and view the data on a dashboard.',
    '**Parts**: an ESP32 board, a DHT22 (or BME280) sensor, a USB cable and, optionally, a battery. About the price of a lunch.',
    '**Software**: MicroPython firmware, a small script, an MQTT broker (such as Mosquitto on a Raspberry Pi or a cloud service) and a dashboard tool.',
    'Use **TLS** and a **unique password** for the broker, and **do not hardcode secrets** you would not want exposed.',
    'Estimate **battery life** before building: with deep sleep and a 10-minute interval, months to years are possible.',
  ],
  sections: [
    {
      id: 'plan',
      title: 'Plan and parts',
      blocks: [
        {
          t: 'table',
          head: ['Item', 'Example', 'Notes'],
          rows: [
            ['Microcontroller board', 'ESP32 development board', 'Has Wi-Fi, USB programming, and deep sleep'],
            ['Sensor', 'DHT22 (temperature and humidity), or BME280 (adds pressure; I²C)', 'DHT22 is simple with a built-in MicroPython driver; the BME280 is more accurate'],
            ['Wires and breadboard', '3 jumper wires', 'DHT22 needs power, ground and one data pin (with a 4.7 to 10 kΩ pull-up if the module lacks one)'],
            ['Power', 'USB charger, or a LiPo battery with a protected charger board', 'Batteries need correct charging circuitry; never connect a bare LiPo directly'],
            ['Broker', 'Mosquitto on a Raspberry Pi, or a hosted MQTT service', 'Keep it on your network or secure it with TLS and authentication'],
            ['Dashboard', 'Node-RED, Grafana with a time-series database, or Home Assistant', 'Subscribes to the topic and graphs the values'],
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Define the topic first', text: 'Choose a clear topic scheme before writing code, such as home/livingroom/climate. A consistent structure (site, area, device, measurement) makes subscribing with wildcards easy. See the MQTT guide.' },
      ],
    },
    {
      id: 'wire',
      title: 'Wire it up',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Power off', body: 'Disconnect USB before wiring.' },
            { title: 'Connect the DHT22', body: 'Sensor VCC to the 3.3 V pin, GND to ground, and the data pin to GPIO 4 (any free GPIO works). If you use a bare 4-pin sensor, add a pull-up resistor of about 10 kΩ between the data pin and 3.3 V.' },
            { title: 'Flash MicroPython', body: 'Follow the MicroPython documentation for ESP32 to flash the firmware with esptool, then connect to the REPL with a serial terminal.' },
            { title: 'Test the sensor', body: 'In the REPL, create the sensor object and read it before writing the full script.' },
          ],
        },
      ],
    },
    {
      id: 'code',
      title: 'The code',
      blocks: [
        { t: 'p', text: 'Save the following as main.py on the board. It connects to Wi-Fi, reads the sensor, publishes JSON to an MQTT broker, then goes into deep sleep. The device resets on wake, so main.py runs from the top each time. If the umqtt module is missing, install it with the mip tool built into MicroPython.' },
        {
          t: 'code',
          lang: 'python',
          title: 'main.py: read, publish, sleep',
          code: `import network, time, machine, dht, ujson
from umqtt.simple import MQTTClient

WIFI_SSID = "your-network"
WIFI_PASS = "your-password"          # keep secrets out of public repos
BROKER = "192.168.1.50"              # your MQTT broker
TOPIC = b"home/livingroom/climate"
SLEEP_MS = 10 * 60 * 1000            # wake every 10 minutes

def connect_wifi(timeout_s=15):
    wlan = network.WLAN(network.STA_IF)
    wlan.active(True)
    if not wlan.isconnected():
        wlan.connect(WIFI_SSID, WIFI_PASS)
        t0 = time.time()
        while not wlan.isconnected():
            if time.time() - t0 > timeout_s:
                return False
            time.sleep(0.2)
    return True

def main():
    sensor = dht.DHT22(machine.Pin(4))
    if connect_wifi():
        try:
            sensor.measure()
            payload = ujson.dumps({
                "t": sensor.temperature(),   # degrees Celsius
                "h": sensor.humidity(),      # per cent relative humidity
            })
            client = MQTTClient("esp32-livingroom", BROKER, keepalive=30)
            client.connect()
            client.publish(TOPIC, payload, retain=True, qos=0)
            client.disconnect()
        except Exception as e:
            print("failed:", e)            # a real device would log and back off
    machine.deepsleep(SLEEP_MS)          # radio off, microamps of current

main()`,
          caption: 'A minimal sketch. For a product you would add TLS, a unique client ID per device, retries with back-off, a watchdog and battery-voltage reporting.',
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Reliability', title: 'Handle failure', body: 'If Wi-Fi or the broker is down, do not retry in a tight loop: it drains the battery. Sleep and try again next cycle, perhaps with longer intervals after repeated failures.' },
            { tag: 'Retained', title: 'Retain the last value', body: 'Publishing with retain=True means a new dashboard subscriber immediately gets the last reading.' },
            { tag: 'QoS', title: 'QoS 0 or 1', body: 'QoS 0 is fire-and-forget; QoS 1 gets an acknowledgement. For periodic readings, QoS 0 is usually enough.' },
            { tag: 'Units', title: 'Be explicit about units', body: 'Include units or document them. A reading of 25 means little without “°C”.' },
          ],
        },
      ],
    },
    {
      id: 'dash',
      title: 'See the data',
      blocks: [
        {
          t: 'steps',
          items: [
            { title: 'Run a broker', body: 'Install Mosquitto on a Raspberry Pi or computer. Create a user and password and keep it on your local network or enable TLS.' },
            { title: 'Check with a client', body: 'Use mosquitto_sub to subscribe to home/# and watch the messages arrive.' },
            { title: 'Add a dashboard', body: 'In Node-RED, add an MQTT input node and a chart node. In Grafana, store the readings in a time-series database such as InfluxDB or Prometheus.' },
            { title: 'Alert on conditions', body: 'Send a message if the humidity stays above 70 per cent for an hour, or if no reading arrives for 30 minutes (the device may be offline).' },
          ],
        },
        {
          t: 'code',
          lang: 'bash',
          title: 'Watch messages on a laptop',
          code: `# Subscribe to everything under "home" and print topics with messages
mosquitto_sub -h 192.168.1.50 -u myuser -P mypassword -t "home/#" -v`,
        },
      ],
    },
    {
      id: 'budget',
      title: 'From prototype to product',
      blocks: [
        {
          t: 'table',
          head: ['Question', 'What to do'],
          rows: [
            ['How long will the battery last?', 'Measure the real sleep and active currents, then use the battery lab. Wi-Fi connection time (a few seconds) often dominates; static IP and fast connect settings help'],
            ['How is the device secured?', 'Unique credentials per device, TLS to the broker, no open ports, disabled debug interfaces, and a signed update mechanism'],
            ['How will it be updated?', 'Plan over-the-air updates with rollback. See the device management guide'],
            ['What if the broker is down?', 'Buffer readings in flash or RTC memory and send later, or accept occasional loss'],
            ['Is it legal and safe?', 'Use certified radio modules, a safe power supply and, for mains, qualified design'],
            ['How do you monitor many of them?', 'Add a heartbeat topic, battery voltage and signal strength to each message'],
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Do not expose your broker to the Internet unprotected', text: 'Open MQTT brokers with no authentication are found and abused quickly by scanners. If you need remote access, use TLS, strong per-device credentials, access control lists and ideally a VPN or a managed cloud service.' },
        { t: 'links', items: [{ path: 'networking/iot-connectivity/iot-application-protocols', note: 'MQTT in depth, with a topic lab' }, { path: 'networking/iot-foundations/iot-device-hardware', note: 'Power budget maths' }, { path: 'networking/iot-operations/device-management-and-updates', note: 'Managing and updating devices' }] },
      ],
    },
  ],
  sources: [
    'MicroPython documentation: Quick reference for the ESP32; the network, machine and dht modules.',
    'Eclipse Mosquitto documentation; OASIS (2019). MQTT Version 5.0.',
    'Aosong. DHT22 (AM2302) datasheet; Bosch Sensortec. BME280 datasheet.',
    'Espressif Systems. ESP32 deep-sleep power consumption guidelines.',
  ],
  related: ['networking/iot-foundations/iot-device-hardware', 'networking/iot-connectivity/iot-application-protocols', 'networking/iot-operations/device-management-and-updates'],
}

export default guide
