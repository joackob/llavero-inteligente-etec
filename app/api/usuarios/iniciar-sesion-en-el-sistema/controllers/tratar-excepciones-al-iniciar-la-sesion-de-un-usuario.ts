import { Excepcion } from "@/app/api/excepciones";
import { NextResponse } from "next/server";

export const tratarExcepcionesAlIniciarLaSesionDeUnUsuario = (
  excepcion: unknown
): NextResponse => {
  try {
    return (excepcion as Excepcion).brindarUnaRespuestaAdecuada();
  } catch {
    const excepcionDesconocida = new Excepcion({
      codigoHttp: 500,
      mensaje: "Algo inesperado ocurrio con el servicio",
    });
    return excepcionDesconocida.brindarUnaRespuestaAdecuada();
  }
};
