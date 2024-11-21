// import db from "@/db";
import { PrismaClient } from "@prisma/client";

(async () => {
  try {
    const db = new PrismaClient();
    await db.$connect();
    try {
      await db.llaves.createMany({
        data: [
          {
            espacio: "aula 213",
            urls: "https://firebasestorage.googleapis.com/v0/b/angiediaz-df855.appspot.com/o/llavero-inteligente%2F20241004_165636.jpg?alt=media&token=a611e1f8-5580-426d-9233-b53357371ce0",
          },
          {
            espacio: "aula 214",
            urls: "https://firebasestorage.googleapis.com/v0/b/angiediaz-df855.appspot.com/o/llavero-inteligente%2F20241004_165710.jpg?alt=media&token=9516ab70-8b15-44c0-a861-dd7195d4024a",
          },
          {
            espacio: "aula 314",
            urls: "https://firebasestorage.googleapis.com/v0/b/angiediaz-df855.appspot.com/o/llavero-inteligente%2F20241004_165854.jpg?alt=media&token=6fad63ee-8bad-4e10-a934-2bfbbbd837a6",
          },
          {
            espacio: "aula 313",
            urls: "https://firebasestorage.googleapis.com/v0/b/angiediaz-df855.appspot.com/o/llavero-inteligente%2F20241004_165010.jpg?alt=media&token=1549dbf4-e5d4-4c24-97b2-9e58c0e97817",
          },
          {
            espacio: "aula 205",
            urls: "https://firebasestorage.googleapis.com/v0/b/angiediaz-df855.appspot.com/o/llavero-inteligente%2F20241004_165425.jpg?alt=media&token=a63fdc49-070d-4591-aebe-89adbdef219c",
          },
          {
            espacio: "aula 204",
            urls: "https://firebasestorage.googleapis.com/v0/b/angiediaz-df855.appspot.com/o/llavero-inteligente%2F20241004_165405.jpg?alt=media&token=ae1aa988-51b5-4b70-8fae-421652a45454",
          },
          {
            espacio: "aula 104",
            urls: "https://firebasestorage.googleapis.com/v0/b/angiediaz-df855.appspot.com/o/llavero-inteligente%2F20241004_165405.jpg?alt=media&token=ae1aa988-51b5-4b70-8fae-421652a45454",
          },
          {
            espacio: "aula 105",
            urls: "https://firebasestorage.googleapis.com/v0/b/angiediaz-df855.appspot.com/o/llavero-inteligente%2F20241004_165405.jpg?alt=media&token=ae1aa988-51b5-4b70-8fae-421652a45454",
          },
          {
            espacio: "aula 301",
            urls: "https://firebasestorage.googleapis.com/v0/b/angiediaz-df855.appspot.com/o/llavero-inteligente%2F20241004_165405.jpg?alt=media&token=ae1aa988-51b5-4b70-8fae-421652a45454",
          },
          {
            espacio: "aula 302",
            urls: "https://firebasestorage.googleapis.com/v0/b/angiediaz-df855.appspot.com/o/llavero-inteligente%2F20241004_165405.jpg?alt=media&token=ae1aa988-51b5-4b70-8fae-421652a45454",
          },
          {
            espacio: "aula 303",
            urls: "https://firebasestorage.googleapis.com/v0/b/angiediaz-df855.appspot.com/o/llavero-inteligente%2F20241004_165405.jpg?alt=media&token=ae1aa988-51b5-4b70-8fae-421652a45454",
          },
        ],
      });
      console.log("\nBase de datos inicializada\n");
    } catch (error) {
      console.error("\nError al conectar con la base de datos\n");
      console.error(error);
      /*
      if (error instanceof PrismaClient.PrismaClientKnownRequestError) {
        console.error(`\n${error.message}\n`);
      }
      if (error instanceof PrismaClient.PrismaClientUnknownRequestError) {
        console.error("\nhubo un error al inicializar la base de datos\n");
      }*/
    } finally {
      await db.$disconnect();
    }
  } catch (error) {
    console.error("\nError al conectar con la base de datos\n");
    console.error(error);
  }
})();
