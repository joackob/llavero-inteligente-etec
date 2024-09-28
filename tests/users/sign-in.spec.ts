import { cleanDB, initDB } from "@/tests/utils";
import { test, expect } from "@playwright/test";

test.describe("Como usuario, quiero iniciar mi sesión en el sistema para poder operar dentro de él", () => {
  test.beforeAll(async () => {
    await initDB();
  });

  test.afterAll(async () => {
    await cleanDB();
  });

  test.skip("La api '/espacios' permite visualizar el estado de cada una de las llaves sin la necesidad de visualizar", async ({
    page,
  }) => {
    await page.goto("/");
    await expect(page.getByText("213", { exact: true })).toBeVisible();
    await expect(page.getByText("214", { exact: true })).toBeVisible();
    await expect(
      page.getByRole("button", { name: "Iniciar Sesión" })
    ).toBeVisible();
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

  test.skip("Si la contraseña y el usuario son correctos, la página debe ser redirigida al inicio con un banner con el nombre y apellido del usuario correspondiente", async ({
    page,
  }) => {
    await page.goto("/users/sign-in");
    await page.getByPlaceholder("tu@ejemplo.com").fill("docente@etec.uba.ar");
    await page.getByPlaceholder("••••••••").fill("docente");
    await page.getByRole("button", { name: "Continuar" }).click();
    await expect(
      page.getByRole("banner").getByText("Docente Etec")
    ).toBeVisible();
  });

  test.skip("Para iniciar sesión, el formulario debe enviar email y constraseña a la API correspondiente", async ({
    page,
  }) => {
    await page.route("*/**/api/users/sign-in", async (_, request) => {
      const data = request.postDataJSON();
      expect(data.email).toBe("docente@etec.uba.ar");
      expect(data.password).toBe("docente");
    });

    await page.goto("/users/sign-in");
    await page.getByPlaceholder("tu@ejemplo.com").fill("docente@etec.uba.ar");
    await page.getByPlaceholder("••••••••").fill("docente");
    await page.getByRole("button", { name: "Continuar" }).click();
  });
});
