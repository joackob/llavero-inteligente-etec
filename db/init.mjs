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
            urls: "https://firebasestorage.googleapis.com/v0/b/angiediaz-df855.appspot.com/o/llavero-inteligente%2F20241004_165405.jpg?alt=media&token=ae1aa988-51b5-4b70-8fae-421652a45454",
          },
          {
            espacio: "aula 214",
            urls: "https://firebasestorage.googleapis.com/v0/b/angiediaz-df855.appspot.com/o/llavero-inteligente%2F20241004_165405.jpg?alt=media&token=ae1aa988-51b5-4b70-8fae-421652a45454",
          },
          {
            espacio: "aula 314",
            urls: "https://firebasestorage.googleapis.com/v0/b/angiediaz-df855.appspot.com/o/llavero-inteligente%2F20241004_165405.jpg?alt=media&token=ae1aa988-51b5-4b70-8fae-421652a45454",
          },
          {
            espacio: "aula 313",
            urls: "https://firebasestorage.googleapis.com/v0/b/angiediaz-df855.appspot.com/o/llavero-inteligente%2F20241004_165405.jpg?alt=media&token=ae1aa988-51b5-4b70-8fae-421652a45454",
          },
          {
            espacio: "aula 205",
            urls: "https://firebasestorage.googleapis.com/v0/b/angiediaz-df855.appspot.com/o/llavero-inteligente%2F20241004_165405.jpg?alt=media&token=ae1aa988-51b5-4b70-8fae-421652a45454",
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
