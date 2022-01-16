import { Request, Response } from "express";
import * as wol from "./wol";
import * as switchbot from "./switchbot";
import { client } from "./mqtt";

const cDone = function (_: Request, res: Response) {
  res.sendStatus(200);
};

const cSwitch = function (req: Request, res: Response) {
  let id = req.params.id;
  let command = req.params.command;
  switch (command) {
    case "ON":
      client.publish(`iot/switch/${id}`,"ON");
      break;
    case "OFF":
      client.publish(`iot/switch/${id}`,"OFF");
      break;
    case "TOGGLE":
      client.publish(`iot/switch/${id}`,"TOGGLE");
      break;
  }
  res.redirect("/done");
};

const cSwitchbot = function (req: Request, res: Response) {
  let id = req.params.id;
  let command = req.params.command;
  switch (command) {
    case "ON":
      switchbot.command(id, true);
      break;
    case "OFF":
      switchbot.command(id, false);
      break;
    case "TOGGLE":
      switchbot.toggle(id);
      break;
  }
  res.redirect("/done");
};

const cComputer = function (req: Request, res: Response) {
  let id = req.params.id;
  wol.boot(id);
  res.redirect("/done");
};
export { cDone, cSwitch, cSwitchbot, cComputer };
