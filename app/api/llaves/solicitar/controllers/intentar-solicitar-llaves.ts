import { NextRequest, NextResponse } from "next/server";
import { solicitarLlaves } from "./solicitar-llaves";
import { tratarExcepcionesAlSolicitarLlaves } from "./tratar-excepciones-al-solicitar-llaves";

export const intentarSolicitarLlaves = async (
  solicitud: NextRequest,
): Promise<NextResponse> => {
  try {
    return await solicitarLlaves(solicitud);
  } catch (error) {
    return tratarExcepcionesAlSolicitarLlaves(error);
  }
};
