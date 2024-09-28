import { NextRequest, NextResponse } from "next/server";
import { brindarInformacionSobreQuienesOcupanLosEspacios } from "./controllers/brindar-informacion-sobre-los-espacios";
import { tratarErroresAlObtenerInformacionSobreLosEspacios } from "./controllers/tratar-errores-al-obtener-informacion-sobre-los-espacios";

export const GET = async (): Promise<NextResponse> => {
  try {
    return await brindarInformacionSobreQuienesOcupanLosEspacios();
  } catch (error) {
    return tratarErroresAlObtenerInformacionSobreLosEspacios(error);
  }
};
