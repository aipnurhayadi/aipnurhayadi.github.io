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
            <div className="text-center my-5">
              <h4 className="ff-serif display-5 mx-auto mb-4 text-primary fw-bold">
                Halo, Rhhha disini!
              </h4>
              <h5 className="h5 text-primary">
                Kami merupakan perusahaan pengembang perangkat lunak yang
                berbasis di Bandung. Semua proyek kami di sini telah
                dilisensikan di bawah MIT, Anda berhak menggunakan mereka sesuai
                keinginan Anda.
              </h5>
              <Button
                color="outline-secondary"
                className="mt-5 rounded-pill px-5 py-2"
              >
                Lihat semua
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
