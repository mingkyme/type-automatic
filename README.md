# Type-Automatic

## 개발 목적

집 안에 있는 IoT 기기들을 다양한 방법으로 활용하기 위해서 개발됐습니다.

## Device 별 통신 방법

- Switchbot
  - Bluetooth LE
  - API (Switchbot Hub 이용)
- ESP32
  - Wi-Fi
  - Bluetooth
- Computer
  - Wake On Lan

## Protocols

- MQTT
- Wake On Lan
- HTTP
- Bluetooth

## Flow

- Apple Shortcut
  - 컨텐츠 가져오기를 활용하여 URL GET 요청을 보내고, 이에 맞춰 행동한다.
- Clova
  - Clova Home Extension을 만들어서 관리한다.
- Apple HomeKit
  - HAP-nodeJS 를 활용하여 제어한다.
- HTTP 접속
  - URL 접속을 통해 제어한다.