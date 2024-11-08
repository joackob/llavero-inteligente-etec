import { Llaves } from "@prisma/client";
import { NextResponse } from "next/server";

export const responderAdecuadamenteALaSolicitud = (
  llave: Llaves,
): NextResponse => {
  return NextResponse.json(
    {
      mensaje: `¡La llave del espacio ${llave.espacio} fue correctamente solicitada!`,
    },
    { status: 200 },
  );
};
