import { Button, Col, Container, Row } from "reactstrap";

function Home() {
  return (
    <>
      <Container>
        <Row
          className="align-items-center"
          style={{ height: "calc(100vh - 5rem)" }}
        >
          <Col sm={12} md={7} className="mx-auto">
            <div className="text-center my-5">Sedang dalam perbaikan</div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;

