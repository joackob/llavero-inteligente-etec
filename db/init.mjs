// import db from "@/db";
import { PrismaClient } from "@prisma/client";

(async () => {
  const db = new PrismaClient();
  await db.$connect();
  try {
    await db.llaves.createMany({
      data: [
        { espacio: "aula 213" },
        { espacio: "aula 214" },
        { espacio: "aula 314" },
        { espacio: "aula 313" },
        { espacio: "aula 205" },
        { espacio: "aula 204" },
        { espacio: "aula 104" },
        { espacio: "aula 105" },
        { espacio: "aula 301" },
        { espacio: "aula 302" },
        { espacio: "aula 303" },
      ],
    });
    console.log("Base de datos inicializada");
  } catch (error) {
    console.log("hubo un error al inicializar la base de datos");
  } finally {
    await db.$disconnect();
  }
})();
