import axios, { AxiosRequestConfig } from "axios";
import switchbotOption from "../secret/switchbot.json";

const toggle = function (switchbotId: string) {
  let config: AxiosRequestConfig = {
    method: "get",
    url: "https://api.switch-bot.com/v1.0/devices/" + switchbotId + "/status",
    headers: {
      Authorization: switchbotOption.authorization,
    },
  };

  axios(config)
    .then((response) => {
      let json = response.data;
      let onOff = json.body.power == "on";
      command(switchbotId, !onOff);
    })
    .catch((error) => {
      console.log(error);
    });
};

const command = function (switchbotId: string, onOff: boolean) {
  var data = JSON.stringify({
    command: onOff ? "turnOn" : "turnOff",
    parameter: "default",
    commandType: "command",
  });
  var config: AxiosRequestConfig = {
    method: "POST",
    url: "https://api.switch-bot.com/v1.0/devices/" + switchbotId + "/commands",
    headers: {
      Authorization: switchbotOption.authorization,
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
};
export { command, toggle };
