import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import AddForm from "./AddForm";
function FormEdit(props) {
  const { item } = props;
  const [form, setForm] = useState({});
  const [errors, setError] = useState({});
  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
      objectId: parseFloat(item.attributes.OBJECTID),
    });
    if (!!errors[field])
      setError({
        ...errors,
        [field]: null,
      });
  };

  let edit = {
    attributes: form,
  };

  function componentDidMount() {
    let url =
      "https://services6.arcgis.com/xfWFwS0Qks6BuHUq/ArcGIS/rest/services/Activos/FeatureServer/0/applyEdits/?Updates=" +
      JSON.stringify(edit) +
      "&f=pjson";
    console.log(url);
    console.log(parseFloat(item.attributes.OBJECTID));
    const requestOptions = {
      method: "POST",
    };

    fetch(url, requestOptions).then((response) => console.log(response.json()));
  }

  //console.log(item);
  return (
    <>
      <Form.Group className="mb-3" ControlId="changes">
        <Form.Label>Descripcion </Form.Label>
        <Form.Control
          placeholder={item.attributes.Descripcion}
          onChange={(e) => setField("Descripcion", e.target.value)}
        />
        <Form.Label>Marca </Form.Label>
        <Form.Control
          placeholder={item.attributes.Marca}
          onChange={(e) => setField("Marca", e.target.value)}
        />
        <Form.Label>Modelo</Form.Label>
        <Form.Control
          placeholder={item.attributes.Modelo}
          onChange={(e) => setField("Modelo", e.target.value)}
        />
        <Form.Label>Estado de conservación</Form.Label>
        <Form.Control
          placeholder={item.attributes.EstadoConservacion}
          onChange={(e) => setField("EstadoConservacion", e.target.value)}
        />
        <Form.Label>Uso Actual</Form.Label>
        <Form.Control
          placeholder={item.attributes.UsoActual}
          onChange={(e) => setField("UsoActual", e.target.value)}
        />
      </Form.Group>
      <Button variant="dark" onClick={() => componentDidMount()}>
        Enviar
      </Button>
    </>
  );
}

export default FormEdit;
