import { cleanDB, initDB } from "@/tests/utils";
import { test, expect } from "@playwright/test";

test.describe("Como usuario, quiero visualizar un listado completo de las llaves para conocer su disponibilidad y quien las posee, sin la necesidad de estar loggeado.", async () => {
  test.beforeAll(async () => {
    await initDB();
  });

  test.afterAll(async () => {
    await cleanDB();
  });

  test("A través de la api `/espacios` puedo obtener un listado completo de las llaves y su disponiblidad", async ({
    request,
  }) => {
    const respuesta = await request.get("/api/espacios");
    expect(respuesta.ok()).toBeTruthy();
  });

  test("Deberia existir un solo item en listado de espacios, como respuesta", async ({
    request,
  }) => {
    const respuesta = await request.get("/api/espacios");
    const espacios = await respuesta.json();
    expect(espacios.espacios.length).toBe(1);
  });
});
