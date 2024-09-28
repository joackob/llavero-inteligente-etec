import { NextResponse } from "next/server";

export const tratarErroresAlObtenerInformacionSobreLosEspacios = async (
  error: unknown
): Promise<NextResponse> => {
  return responderLamentandoUnErrorDesconocido();
};

const responderLamentandoUnErrorDesconocido = (): NextResponse => {
  return NextResponse.json(
    { error: "Lamentablemente se desconoce el origen del error" },
    { status: 500 }
  );
};
