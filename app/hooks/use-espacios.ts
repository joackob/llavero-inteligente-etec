"use client";

import { config } from "@/config";
import axios from "axios";
import { useEffect, useState } from "react";
import { z } from "zod";

export const useEspacios = () => {
  const [espacios, setEspacios] = useState<EspaciosDelColegio>([]);
  const [estado, setEstado] = useState<
    "cargando" | "huboUnProblema" | "finalizado"
  >("cargando");

  const obtenerInformacionSobreQuienesOcupanLosEspacios =
    async (): Promise<any> => {
      try {
        const response = await axios.get(`${config.API_URL}/espacios`);
        return response.data;
      } catch (error) {
        console.error(
          "Error al obtener la información de los espacios: ",
          error,
        );
        setEstado("huboUnProblema");
      }
    };

  const validarInformacionSobreQuienesOcupanLosEspacios = (data: any): void => {
    try {
      const espaciosCorrectamenteFormados =
        EsquemaParaLosEspaciosDelColegio.parse(data);
      setEstado("finalizado");
      setEspacios(espaciosCorrectamenteFormados.espacios);
    } catch (error) {
      console.error("Error al validar la información de los espacios: ", error);
      setEstado("huboUnProblema");
    }
  };

  useEffect(() => {
    (async () => {
      const data = await obtenerInformacionSobreQuienesOcupanLosEspacios();
      validarInformacionSobreQuienesOcupanLosEspacios(data);
    })();
  }, []);

  return {
    descargaEnProceso: () => estado === "cargando",
    huboUnProblema: () => estado === "huboUnProblema",
    descargaFinalizada: () => estado === "finalizado",
    espaciosDelColegio: () => espacios,
  } as const;
};

const EsquemaParaLosEspaciosDelColegio = z.object({
  espacios: z.array(
    z.object({
      id: z.string(),
      espacio: z.string(),
      ocupado: z.boolean(),
      ocupante: z
        .object({
          id: z.string(),
          nombre: z.string(),
          apellido: z.string(),
          email: z.string().email(),
        })
        .optional(),
    }),
  ),
});

type EspaciosDelColegio = z.infer<
  typeof EsquemaParaLosEspaciosDelColegio
>["espacios"];
