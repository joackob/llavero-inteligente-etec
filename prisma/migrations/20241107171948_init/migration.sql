/*
  Warnings:

  - You are about to drop the column `ocupada` on the `Llaves` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Llaves" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "espacio" TEXT NOT NULL,
    "ocupado" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_Llaves" ("createdAt", "espacio", "id", "updatedAt") SELECT "createdAt", "espacio", "id", "updatedAt" FROM "Llaves";
DROP TABLE "Llaves";
ALTER TABLE "new_Llaves" RENAME TO "Llaves";
CREATE UNIQUE INDEX "Llaves_espacio_key" ON "Llaves"("espacio");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
