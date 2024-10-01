import { CredencialesParaLaSesionDeUnUsuario } from "@/app/api/auth/crear-credenciales";
import { NextResponse } from "next/server";

export const redirigirConLasCredencialesCorrespondientes = (
  result: CredencialesParaLaSesionDeUnUsuario
): NextResponse => {
  // const response = NextResponse.redirect("/");
  const response = NextResponse.json(
    { mensaje: "Sesion iniciada" },
    { status: 202 }
  );
  response.cookies.set({
    name: "session",
    value: result.token,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 1000 * 60 * 60 * 24 * 30,
    path: "/",
  });
  return response;
};
