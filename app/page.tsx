"use client";
import TarjetaParaCadaAula from "./components/tarjeta-para-cada-aula";
import TableroDeTarjetasParaAulas from "./components/tablero-de-tarjetas-para-aulas";
import { getDownloadURL, ref, listAll } from "firebase/storage";
import { storage } from "./lib/firebaseClient";
import { useEffect, useState } from "react";

const espacios = [
  { id: 1, name: "Aula 101", image: "https://placehold.co/300x200" },
  { id: 2, name: "Aula 102", image: "https://placehold.co/300x200" },
  { id: 3, name: "Aula 203", image: "https://placehold.co/300x200" },
  { id: 4, name: "Aula 204", image: "https://placehold.co/300x200" },
  { id: 5, name: "Aula 305", image: "https://placehold.co/300x200" },
  { id: 6, name: "Aula 306", image: "https://placehold.co/300x200" },
];





export default function Page() {

  const [espacios, setEspacios] = useState([]);
  
  
  useEffect(()=>{
    fetch("http://localhost:3001/api/espacios").then(data => data.json()).then(response => setEspacios(response.espacios) )
  },[])
  // const [imageUrls, setImageUrls] = useState([]); guarda valor, set actualiza valor 
  //
  // useEffect(() => {
  //   const fetchImages = async () => {
  //     try {
  //       const listRef = ref(storage, 'llavero-inteligente/'); // Specify the folder path
  //       const response = await listAll(listRef);
  //
  //       const urls = await Promise.all(
  //         response.items.map(async (item) => {
  //           const url = await getDownloadURL(item);
  //           return url;
  //         })
  //       );
  //
  //       setImageUrls(urls);
  //     } catch (error) {
  //       console.error("Error fetching images: ", error);
  //     }
  //   };
  //
  //   fetchImages()
  // }, []);

  // useEffect(()=> {
  //   console.log(imageUrls)
  // },[imageUrls])



  return (
    <TableroDeTarjetasParaAulas>
      {espacios ? espacios.map((aula, id) => {
        return (
          <TarjetaParaCadaAula
            key={aula.id}
            espacio={aula.espacio}
            reservado={aula.id % 2 === 0}
            ocupada={aula.ocupada} 
            reservadoPor={"Juan Perez"}
            //  imageUrl={imageUrls[index] || espacio.image} // Use fetched image or placeholder
          />
        );
      }) : <p>No hay espacios disponibles</p>}
      
    </TableroDeTarjetasParaAulas>
  );
}
