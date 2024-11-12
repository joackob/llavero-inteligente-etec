import { z, ZodError } from "zod";

const EsquemaParaLosParametrosDeConfiguracionDeLaApp = z.object({
  API_URL: z.string({ message: "API_URL es requerido" }),
  BASE_URL: z.string({ message: "BASE_URL es requerido" }),
  DATABASE_URL: z.string({ message: "DATABASE_URL es requerido" }),
  JWT_SECRET: z.string({ message: "JWT_SECRET es requerido" }),
  NODE_ENV: z.string({ message: "NODE_ENV es requerido" }),
  CI: z.string({ message: "CI es requerido" }),
  FIREBASE_API_KEY: z.string({ message: "FIREBASE_API_KEY es requerido" }),
  FIREBASE_AUTH_DOMAIN: z.string({
    message: "FIREBASE_AUTH_DOMAIN es requerido",
  }),
  FIREBASE_PROJECT_ID: z.string({
    message: "FIREBASE_PROJECT_ID es requerido",
  }),
  FIREBASE_STORAGE_BUCKET: z.string({
    message: "FIREBASE_STORAGE_BUCKET es requerido",
  }),
  FIREBASE_MESSAGING_SENDER_ID: z.string({
    message: "FIREBASE_MESSAGING_SENDER_ID es requerido",
  }),
  FIREBASE_APP_ID: z.string(),
  FIREBASE_MEASUREMENT_ID: z.string(),
});

const obtenerConfiguracionATravesDeLosParametros = () => {
  try {
    return EsquemaParaLosParametrosDeConfiguracionDeLaApp.parse(process.env);
  } catch (error) {
    const mensaje = (error as ZodError).issues.at(0)?.message;
    console.error(mensaje);
    throw new Error(mensaje);
  }
};

export const config = obtenerConfiguracionATravesDeLosParametros();
