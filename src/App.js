import { useState } from "react";
import axios from "axios";
import "./App.css";
import List from "./components/List/List";
import { Col, Container, Row } from "react-bootstrap";

function App() {
  // HOOK state
  const [profileData, setProfileData] = useState(null);
  //llamada al back con axios
  function getData() {
    axios({
      method: "GET",
      url: "/test",
    })
      .then((response) => {
        const res = response.data;
        setProfileData({
          test01: res.name,
          test02: res.about,
        });
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  }

  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            {/* new line start*/}
            <p>To get your profile details: </p>
            <button onClick={getData}>Click me</button>
            {profileData && (
              <div>
                <p>Conexión a: {profileData.test01}</p>
                <p>Estado: {profileData.test02}</p>
              </div>
            )}
            {/* end of new line */}
            <List />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
