import db from "@/db";
import bcrypt from "bcrypt";
import { Prisma } from "@prisma/client";
import limpiarBaseDeDatos from "./global.teardown";

export const inicializarBaseDeDatos = async () => {
  try {
    await db.llaves.create({ data: { espacio: "213", ocupada: false } });
    await db.usuarios.create({
      data: {
        email: "docente@etec.uba.ar",
        password: await bcrypt.hash("passtesting", 10),
        nombre: "Docente",
        apellido: "Etec",
      },
    });
    return limpiarBaseDeDatos;
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      console.log(error.message);
    }

    return limpiarBaseDeDatos;
  }
};

export default inicializarBaseDeDatos;