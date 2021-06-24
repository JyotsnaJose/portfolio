import React from "react";
import pagenotfound from "../page_not_found.svg";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="Error">
      <>
        <Container>
          <Row>
            <Col sm="4" className="align-content">
              <img
                src={pagenotfound}
                alt="Page not found"
                className="illustrations"
              />
            </Col>
            <Col sm="8" className="align-content">
              <h3>Something's wrong here!</h3>
              <h6>We can't find the page you are looking for...</h6>
              <br />
              <Link to="/">
                <Button className="button">Go back Home</Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </>
    </div>
  );
};

export default Error;
