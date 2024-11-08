import db from "@/db";
import { Usuarios } from "@prisma/client";
import { RegistroNoEncontradoOInexistente } from "@/app/api/excepciones";

export const encontrarAUnUsuarioPorSuEmail = async (
  email: string,
): Promise<Usuarios> => {
  try {
    return await db.usuarios.findUniqueOrThrow({ where: { email } });
  } catch (error) {
    throw new RegistroNoEncontradoOInexistente("Usuario no registrado");
  }
};
