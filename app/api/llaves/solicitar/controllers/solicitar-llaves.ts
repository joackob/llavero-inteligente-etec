import { NextRequest, NextResponse } from "next/server";
import { obtenerSolicitudValidada } from "../parser";
import { obtenerLlaveSiEstanDisponibles } from "../repo";
import { solicitarLlavesALaMaquinaExpendedora } from "../socket";
import { responderAdecuadamenteALaSolicitud } from "./responder-adecuadamente-a-la-solicitud";
import db from "@/db";

// Función para marcar la llave como ocupada en la base de datos
const marcarLlaveComoOcupada = async (llaveId: string) => {
  try {
    // Asegúrate de que la llave no esté ya ocupada antes de actualizarla
    const llave = await db.llaves.findUnique({
      where: { id: llaveId },
    });

    if (llave && !llave.ocupado) {
      // Actualiza el estado de la llave como ocupada solo si no está ocupada
      const llaveActualizada = await db.llaves.update({
        where: { id: llaveId },
        data: { ocupado: true },
      });
      console.log(`Llave con ID ${llaveId} marcada como ocupada`);
    } else {
      console.log(`La llave con ID ${llaveId} ya está ocupada o no existe.`);
    }
  } catch (error) {
    console.error("Error al marcar la llave como ocupada:", error);
  }
};

export const solicitarLlaves = async (
  solicitud: NextRequest,
): Promise<NextResponse> => {
  // Validamos la solicitud de la llave
  const solicitudValidada = obtenerSolicitudValidada(await solicitud.json());
  
  // Obtener la llave solicitada y verificar si está disponible
  const llave = await obtenerLlaveSiEstanDisponibles(solicitudValidada);

  if (!llave) {
    // Si la llave no está disponible, respondemos con un error
    return NextResponse.json(
      { error: "La llave solicitada no está disponible." },
      { status: 400 }
    );
  }

  // Marcar la llave como ocupada en la base de datos
  await marcarLlaveComoOcupada(llave.id);

  // Solicitar la llave a la máquina expendedora
  solicitarLlavesALaMaquinaExpendedora(llave);

  // Responder adecuadamente a la solicitud
  return responderAdecuadamenteALaSolicitud(llave);
};
