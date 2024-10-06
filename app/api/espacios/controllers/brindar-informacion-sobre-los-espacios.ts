import { NextResponse } from "next/server";
import { obtenerInformacionSobreQuienesOcupanLosEspacios } from "../repo";
import { responderAdecuadamanteALaConsulta } from "./responder-adecuadamante-a-la-consulta";

export const brindarInformacionSobreQuienesOcupanLosEspacios =
  async (): Promise<NextResponse> => {
    const espacios = await obtenerInformacionSobreQuienesOcupanLosEspacios();
    return responderAdecuadamanteALaConsulta(espacios);
  };
