import { NextResponse } from "next/server";
import { InformacionDeLosEspaciosYSuUltimoOcupante } from "../repo";

export const responderAdecuadamanteALaConsulta = (
  espacios: InformacionDeLosEspaciosYSuUltimoOcupante
): NextResponse => {
  return NextResponse.json({ espacios }, { status: 200 });
};
