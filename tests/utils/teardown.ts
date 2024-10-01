import db from "@/db";
import { Prisma } from "@prisma/client";
import exp from "constants";

export const limpiarBaseDeDatos = async () => {
  try {
    const deleteUsuarios = db.usuarios.deleteMany();
    const deleteLlaves = db.llaves.deleteMany();
    await db.$transaction([deleteLlaves, deleteUsuarios]);
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      console.log(error.message);
    }
  }
};

export default limpiarBaseDeDatos;
