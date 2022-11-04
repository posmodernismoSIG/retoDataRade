import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import ModalCarrusel from "../Modal/Modal";

function List() {
  const [listData, setListData] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch(
      "https://services6.arcgis.com/xfWFwS0Qks6BuHUq/ArcGIS/rest/services/Activos/FeatureServer/0/query?f=json&cacheHint=true&resultOffset=0&resultRecordCount=50&where=1%3D1&orderByFields=&outFields=*&returnGeometry=false&spatialRel=esriSpatialRelIntersects"
    )
      .then((response) => response.json())
      .then((response) => {
        const res = response.features;
        setListData(res);
      });
  };

  return (
    <>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Descripcion</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>EstadoConservacion</th>
            <th>UsoActual</th>
          </tr>
        </thead>
        <tbody>
          {listData.map((item, i) => (
            <tr
              key={item.attributes.GlobalID} //clave para identificar cada item
              onClick={() => {
                setModalShow(true);
                setSelectedItem(item);
              }}
            >
              <td>{i + 1}</td>
              <td>{item.attributes.Descripcion}</td>
              <td>{item.attributes.Marca}</td>
              <td>{item.attributes.Modelo}</td>
              <td>{item.attributes.EstadoConservacion}</td>
              <td>{item.attributes.UsoActual}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <ModalCarrusel
        show={modalShow}
        onHide={() => setModalShow(false)}
        item={selectedItem}
      />
    </>
  );
}

export default List;
