import { autenticar } from "@/app/api/auth/autenticar";
import { parse } from "../parser";
import { reply } from "../response";
import { crearCreadenciales } from "@/app/api/auth/crear-credenciales";

export const signInUser = async (request: Request): Promise<Response> => {
  const data = parse(await request.json());
  const user = await autenticar(data);
  const token = await crearCreadenciales(user);
  return reply(token);
};
