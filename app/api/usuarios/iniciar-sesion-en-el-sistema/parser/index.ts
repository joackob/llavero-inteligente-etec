import z, { ZodError } from "zod";
import { SolicitudMalPlanteada } from "@/app/api/excepciones";

export const validarLosDatosDeLaSolicitud = (
  solicitud: Readonly<any>
): DatosNecesariosParaIniciarLaSesionDeUnUsuario => {
  return chequearEsquemaDeLaSolicitud(solicitud);
};

const chequearEsquemaDeLaSolicitud = (datos: Readonly<any>) => {
  try {
    console.log(datos)
    return EsquemaDeUnaSolicitudParaIniciarLaSesionDeUnUsuario.parse(datos);
  } catch (error) {
    const primerErrorEncontrado = (error as ZodError).issues.at(0);
    throw new SolicitudMalPlanteada(
      `El campo ${primerErrorEncontrado?.path.at(
        0
      )} no se encuentra en el formato correcto: ${primerErrorEncontrado?.message
      }`
    );
  }
};

export const EsquemaDeUnaSolicitudParaIniciarLaSesionDeUnUsuario = z.object(
  {
    email: z
      .string()
      .email("Debe existir un email: Por ejemplo jdoe@ejemplo.com"),
    password: z.string()
  },
  {
    message:
      "La petición no contiene ninguno de los datos necesarios para ser procesado",
  }
);

export type DatosNecesariosParaIniciarLaSesionDeUnUsuario = z.infer<
  typeof EsquemaDeUnaSolicitudParaIniciarLaSesionDeUnUsuario
>;
