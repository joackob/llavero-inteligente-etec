import { PrismaClient } from "@prisma/client";

(async () => {
  const db = new PrismaClient();
  await db.$connect();
  try {
    await db.llaves.deleteMany();
    console.log("\nBase de datos borrada\n");
  } catch (error) {
    if (error instanceof PrismaClient.PrismaClientKnownRequestError) {
      console.error(`\n${error.message}\n`);
    }
    if (error instanceof PrismaClient.PrismaClientUnknownRequestError) {
      console.error("\nhubo un error al inicializar la base de datos\n");
    }
  } finally {
    await db.$disconnect();
  }
})();
