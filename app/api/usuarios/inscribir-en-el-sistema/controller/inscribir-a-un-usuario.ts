import { NextRequest, NextResponse } from "next/server";
import { validarLosDatosDeLaSolicitud } from "../parser";
import { guardarDatosDelUsuario } from "../repo";
import { responderAdecuadamenteALaSolicitud } from "./responder-adecuadamente-a-la-solicitud";

export const inscribirAUnUsuario = async (
  solicitud: NextRequest,
): Promise<NextResponse> => {
  const datos = validarLosDatosDeLaSolicitud(await solicitud.json());
  const usuario = await guardarDatosDelUsuario(datos);
  return responderAdecuadamenteALaSolicitud(usuario);
};
