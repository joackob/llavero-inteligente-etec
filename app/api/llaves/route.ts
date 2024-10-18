import mqtt from "mqtt";

const client = mqtt.connect("mqtt://10.9.121.240:1883");
client.on("connect", () => {
  client.subscribe("topic-prueba", (err) => {
    if (!err) {
      client.publish("presence", "Hello mqtt");
    }
  });
});

export const GET = async () => {
  client.publish("topic-prueba", "voy a entregar llaves");
  return Response.json({ mensaje: "voy a enviar llaves" }, { status: 200 });
};
