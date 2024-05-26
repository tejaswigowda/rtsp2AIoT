# rtsp2AIoT
Turn any rtsp stream into a websocket/webrtc stream. Run ML loads anywhere on the internet. Works on Raspberry Pi, Mac OS, Windows, Linux

<img src='paper/images/arch.png' width='500px'>

## Installation

```bash
git clone https://github.com/tejaswigowda/rtsp2AIoT
cd rtsp2AIoT
npm install

```

## Usage

### rtsp2WebSocket
```bash
node rtsp2WebSocket.js <rtsp-stream-url> <broadcast IP> <broadcast Port> \
    <internalPort>(optional; default=9999) <fps>(optional/ default = 30) \
    <size>(optional;default=1920x1080)
```

### aspenRoot.js
```bash

```

## Advantages

### Low power consumption on the edge

The platform is designed to be highly efficient, with support for running on low-power hardware, such as Raspberry Pi or microcontrollers. This allows the platform to be deployed in edge environments, where power consumption is a concern. The platform is designed to be lightweight, with minimal resource requirements, allowing it to run on a wide range of hardware platforms. The platform is designed to be energy-efficient, with support for running on battery-powered devices. The platform is designed to be cost-effective, with support for running on low-cost hardware. The platform is designed to be scalable, with support for running on a single device or a cluster of devices.

### Real-time video ML inference

### Scalable AIoT platform

### Modular and flexible

### Open-source and extensible

### Future-proof and reliable

## Contributing

Please use the [issue tracker](https://github.com/tejaswigowda/rtsp2AIoT/issues) to report any bugs or file feature requests. Feel free to fork the repository and submit a pull request for any changes you would like to contribute.