import { NextRequest, NextResponse } from "next/server";
import { desencriptarIDDeUsuario } from "./utils";
import { UnauthorizedError } from "../errors";
import db from "@/db";

export const autorizar = async (
  consulta: NextRequest
): Promise<NextResponse> => {
  try {
    return siLasCredencialesSonValidasPermitirContinuar(consulta);
  } catch (error) {
    return solicitarCredenciales();
  }
};

export const siLasCredencialesSonValidasPermitirContinuar = async (
  consulta: NextRequest
): Promise<NextResponse> => {
  const credenciales = await obtenerCredencialesDeSeguridad(consulta);
  if (await existeUnUsuarioConEstasCredenciales(credenciales)) {
    return permitirContinuar();
  }
  return solicitarCredenciales();
};

export const obtenerCredencialesDeSeguridad = async (
  consulta: NextRequest
): Promise<string> => {
  const token = obtenerTokenDeSesion(consulta);
  const credenciales = await desencriptarIDDeUsuario(token);
  return credenciales;
};

export const existeUnUsuarioConEstasCredenciales = async (
  credenciales: string
): Promise<boolean> => {
  try {
    const usuario = await db.usuarios.findUniqueOrThrow({
      where: { id: credenciales },
    });
    return usuario.activo;
  } catch (error) {
    return false;
  }
};

const permitirContinuar = (): NextResponse => {
  return NextResponse.next();
};

const solicitarCredenciales = (): NextResponse => {
  return NextResponse.redirect("/users/sign-in");
};

const obtenerTokenDeSesion = (req: NextRequest): string => {
  const cookie = req.cookies.get("session");
  if (!cookie) {
    throw new UnauthorizedError("No se ha iniciado sesión");
  }
  const token = cookie.value;
  if (!token) {
    throw new UnauthorizedError("No se ha iniciado sesión");
  }
  return token;
};
