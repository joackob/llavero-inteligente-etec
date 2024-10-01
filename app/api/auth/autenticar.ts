import bcrypt from "bcrypt";
import { Usuarios } from "@prisma/client";
import {
  ServicioInhabilitado,
  SolicitudSinCredencialesCorrespondientes,
} from "@/app/api/errors";
import { DatosNecesariosParaIniciarLaSesionDeUnUsuario } from "../users/sign-in/parser";
import { encontrarAUnUsuarioPorSuEmail } from "./repo/encontrar-un-usuario-por-su-email";

export const autenticarLosDatosDeUnUsuario = async (
  datos: DatosNecesariosParaIniciarLaSesionDeUnUsuario
): Promise<Usuarios> => {
  const usuario = await encontrarAUnUsuarioPorSuEmail(datos.email);
  await chequearContrasenas({
    contrasenaDeLaSolicitud: datos.password,
    contrasenaDelUsuario: usuario.password,
  });
  return usuario;
};

const chequearContrasenas = async ({
  contrasenaDelUsuario,
  contrasenaDeLaSolicitud,
}: {
  contrasenaDelUsuario: string;
  contrasenaDeLaSolicitud: string;
}): Promise<void> => {
  try {
    const lasContrasenasCoinciden = await bcrypt.compare(
      contrasenaDeLaSolicitud,
      contrasenaDelUsuario
    );
    if (!lasContrasenasCoinciden) {
      throw new SolicitudSinCredencialesCorrespondientes(
        "Usuario o contraseña incorrectos"
      );
    }
  } catch (error) {
    throw new ServicioInhabilitado(
      "El servicio para el chequeo de la password no se encuentra disponible"
    );
  }
};
