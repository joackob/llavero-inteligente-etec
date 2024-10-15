import db from "@/db";

(async () => {
  try {
    await db.llaves.deleteMany();
  } finally {
    await db.$disconnect();
  }
})();
