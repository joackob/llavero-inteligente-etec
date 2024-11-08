import db from "@/db";
import { Llaves } from "@prisma/client";
import { DatosNecesariosParaSolicitarLlaves } from "../parser";
import {
  EspacioOcupado,
  RegistroNoEncontradoOInexistente,
} from "@/app/api/excepciones";

export const obtenerLlaveSiEstanDisponibles = async (
  solicitud: DatosNecesariosParaSolicitarLlaves,
): Promise<Llaves> => {
  const llave = await obtenerLlaves(solicitud.aula);
  if (llave.ocupado) {
    throw new EspacioOcupado(
      `El espcios ${llave.espacio} se encuentra ocupado`,
    );
  }
  return llave;
};

const obtenerLlaves = async (espacio: string): Promise<Llaves> => {
  try {
    return db.llaves.findUniqueOrThrow({ where: { espacio } });
  } catch (error) {
    throw new RegistroNoEncontradoOInexistente(
      "El espacio solicitado no pertenece al conjunto registrado actualmente",
    );
  }
};
