import * as mqtt from "mqtt";
import * as mqttOption from "../secret/mqtt.json";

const client = mqtt.connect(mqttOption);

client.on("connect", () => {});
export { client };
