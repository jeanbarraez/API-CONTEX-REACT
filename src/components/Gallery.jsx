import { useContext } from "react";
import { PhotosContext } from "../context/PhotosContext";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

//import IconHeart from "./IconHeart"



const Gallery = () => {
  const {photos, setPhotos } = useContext(PhotosContext)
  const AddFavorite = (id) =>{
    const Newphotos = photos.map((picture) =>{
      if(picture.id === id){
        return {...picture , isFavorite: !picture.isFavorite
        }
      }
        return picture

    })
    setPhotos(Newphotos)

  }
    return <div className="gallery grid-columns-5 p-3">
      
      <div className="style-Card">
       
        {photos.map((picture) => (
          <Card style={{ width: "18rem" }} key={picture.id}>
            <Card.Img variant="top" img={picture.img} alt={picture.photographer} 
            onClick={()=>AddFavorite(picture.id)}/>
            <Card.Body>
              <Card.Title>{picture.photographer}</Card.Title>
              <Card.Text>{picture.alt}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div> 
    </div>;

  };
  export default Gallery;
