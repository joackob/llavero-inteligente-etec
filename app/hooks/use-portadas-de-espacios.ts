// import { getDownloadURL, ref, listAll } from "firebase/storage";
// import { storage } from "./lib/firebaseClient";
// import { useEffect, useState } from "react";
// import { config } from "@/config";

export const usePortadasDeEspacios = () => {
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
};
