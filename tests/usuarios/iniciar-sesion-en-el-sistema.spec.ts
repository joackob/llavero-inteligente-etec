import { test, expect } from "@playwright/test";

test.describe.skip(
  "Como usuario, quiero iniciar mi sesion en el sistema para solicitar o devolver llaves",
  () => {
    test("Si las credenciales son correctas y el usuario ya esta registrado, el sistema debe redirigirlo a la seccion inicial y debe aparecer su nombre en el encabezado", async ({
      page,
    }) => {
      await page.goto("http://localhost:3001/");
      await page.getByRole("button", { name: "Iniciar Sesión" }).click();
      await page.getByPlaceholder("tu@ejemplo.com").fill("docente@etec.uba.ar");  
      await page.getByPlaceholder("••••••••").fill("passtesting");
      await page.getByRole("button", { name: "Continuar" }).click();
      await page.getByRole("link", { name: ".ubaetec" }).click();
      await expect(page.getByText("Docente Etec")).toBeVisible();
    });
  }
);
