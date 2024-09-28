import { cleanDB, initDB } from "@/tests/utils";
import { test, expect, beforeAll, afterAll } from "bun:test";
import { autenticar } from "../autenticar";
import { UnauthorizedError } from "../../errors";

beforeAll(async () => {
  await initDB();
});

afterAll(async () => {
  await cleanDB();
});

test("Dada una contraseña invalida, se espera la excepción UnauthorizeError ", async () => {
  expect(
    async () =>
      await autenticar({ email: "jdoe@test.com", password: "invalid" })
  ).toThrowError(UnauthorizedError);
});
