import { test, expect } from "bun:test";
import { encriptarIDDeUsuario } from "../utils";

test("Dada un id determinado, se debe generar un token", async () => {
  const token = await encriptarIDDeUsuario("id");
  expect(token).toBeDefined();
});
