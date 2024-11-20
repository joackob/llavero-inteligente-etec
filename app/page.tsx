"use client";

import TarjetaParaCadaEspacio from "./components/tarjeta-para-cada-aula";
import TableroDeTarjetasParaAulas from "./components/tablero-de-tarjetas-para-aulas";
import { useEspacios } from "./hooks/use-espacios";
import { usePortadasDeEspacios } from "./hooks/use-portadas-de-espacios"; // Asegúrate de importar el hook
import MensajeDeAlerta from "./components/mensaje-de-alerta";
import EsqueletoParaLasTarjetasDeCarga from "./components/esqueleto-para-las-tarjetas-de-carga";

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
  //imagenes
  const urls = [
    "",
    "https://firebasestorage.googleapis.com/v0/b/angiediaz-df855.appspot.com/o/llavero-inteligente%2F20241004_165405.jpg?alt=media&token=ae1aa988-51b5-4b70-8fae-421652a45454",
    "https://firebasestorage.googleapis.com/v0/b/angiediaz-df855.appspot.com/o/llavero-inteligente%2F20241004_https://firebasestorage.googleapis.com/v0/b/angiediaz-df855.appspot.com/o/llavero-inteligente%2F20241004_165010.jpg?alt=media&token=1549dbf4-e5d4-4c24-97b2-9e58c0e97817165425.jpg?alt=media&token=a63fdc49-070d-4591-aebe-89adbdef219c",
    "https://firebasestorage.googleapis.com/v0/b/angiediaz-df855.appspot.com/o/llavero-inteligente%2F20241004_165556.jpg?alt=media&token=1b6a3f10-c515-428f-aa58-96372f00916c",
    "https://firebasestorage.googleapis.com/v0/b/angiediaz-df855.appspot.com/o/llavero-inteligente%2F20241004_165636.jpg?alt=media&token=a611e1f8-5580-426d-9233-b53357371ce0",
    "https://firebasestorage.googleapis.com/v0/b/angiediaz-df855.appspot.com/o/llavero-inteligente%2F20241004_165710.jpg?alt=media&token=9516ab70-8b15-44c0-a861-dd7195d4024a",
    "https://firebasestorage.googleapis.com/v0/b/angiediaz-df855.appspot.com/o/llavero-inteligente%2F20241004_165854.jpg?alt=media&token=6fad63ee-8bad-4e10-a934-2bfbbbd837a6",
  ];

  return (
    <>
      {espacios.descargaEnProceso() && <EsqueletoParaLasTarjetasDeCarga />}
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
                imageUrl={urls[id] || "/path/to/default/image.jpg"} // Usa imagen descargada o una imagen por defecto
              />
            );
          })}
      </TableroDeTarjetasParaAulas>
    </>
  );
}
