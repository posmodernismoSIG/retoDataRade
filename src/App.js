import "./App.css";
import List from "./components/List/List";
import { Col, Container, Row } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <List />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
