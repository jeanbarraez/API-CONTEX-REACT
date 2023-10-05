
import { useState, useEffect, createContext } from "react";

export const PhotosContext = createContext();

const urlPhotos = "/photos.json";

const PhotosContextProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);
  const valor = { photos, setPhotos };
  const getPhotos = async () => {
    try{
    const response = await fetch(urlPhotos);
    const data = await response.json();
    console.log(data.photos);
    const myapiPhotos = data.photos.map((picture) => {
      return {
        isFavorite: false,
       liked: false,
        id: picture.id,
        alt: picture.alt,
        photographer: picture.photographer,
        img: picture.src.large,
      };
    });
  
    setPhotos(myapiPhotos.map((photo) => ({ ...photo, liked: false })));
} catch (error) {
    console.log("Error al obtener la informacion", error);
  }
   
  };
  useEffect(() => {
    getPhotos();
  }, []);
  return (
    <PhotosContext.Provider value={valor}>{children}</PhotosContext.Provider>
  );
};

export default PhotosContextProvider;
