import { limpiarBaseDeDatos, inicializarBaseDeDatos } from "@/tests/utils";
import { test, expect, beforeAll, afterAll } from "bun:test";
import { autenticarLosDatosDeUnUsuario } from "../autenticar";
import { SolicitudSinCredencialesCorrespondientes } from "../../errors";

beforeAll(async () => {
  await inicializarBaseDeDatos();
});

afterAll(async () => {
  await limpiarBaseDeDatos();
});

test("Dada una contraseña invalida, se espera la excepción UnauthorizeError ", async () => {
  expect(
    async () =>
      await autenticarLosDatosDeUnUsuario({
        email: "jdoe@test.com",
        password: "invalid",
      })
  ).toThrowError(SolicitudSinCredencialesCorrespondientes);
});
