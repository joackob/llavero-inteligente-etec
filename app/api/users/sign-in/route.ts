import { NextRequest, NextResponse } from "next/server";
import { intentarIniciarLaSesionDeUnUsuario } from "./controllers/intentar-iniciar-la-sesion-de-un-usuario";

export const POST = async (solicitud: NextRequest): Promise<NextResponse> =>
  await intentarIniciarLaSesionDeUnUsuario(solicitud);
