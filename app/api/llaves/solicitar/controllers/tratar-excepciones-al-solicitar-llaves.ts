import { tratarExcepciones } from "@/app/api/excepciones";
import { NextResponse } from "next/server";

export const tratarExcepcionesAlSolicitarLlaves = (
  excepcion: unknown,
): NextResponse => tratarExcepciones(excepcion);
