import z, { ZodError } from "zod";
import { SolicitudMalPlanteada } from "@/app/api/errors";

export const validarLosDatosDeLaSolicitud = (
  solicitud: Readonly<any>
): DatosNecesariosParaInscribirAUnUsuario => {
  const datos = chequearEsquemaDeLaSolicitud(solicitud);
  return chequearConfirmacionDeLaContrasena(datos);
};

const chequearEsquemaDeLaSolicitud = (datos: Readonly<any>) => {
  try {
    return EsquemaDeUnaSolicitudParaInscribirAUnUsuario.parse(datos);
  } catch (error) {
    const primerErrorEncontrado = (error as ZodError).issues.at(0);
    throw new SolicitudMalPlanteada(
      `El campo ${primerErrorEncontrado?.path.at(
        0
      )} no se encuentra en el formato correcto: ${
        primerErrorEncontrado?.message
      }`
    );
  }
};

const chequearConfirmacionDeLaContrasena = (
  datos: Readonly<DatosNecesariosParaInscribirAUnUsuario>
) => {
  const contrasenaFueConfirmada = datos.password === datos.confirmacion;
  if (!contrasenaFueConfirmada) {
    throw new SolicitudMalPlanteada(
      "La contraseña y su confirmacion no coinciden"
    );
  }
  return datos;
};

export const EsquemaDeUnaSolicitudParaInscribirAUnUsuario = z.object(
  {
    nombre: z
      .string()
      .min(2, "Minimo 2 caracteres")
      .max(255, "Maximo 255 caracteres"),
    apellido: z
      .string()
      .min(2, "Minimo 2 caracteres")
      .max(255, "Maximo 255 caracteres"),
    email: z
      .string()
      .email("Debe existir un email: Por ejemplo: jperez@etec.uba.ar"),
    password: z.string().min(8, "Minimo 8 caracteres"),
    confirmacion: z.string().min(8, "Minimo 8 caracteres"),
  },
  {
    message:
      "La petición no contiene ninguno de los datos necesarios para ser procesado",
  }
);

export type DatosNecesariosParaInscribirAUnUsuario = z.infer<
  typeof EsquemaDeUnaSolicitudParaInscribirAUnUsuario
>;
