import React, { useState} from "react";
import Button from "./components/Button"
import Calc from "./components/Calc"
import PhotosGallery from "./components/PhotosGallery";

const App = () => {
const photos = [
  "http://placeimg.com/140/60/people",
  "http://placeimg.com/140/60/animals",
  "http://placeimg.com/140/60/tech",
  "http://placeimg.com/140/60/sport",
  "http://placeimg.com/140/60/ward",
  "http://placeimg.com/140/60/tecnolog",
]

  return(
    <>
      <h1>Galeria de fotos</h1>
      <PhotosGallery
         photos={photos}
      >
      </PhotosGallery>
    </>
  )
};
export default App;