import { cleanDB, initDB } from "@/tests/utils";
import { test, expect } from "@playwright/test";

test.describe("Como usuario, quiero iniciar mi sesión en el sistema para poder operar dentro de él", () => {
  test.beforeAll(async () => {
    await initDB();
  });

  test.afterAll(async () => {
    await cleanDB();
  });

  test.skip("No es necesario inicar sesión para visualizar el estado de cada una de las llaves", async ({
    page,
  }) => {
    await page.goto("/");
    await expect(page.getByText("213", { exact: true })).toBeVisible();
    await expect(page.getByText("214", { exact: true })).toBeVisible();
    await expect(
      page.getByRole("button", { name: "Iniciar Sesión" })
    ).toBeVisible();
  });

  test.skip("Debe existir un formulario para iniciar sesión a través del correo electrónico y una contraseña personal", async ({
    page,
  }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "Iniciar Sesión" }).click();
    await expect(
      page.getByRole("heading", { name: "Iniciar Sesión" })
    ).toBeVisible();
    await expect(page.getByPlaceholder("tu@ejemplo.com")).toBeVisible();
    await expect(page.getByPlaceholder("••••••••")).toBeVisible();
    await expect(page.getByRole("button", { name: "Continuar" })).toBeVisible();
  });
});
