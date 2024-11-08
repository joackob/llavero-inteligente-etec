import { NextRequest, NextResponse } from "next/server";
import { obtenerSolicitudValidada } from "../parser";
import { obtenerLlaveSiEstanDisponibles } from "../repo";
import { solicitarLlavesALaMaquinaExpendedora } from "../socket";
import { responderAdecuadamenteALaSolicitud } from "./responder-adecuadamente-a-la-solicitud";

export const solicitarLlaves = async (
  solicitud: NextRequest,
): Promise<NextResponse> => {
  const solicitudValidada = obtenerSolicitudValidada(await solicitud.json());
  const llave = await obtenerLlaveSiEstanDisponibles(solicitudValidada);
  solicitarLlavesALaMaquinaExpendedora(llave);
  return responderAdecuadamenteALaSolicitud(llave);
};
