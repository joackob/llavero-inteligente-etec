"use client";
import TarjetaParaCadaEspacio from "./components/tarjeta-para-cada-aula";
import TableroDeTarjetasParaAulas from "./components/tablero-de-tarjetas-para-aulas";
import { useEspacios } from "./hooks/use-espacios";
import MensajeDeAlerta from "./components/mensaje-de-alerta";
import BarraDeProgreso from "./components/barra-de-progreso";

export default function Page() {
  const espacios = useEspacios();

  return (
    <>
      {espacios.descargaEnProceso() && <BarraDeProgreso />}
      {espacios.huboUnProblema() && <MensajeDeAlerta />}
      <TableroDeTarjetasParaAulas>
        {espacios.descargaFinalizada() &&
          espacios.espaciosDelColegio().map((aula, id) => {
            return (
              <TarjetaParaCadaEspacio
                key={aula.id}
                espacio={aula.espacio}
                ocupado={aula.ocupado}
                ocupadoPor={`${aula.ocupante?.nombre} ${aula.ocupante?.apellido}`}
                //  imageUrl={imageUrls[index] || espacio.image} // Use fetched image or placeholder
              />
            );
          })}
      </TableroDeTarjetasParaAulas>
    </>
  );
}
