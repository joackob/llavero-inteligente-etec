import { z, ZodError } from "zod";

/* Muy importante: Recordar que process.env no esta disponible en el cliente.
 * Por ende, cuando intente solicitar cualquier recurso, y este falle,
 * se vera un mensaje que advierta de esto para descartar cualquier advertencia
 * En cualquier caso, se retornara una valor por defecto que puede o no
 * contener informacion importante para el cliente, ejemplo: API_URL
 * */

const obtenerConfiguracionATravesDeLosParametros =
  (): ParametrosDeConfiguracionDeLaApp => {
    try {
      return EsquemaParaLosParametrosDeConfiguracionDeLaApp.parse(process.env);
    } catch (error) {
      console.log(
        "Advertencia: process.env no esta disponible en el cliente. Se retornara un valor por defecto.",
      );
      const advertencias = (error as ZodError).issues.map((issue) => ({
        advertencia: issue.message,
        campo: issue.path.toString(),
      }));
      console.table(advertencias);
      return {
        API_URL: "http://localhost:3000/api",
        BASE_URL: "http://localhost:3000",
        MQTT_URL: "mqtt://localhost:3000",
        DATABASE_URL: "file:test.db",
        JWT_SECRET: "jwt_secret",
        NODE_ENV: "DEV",
        CI: "off",
        FIREBASE_API_KEY: "firebase_api_key",
        FIREBASE_AUTH_DOMAIN: "firebase_auth_domain",
        FIREBASE_PROJECT_ID: "firebase_proyect_id",
        FIREBASE_STORAGE_BUCKET: "firebase_storage_bucket",
        FIREBASE_MESSAGING_SENDER_ID: "firebase_messaging_sender_id",
        FIREBASE_APP_ID: "firebase_app_id",
        FIREBASE_MEASUREMENT_ID: "firebase_measurement_id",
      };
    }
  };

const EsquemaParaLosParametrosDeConfiguracionDeLaApp = z.object({
  API_URL: z.string({ message: "API_URL es requerido" }),
  BASE_URL: z.string({ message: "BASE_URL es requerido" }),
  MQTT_URL: z.string({ message: "MQTT_URL es requerido" }),
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

type ParametrosDeConfiguracionDeLaApp = z.infer<
  typeof EsquemaParaLosParametrosDeConfiguracionDeLaApp
>;

export const config = obtenerConfiguracionATravesDeLosParametros();
