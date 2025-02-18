import { z, ZodError } from "zod";

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

const obtenerConfiguracionATravesDeLosParametros = () => {
  try {
    return EsquemaParaLosParametrosDeConfiguracionDeLaApp.parse(process.env);
  } catch (error) {
    const mensaje = (error as ZodError).issues.at(0)?.message;
    console.error(process.env)
    console.error(mensaje);
    return {
      API_URL: "http://localhost:3001/api",
      BASE_URL: "http://localhost:3001",
      MQTT_URL: "mqtt://localhost",
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
    }
  }
};

type EsquemaParaLosParametrosDeConfiguracionDeLaApp = z.infer<typeof EsquemaParaLosParametrosDeConfiguracionDeLaApp>

export const config: EsquemaParaLosParametrosDeConfiguracionDeLaApp = obtenerConfiguracionATravesDeLosParametros();
