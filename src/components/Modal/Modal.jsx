import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalCarrusel(props) {
  const { onHide, show, item } = props;
  const [listImages, setListImages] = useState([]);
  useEffect(() => {
    if (item) {
      getData();
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

        for (let i = 0; i < parseInt(res[0].attachmentInfos.length); i++) {
          setListImages(res[0].attachmentInfos[i].id);
        }
      });
  };
  let urlImagen =
    "https://services6.arcgis.com/xfWFwS0Qks6BuHUq/ArcGIS/rest/services/Activos/FeatureServer/0/" +
    item.attributes.OBJECTID +
    "/attachments/" +
    listImages;
  return (
    <Modal show={show} size="lg" centered onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.item ? <h4>Fotos de {item.attributes.Descripcion}</h4> : <></>}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={urlImagen} alt="" />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default ModalCarrusel;
