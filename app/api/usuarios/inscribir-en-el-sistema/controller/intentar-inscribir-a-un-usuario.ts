import { NextRequest, NextResponse } from "next/server";
import { tratarExcepcionesAlInscribirAUnUsuario } from "./tratar-excepciones-al-inscribir-a-un-usuario";
import { inscribirAUnUsuario } from "./inscribir-a-un-usuario";

export const intentarInscribirAUnUsuario = async (
  solicitud: NextRequest
): Promise<NextResponse> => {
  try {
    return await inscribirAUnUsuario(solicitud);
  } catch (excepcion) {
    return tratarExcepcionesAlInscribirAUnUsuario(excepcion);
  }
};
