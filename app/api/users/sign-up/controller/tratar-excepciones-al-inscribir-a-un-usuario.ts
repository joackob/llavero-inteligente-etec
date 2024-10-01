import { Excepcion } from "@/app/api/errors";
import { NextResponse } from "next/server";

export const tratarExcepcionesAlInscribirAUnUsuario = (
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
