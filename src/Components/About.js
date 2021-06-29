import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import myphoto from "../../public/images/myphoto.png";

const About = () => {
  return (
    <div className="About">
      <>
        <h1>About</h1>
        <Container>
          <Row>
            <Col sm="6">
              <h5>
                <img
                  src="/images/myphoto.png"
                  alt="Jyotsna Jose"
                  className="myPic_small"
                />
                Jyotsna Jose
              </h5>
              <p>
                Entry level Front-end developer(React JS) with several years of
                software development experience in Mainframe.
              </p>
              <p>
                I’m from India and currently based in Minnesota, USA. I have
                successfully completed SheCodes bootcamp for Front-end
                development with React JS and have done several projects as part
                of the same.
              </p>
            </Col>
            <Col sm="6">
              <img
                src="/images/myphoto.png"
                alt="Jyotsna Jose"
                className="myPic"
              />
            </Col>
          </Row>
          <Row>
            <Col sm="4">
              <img
                src="/images/ReactDevelopment.png"
                alt="React Development"
                className="certificates"
              />
            </Col>
            <Col sm="4">
              <img
                src="/images/FrontEndDevelopment.png"
                alt="Front end development"
                className="certificates"
              />
            </Col>
            <Col sm="4">
              <img
                src="/images/Introduction_to_coding.png"
                alt="Introduction to coding"
                className="certificates"
              />
            </Col>
          </Row>
        </Container>
      </>
    </div>
  );
};

export default About;
