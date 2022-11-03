import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Carrusel from "../Carrusel/Carrusel";

function ModalCarrusel(props) {
  const { onHide, show, item } = props;
  const [listImages, setListImages] = useState([]);
  const [imgId, setImgId] = useState();

  useEffect(() => {
    if (item) {
      getData();
      setImgId(item.attributes.OBJECTID);
    }
  }, [item]);

  const getData = () => {
    const urlImages =
      "https://services6.arcgis.com/xfWFwS0Qks6BuHUq/ArcGIS/rest/services/Activos/FeatureServer/0/queryAttachments?f=json&objectIds=" +
      item.attributes.OBJECTID +
      "&definitionExpression=1=1";
    fetch(urlImages)
      .then((response) => response.json())
      .then((response) => {
        const res = response.attachmentGroups;
        setListImages(res[0].attachmentInfos);
      });
  };

  return (
    <Modal show={show} size="lg" centered onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.item ? <h4>Fotos de {item.attributes.Descripcion}</h4> : <></>}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Carrusel id={imgId} end={listImages} />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide} variant="dark">
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default ModalCarrusel;
