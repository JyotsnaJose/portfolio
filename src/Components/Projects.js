import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { projectData } from "../projectData";

const Projects = () => {
  return (
    <div className="Projects">
      <h1>Projects</h1>

      {projectData.map((project) => {
        return (
          <section key={project.id}>
            <h2>{project.heading}</h2>
            <Container>
              <Row>
                <Col sm="6">
                  <img
                    src={project.image}
                    alt={project.heading}
                    className="project-screenshots"
                  />
                </Col>
                <Col sm="6">
                  <p>{project.description}</p>
                  <p>{project.skills}</p>
                </Col>
              </Row>
            </Container>
          </section>
        );
      })}

      {/* <h2>Weather App</h2>
        <Container>
          <Row>
            <Col sm="8">
              <img src={weatherProj} alt="" className="project-screenshots" />
            </Col>
            <Col sm="4">
              <p>Description and Skills used</p>
            </Col>
          </Row>
        </Container> */}
    </div>
  );
};

export default Projects;
