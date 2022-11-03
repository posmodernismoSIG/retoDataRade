import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function Carrusel(props) {
  const { id, end } = props;
  //construir un array de links
  let imgContainer = [];
  for (let img = 0; img < end.length; img++) {
    imgContainer.push(
      "https://services6.arcgis.com/xfWFwS0Qks6BuHUq/ArcGIS/rest/services/Activos/FeatureServer/0/" +
        id +
        "/attachments/" +
        end[img].id
    );
    console.log(imgContainer);
  }

  return (
    <Carousel variant="dark">
      {imgContainer.map((link, i) => {
        return (
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={link}
              alt="First slide"
              height="500px"
              width="auto"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default Carrusel;
