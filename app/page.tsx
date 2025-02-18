"use client";

import { useSearch } from "./components/search-context"; // Importa el contexto
import { useEspacios } from "./hooks/use-espacios";
import TarjetaParaCadaEspacio from "./components/tarjeta-para-cada-aula";
import TableroDeTarjetasParaAulas from "./components/tablero-de-tarjetas-para-aulas";
import MensajeDeAlerta from "./components/mensaje-de-alerta";
import BarraDeProgreso from "./components/barra-de-progreso";

export default function Page() {
  const { searchTerm } = useSearch(); // Acceder al término de búsqueda
  const espacios = useEspacios();

  console.log("Término de búsqueda (Page):", searchTerm); // Depuración

  // Filtrar las aulas según el término de búsqueda
  const filteredAulas = espacios.espaciosDelColegio().filter((aula) =>
    aula.espacio.toLowerCase().includes(searchTerm.toLowerCase())
  );

  console.log("Aulas filtradas:", filteredAulas); // Depuración

  return (
    <>
      {/* Contenido de la página */}
      {espacios.descargaEnProceso() && <BarraDeProgreso />}
      {espacios.huboUnProblema() && <MensajeDeAlerta />}
      <TableroDeTarjetasParaAulas>
        {espacios.descargaFinalizada() &&
          filteredAulas.map((aula) => (
            <TarjetaParaCadaEspacio
              key={aula.id}
              espacio={aula.espacio}
              ocupado={aula.ocupado}
              ocupadoPor={`${aula.ocupante?.nombre} ${aula.ocupante?.apellido}`}
              imageUrl={"https://picsum.photos/200/300"}
            />
          ))}
      </TableroDeTarjetasParaAulas>
    </>
  );
}