import db from "@/db";
import { Prisma } from "@prisma/client";

export const limpiarBaseDeDatos = async () => {
  try {
    await db.usuarios.deleteMany();
    await db.llaves.deleteMany();
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      console.log(error.message);
    }
    if (error instanceof Prisma.PrismaClientUnknownRequestError) {
      console.log(error.message);
    }
  }
};

export default limpiarBaseDeDatos;
