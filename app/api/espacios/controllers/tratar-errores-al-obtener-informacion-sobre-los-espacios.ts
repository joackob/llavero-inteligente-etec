import { NextResponse } from "next/server";
import { tratarExcepciones } from "../../excepciones";

export const tratarErroresAlObtenerInformacionSobreLosEspacios = async (
  excepcion: unknown
): Promise<NextResponse> => tratarExcepciones(excepcion);
