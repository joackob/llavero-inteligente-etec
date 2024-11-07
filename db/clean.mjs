import { PriismaClient } from "@prisma/client";

(async () => {
  const db = new PriismaClient();
  await db.$connect();
  try {
    await db.llaves.deleteMany();
  } finally {
    await db.$disconnect();
  }
})();
