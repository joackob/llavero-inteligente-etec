import { NextRequest, NextResponse } from "next/server";
import { autorizar } from "@/app/api/auth/autorizar";  // Importa la función de autorización
import { obtenerSolicitudValidada } from "../parser";
import { obtenerLlaveSiEstanDisponibles } from "../repo";
import { solicitarLlavesALaMaquinaExpendedora } from "../socket";
import { responderAdecuadamenteALaSolicitud } from "./responder-adecuadamente-a-la-solicitud";

export const solicitarLlaves = async (
  solicitud: NextRequest,
): Promise<NextResponse> => {
  const autorizacion = await autorizar(solicitud);
  if (autorizacion.status === 302) {
    return NextResponse.json(
      { error: "No has iniciado sesión. No puedes solicitar la llave." },
      { status: 401 }
    );
  }

  // Si la sesión está activa, continuamos con la solicitud de la llave
  const solicitudValidada = obtenerSolicitudValidada(await solicitud.json());
  const llave = await obtenerLlaveSiEstanDisponibles(solicitudValidada);
  solicitarLlavesALaMaquinaExpendedora(llave);
  return responderAdecuadamenteALaSolicitud(llave);
};
