/*
  Warnings:

  - You are about to drop the column `lastname` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Users` table. All the data in the column will be lost.
  - Added the required column `apellido` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nombre` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT true
);
INSERT INTO "new_Users" ("activo", "createdAt", "email", "id", "password", "updatedAt") SELECT "activo", "createdAt", "email", "id", "password", "updatedAt" FROM "Users";
DROP TABLE "Users";
ALTER TABLE "new_Users" RENAME TO "Users";
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");
CREATE UNIQUE INDEX "Users_password_key" ON "Users"("password");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
