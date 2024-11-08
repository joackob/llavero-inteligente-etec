import { NextRequest, NextResponse } from "next/server";
import { intentarSolicitarLlaves } from "./controllers/intentar-solicitar-llaves";

export const POST = async (solicitud: NextRequest): Promise<NextResponse> => {
  return await intentarSolicitarLlaves(solicitud);
};
