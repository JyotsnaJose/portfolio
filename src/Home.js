import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import developerPic from "./femaleDeveloper.svg";
import { Link } from "react-router-dom";

// import Contact from "./Contact";

const Home = () => {
  return (
    <div className="Home">
      <>
        <Container>
          <Row>
            <Col sm="4" className="align-content">
              <img
                src={developerPic}
                alt="Female developer"
                className="developerPic"
              />
            </Col>
            <Col sm="8" className="align-content">
              <h1>
                <strong>Jyotsna Jose</strong>
              </h1>
              <h2>Front-end Developer based in Minnesota</h2>
              <br />
              <Link to="/contact">
                <Button variant="primary">Contact</Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </>
    </div>
  );
};

export default Home;
