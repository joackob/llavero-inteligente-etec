import { Excepcion, tratarExcepciones } from "@/app/api/excepciones";
import { NextResponse } from "next/server";

export const tratarExcepcionesAlInscribirAUnUsuario = (
  excepcion: unknown
): NextResponse => tratarExcepciones(excepcion);
