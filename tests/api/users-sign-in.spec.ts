import { test, expect } from "@playwright/test";

test.describe("Como usuario, quiero iniciar mi sesion en el sistema para solicitar o devolver llaves", () => {
  test('La api "/api/users/sign-in" permite iniciar sesión a un usuario que ya este registrado', async ({
    request,
  }) => {
    const response = await request.post("/api/users/sign-in", {
      data: {
        email: "docente@etec.uba.ar",
        password: "passtesting",
      },
    });
    expect(response.status()).toBe(302);
  });
});
