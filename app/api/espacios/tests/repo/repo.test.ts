import { test, describe, afterAll, beforeAll, expect } from "bun:test";
import { limpiarBaseDeDatos, inicializarBaseDeDatos } from "@/tests/utils";
import { obtenerInformacionSobreQuienesOcupanLosEspacios } from "@/app/api/espacios/repo";

describe("Obtener informacion solo de los espacios", async () => {
  beforeAll(async () => {
    await inicializarBaseDeDatos();
  });

  afterAll(async () => {
    await limpiarBaseDeDatos();
  });

  test("Deberia existir un espacio registrado en la base de datos", async () => {
    const espacios = await obtenerInformacionSobreQuienesOcupanLosEspacios();
    expect(espacios.length).toBe(1);
  });

  test("Deberia existir un espacio registrado en la base de datos y es la 213", async () => {
    const espacios = await obtenerInformacionSobreQuienesOcupanLosEspacios();
    expect(espacios.at(0)?.espacio).toBe("213");
  });
});
