import { NextResponse } from "next/server";
import {
  obtenerInformacionSobreQuienesOcupanLosEspacios,
  InformacionDeLosEspaciosYSuUltimoOcupante,
} from "../repo";

export const brindarInformacionSobreQuienesOcupanLosEspacios =
  async (): Promise<NextResponse> => {
    const espacios = await obtenerInformacionSobreQuienesOcupanLosEspacios();
    return responderAdecuadamanteALaConsulta(espacios);
  };

const responderAdecuadamanteALaConsulta = (
  espacios: InformacionDeLosEspaciosYSuUltimoOcupante
): NextResponse => {
  return NextResponse.json({ espacios }, { status: 200 });
};
