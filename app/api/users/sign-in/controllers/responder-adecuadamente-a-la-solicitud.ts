import { CredencialesParaLaSesionDeUnUsuario } from "@/app/api/auth/crear-credenciales";
import { NextResponse } from "next/server";

export const redirigirConLasCredencialesCorrespondientes = (
  credenciales: CredencialesParaLaSesionDeUnUsuario
): NextResponse => {
  // const response = NextResponse.redirect("/", { status: 302 });
  const response = NextResponse.json(
    { mensaje: "Sesion iniciada" },
    { status: 302 }
  );
  response.cookies.set({
    name: "session",
    value: credenciales.token,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 1000 * 60 * 60 * 24 * 30,
    path: "/",
  });
  return response;
};
