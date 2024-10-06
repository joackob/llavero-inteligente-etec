import { Usuarios } from "@prisma/client";
import { NextResponse } from "next/server";

export const responderAdecuadamenteALaSolicitud = (
  usuario: Usuarios,
): NextResponse => {
  return NextResponse.json(
    { mensaje: `¡Bienvenide, ${usuario.nombre}!` },
    { status: 201 },
  );
};
