import { Llaves } from "@prisma/client";
import mqtt from "@/mqtt";
import { ServicioInhabilitado } from "@/app/api/excepciones";

export const solicitarLlavesALaMaquinaExpendedora = (llave: Llaves): void => {
  mqtt.publish("topic_prueba", `${llave.espacio}`, (error) => {
    if (error) {
      throw new ServicioInhabilitado(
        "No se pudo enviar la solicitud de llave a la maquina expendedora",
      );
    }
  });
};
