import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import developerPic from "./femaleDeveloper.svg";

const Home = () => {
  return (
    <div className="Home">
      <>
        <Container>
          <Row>
            <Col sm="8" className="align-content">
              <h1>
                <strong>Jyotsna Jose</strong>
              </h1>
              <h2>Front-end Developer based in Minnesota</h2>
            </Col>
            <Col sm="4">
              <img
                src={developerPic}
                alt="Female developer"
                className="developerPic"
              />
            </Col>
          </Row>
        </Container>
      </>
    </div>
  );
};

export default Home;
