import db from "@/db";
import bcrypt from "bcrypt";
import { Prisma } from "@prisma/client";

export const initDB = async () => {
  try {
    await db.usuarios.create({
      data: {
        email: "docente@etec.uba.ar",
        password: await bcrypt.hash("passtesting", 10),
        nombre: "Docente",
        apellido: "Etec",
      },
    });
    await db.llaves.create({ data: { espacio: "213", ocupada: false } });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      console.log(error.message);
    }
  }
};

export const cleanDB = async () => {
  try {
    await db.usuarios.deleteMany();
    await db.llaves.deleteMany();
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      console.log(error.message);
    }
  }
};
