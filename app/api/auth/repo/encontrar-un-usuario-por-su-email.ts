import db from "@/db";
import { Usuarios } from "@prisma/client";
import { UsuarioNoRegistrado } from "@/app/api/errors";

export const encontrarAUnUsuarioPorSuEmail = async (
  email: string
): Promise<Usuarios> => {
  try {
    return await db.usuarios.findUniqueOrThrow({ where: { email } });
  } catch (error) {
    throw new UsuarioNoRegistrado("Usuario no registrado");
  }
};
