import { Usuario } from "@/app/api/types";
import { NextResponse } from "next/server";

export const responderAdecuadamenteALaSolicitud = (
  usuario: Usuario
): NextResponse => {
  return NextResponse.json(
    { mensaje: `¡Bienvenide, ${usuario.nombre}!` },
    { status: 201 }
  );
};
