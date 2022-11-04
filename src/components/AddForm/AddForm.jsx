import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FormEdit from "./FormEdit";

function AddForm(props) {
  const { show, onHide, item } = props;

  let descripcion = 0;
  if (item) {
    descripcion = item.attributes.Descripcion;
  } else {
    descripcion = 0;
  }

  return (
    <Modal show={show} size="lg" centered onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Editar {descripcion}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormEdit item={item} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="dark" onClick={props.onHide}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddForm;
