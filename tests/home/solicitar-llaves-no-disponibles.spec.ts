import { test, expect } from "@playwright/test";

test.describe.skip(
  "En caso de que la llave no se encuentre disponible, se debe presentar los datos de contacto con el responsable de las llaves",
  () => {
    test("Si una llave esta liberada, debe aparecer el mensaje 'Solicitar Llave'", async ({
      page,
    }) => {
      await page.goto("/");
      await expect(page.getByText("Solicitar Llave")).toBeVisible();
    });
    test("Si una llave esta ocupada, debe aparecer el mensaje 'Mandale un mensajito'", async ({
      page,
    }) => {
      await page.goto("/");
      await expect(page.getByText("Mandale un mensajito")).toBeVisible();
    });
  }
);
