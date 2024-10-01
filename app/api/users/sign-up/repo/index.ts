import db from "@/db";
import bcrypt from "bcrypt";
import { Prisma, Usuarios } from "@prisma/client";
import {
  BaseDeDatosNoCumplioConLaTareaSolicitada,
  ErrorDesconocidoDelServidor,
  ServicioInhabilitado,
} from "@/app/api/errors";
import { DatosNecesariosParaInscribirAUnUsuario } from "../parser";

export const guardarDatosDelUsuario = async (
  datos: DatosNecesariosParaInscribirAUnUsuario
): Promise<Usuarios> => {
  const password = await encriptarContrasena(datos.password);
  return await guardarDatos({
    nombre: datos.nombre,
    apellido: datos.apellido,
    email: datos.email,
    password: password,
  });
};

const encriptarContrasena = async (contrasena: string): Promise<string> => {
  try {
    return await bcrypt.hash(contrasena, 10);
  } catch (error) {
    throw new ServicioInhabilitado("Error al encriptar la contraseña");
  }
};

const guardarDatos = async (datos: {
  nombre: string;
  apellido: string;
  email: string;
  password: string;
}): Promise<Usuarios> => {
  try {
    return await db.usuarios.create({
      data: datos,
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      switch (error.code) {
        case "P2002":
          throw new BaseDeDatosNoCumplioConLaTareaSolicitada(
            "El email ya está en uso"
          );
        default:
          throw new ErrorDesconocidoDelServidor(error.message);
      }
    }
    if (error instanceof Prisma.PrismaClientUnknownRequestError) {
      throw new ErrorDesconocidoDelServidor(error.message);
    }

    throw new ErrorDesconocidoDelServidor("Error desconocido");
  }
};
