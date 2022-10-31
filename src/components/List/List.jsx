import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

function List() {
  const [listData, setListData] = useState([]);
  useEffect(() => {
    //primer paramtro del effect, la funcion que se va a ejecutar cuando cambie el tercer p.
    getData();
  }, []); //tercer parametro tipo array que incluye lo que va a cambiar para el effect

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

  const handleClick = (globalId) => {
    //
    // alert(globalId);
  };

  return (
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
            key={item.attributes.GlobalID}
            onClick={() => handleClick(item.attributes.GlobalID)}
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
  );
}

export default List;
