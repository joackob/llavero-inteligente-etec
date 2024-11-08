import mqtt from "mqtt";

const mqttClientSingleton = () => {
  return mqtt.connect("mqtt://10.9.120.49:1883");
};

declare const globalThis: {
  mqttGlobal: ReturnType<typeof mqttClientSingleton>;
} & typeof global;

const socketMqtt = globalThis.mqttGlobal ?? mqttClientSingleton();

export default socketMqtt;

if (process.env.NODE_ENV !== "production") globalThis.mqttGlobal = socketMqtt;
