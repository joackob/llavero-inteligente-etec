import { Usuario } from "@/app/api/types";
import { encriptarIDDeUsuario } from "./utils";

export type CredencialesParaLaSesionDeUnUsuario = {
  token: string;
};

export const crearCreadencialesParaSuSesion = async (
  user: Usuario
): Promise<CredencialesParaLaSesionDeUnUsuario> => {
  const token = await encriptarIDDeUsuario(user.id);
  return {
    token,
  };
};
