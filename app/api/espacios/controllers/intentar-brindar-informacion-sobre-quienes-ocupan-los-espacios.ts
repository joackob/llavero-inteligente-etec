import { NextResponse } from "next/server";
import { brindarInformacionSobreQuienesOcupanLosEspacios } from "./brindar-informacion-sobre-los-espacios";
import { tratarErroresAlObtenerInformacionSobreLosEspacios } from "./tratar-errores-al-obtener-informacion-sobre-los-espacios";

export const intentarBrindarInformacionSobreQuienesOcupanLosEspacios =
  async (): Promise<NextResponse> => {
    try {
      return await brindarInformacionSobreQuienesOcupanLosEspacios();
    } catch (error) {
      return tratarErroresAlObtenerInformacionSobreLosEspacios(error);
    }
  };
