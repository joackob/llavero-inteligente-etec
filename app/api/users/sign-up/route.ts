import { NextRequest, NextResponse } from "next/server";
import { intentarInscribirAUnUsuario } from "./controller/intentar-inscribir-a-un-usuario";

export const POST = async (solicitud: NextRequest): Promise<NextResponse> =>
  await intentarInscribirAUnUsuario(solicitud);
