import mqtt from "mqtt";
import { NextRequest } from "next/server";

const client = mqtt.connect("mqtt://10.9.120.49:1883");

client.on("connect", () => {
  client.subscribe("topic-prueba", (err) => {
    if (!err) {
      //puedo poner lo q sucede cuando no hubo error en la conexion
      //client.publish("presence", "Hello mqtt");
    }
  });
});

export const POST = async (req: NextRequest) => {
  try {
    const { aula } = await req.json();
    
    // Verifica que aula sea un valor válido
    if (!aula) {
      return Response.json({ error: "Aula no especificada" }, { status: 400 });
    }

    client.publish("topic-prueba", `${aula}`);
    return Response.json({ mensaje: `Solicitud enviada para el aula: ${aula}` }, { status: 200 });
  } catch (error) {
    console.error('Error al procesar la solicitud:', error);
    return Response.json({ error: "Error interno del servidor" }, { status: 500 });
  }
};


