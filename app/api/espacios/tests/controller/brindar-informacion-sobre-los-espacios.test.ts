import { test, expect, describe, beforeAll, afterAll } from "bun:test";
import { limpiarBaseDeDatos, inicializarBaseDeDatos } from "@/tests/utils";
import { brindarInformacionSobreQuienesOcupanLosEspacios } from "@/app/api/espacios/controllers/brindar-informacion-sobre-los-espacios";

describe("Como usuario, quiero visualizar un listado completo de las llaves para conocer su disponibilidad y quien las posee, sin la necesidad de estar loggeado.", async () => {
  beforeAll(async () => {
    await inicializarBaseDeDatos();
  });

  afterAll(async () => {
    await limpiarBaseDeDatos();
  });

  test("A través de la api `/espacios` puedo obtener un listado completo de las llaves y su disponiblidad", async () => {
    const respuesta = await brindarInformacionSobreQuienesOcupanLosEspacios();
    expect(respuesta.ok).toBeTruthy();
  });

  test("Deberia existir un solo item en listado de espacios, como respuesta", async () => {
    const respuesta = await brindarInformacionSobreQuienesOcupanLosEspacios();
    const espacios = await respuesta.json();
    expect(espacios.espacios.length).toBe(1);
  });

  test("Deberia existir un solo item en listado de espacios y deberia ser la 213", async () => {
    const respuesta = await brindarInformacionSobreQuienesOcupanLosEspacios();
    const espacios = await respuesta.json();
    expect(espacios.espacios.at(0).espacio).toBe("213");
  });
});
