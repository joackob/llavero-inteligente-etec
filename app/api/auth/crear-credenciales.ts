import { Usuario } from "@/app/api/types";
import { encriptarIDDeUsuario } from "./utils";

type SessionResult = {
  token: string;
};

export const crearCreadenciales = async (
  user: Usuario
): Promise<SessionResult> => {
  const token = await encriptarIDDeUsuario(user.id);
  return {
    token,
  };
};
