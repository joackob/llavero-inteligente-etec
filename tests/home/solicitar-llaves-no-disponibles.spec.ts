import { test, expect } from "@playwright/test";

test.describe("En caso de que la llave no se encuentre disponible, se debe presentar los datos de contacto con el responsable de las llaves", () => {
  test("Si una llave esta ocupada, debe aparecer el mensaje 'Mandale un mensajito'", async ({
    page,
  }) => {
    await page.goto("http://localhost:3000/");
    await expect(page.getByText("Mandale un mensajito")).toBeVisible();
  });
});
