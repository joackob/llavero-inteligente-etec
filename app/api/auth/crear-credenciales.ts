import { Usuarios } from "@prisma/client";
import { encriptarIDDeUsuario } from "./utils";

export type CredencialesParaLaSesionDeUnUsuario = {
  token: string;
};

export const crearCreadencialesParaSuSesion = async (
  user: Usuarios,
): Promise<CredencialesParaLaSesionDeUnUsuario> => {
  const token = await encriptarIDDeUsuario(user.id);
  return {
    token,
  };
};
