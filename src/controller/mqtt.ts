import * as mqtt from "mqtt";
import * as mqttOption from "../secret/mqtt.json";
var config : mqtt.IClientOptions={
    host:mqttOption.host,
    port:mqttOption.port,
    protocol:"mqtt",
    username:mqttOption.username,
    password:mqttOption.password
};

const client = mqtt.connect(mqttOption.host,config);

client.on("connect", () => {});
export { client };
