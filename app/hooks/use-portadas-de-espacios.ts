import { getDownloadURL, ref, listAll } from "firebase/storage";
import { storage } from "../lib/firebaseClient";
import { useEffect, useState } from "react";

export const usePortadasDeEspacios = () => {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [loading, setLoading] = useState(true); // Estado de carga
  const [error, setError] = useState<string>(""); // Estado de error

  useEffect(() => {
    const fetchImages = async () => {
      try {
        // 1. Verificar que la referencia al bucket es correcta
        const listRef = ref(storage, "llavero-inteligente/");
        const response = await listAll(listRef);

        // 2. Verificar si 'items' está presente en la respuesta
        if (!response.items || response.items.length === 0) {
          setError("No se encontraron imágenes.");
          setLoading(false);
          return;
        }

        // 3. Obtener las URLs de las imágenes
        const urls = await Promise.all(
          response.items.map(async (item) => {
            const url = await getDownloadURL(item);
            return url;
          }),
        );

        setImageUrls(urls);
      } catch (err) {
        console.error("Error fetching images: ", err);
        setError("Hubo un error al obtener las imágenes.");
      } finally {
        setLoading(false); // Marcar la carga como completada
      }
    };

    fetchImages();
  }, []); // Este effect se ejecutará solo una vez al montar el componente

  useEffect(() => {
    console.log("Lista de URLs de imágenes: ", imageUrls); // Verifica la actualización de imageUrls
  }, [imageUrls]); // Este effect se ejecutará cada vez que imageUrls cambie

  return {
    imageUrls,
    loading,
    error,
  };
};
