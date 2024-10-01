import { NextRequest, NextResponse } from "next/server";
import { tratarExcepcionesAlIniciarLaSesionDeUnUsuario } from "./tratar-excepciones-al-iniciar-la-sesion-de-un-usuario";
import { iniciarLaSesionDeUnUsuario } from "./iniciar-la-sesion-de-un-usuario";

export const intentarIniciarLaSesionDeUnUsuario = async (
  solicitud: NextRequest
): Promise<NextResponse> => {
  try {
    return await iniciarLaSesionDeUnUsuario(solicitud);
  } catch (excepcion) {
    return tratarExcepcionesAlIniciarLaSesionDeUnUsuario(excepcion);
  }
};
