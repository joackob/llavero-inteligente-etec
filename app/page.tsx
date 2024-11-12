"use client";

import TarjetaParaCadaEspacio from "./components/tarjeta-para-cada-aula";
import TableroDeTarjetasParaAulas from "./components/tablero-de-tarjetas-para-aulas";
import { useEspacios } from "./hooks/use-espacios";
import { usePortadasDeEspacios } from "./hooks/use-portadas-de-espacios"; // Asegúrate de importar el hook
import MensajeDeAlerta from "./components/mensaje-de-alerta";
import BarraDeProgreso from "./components/barra-de-progreso";

export default function Page() {
  const espacios = useEspacios();
  // const { imageUrls, loading, error } = usePortadasDeEspacios(); // Usamos el hook aquí

  // // Asegúrate de que la descarga de imágenes haya finalizado y que hay imágenes para mostrar
  // if (loading) {
  //   return <BarraDeProgreso />; // Muestra barra de progreso mientras se cargan las imágenes
  // }

  // if (error) {
  //   return <MensajeDeAlerta mensaje={error} />; // Muestra mensaje de error si hubo un problema
  // }

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
                imageUrl={"https://picsum.photos/200/300"}                
                // imageUrl={imageUrls[id] || '/path/to/default/image.jpg'} // Usa imagen descargada o una imagen por defecto
              />
            );
          })}
      </TableroDeTarjetasParaAulas>
    </>
  );
}
