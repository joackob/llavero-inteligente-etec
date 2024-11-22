import { NextRequest, NextResponse } from "next/server";
import { obtenerSolicitudValidada } from "../parser";
import { obtenerLlaveSiEstanDisponibles } from "../repo";
import { reservarLlave } from "./reservar-llave";
import { responderAdecuadamenteALaSolicitud } from "./responder-adecuadamente-a-la-solicitud";

export const solicitarLlaves = async (
  solicitud: NextRequest,
): Promise<NextResponse> => {
  const solicitudValidada = obtenerSolicitudValidada(await solicitud.json());
  const llave = await obtenerLlaveSiEstanDisponibles(solicitudValidada);
  reservarLlave(llave);
  return responderAdecuadamenteALaSolicitud(llave);
};
