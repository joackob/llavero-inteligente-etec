import { NextResponse } from "next/server";
import { intentarBrindarInformacionSobreQuienesOcupanLosEspacios } from "./controllers/intentar-brindar-informacion-sobre-quienes-ocupan-los-espacios";

export const GET = async (): Promise<NextResponse> =>
  await intentarBrindarInformacionSobreQuienesOcupanLosEspacios();
