import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { projectData } from "../projectData";

const Projects = () => {
  return (
    <div className="Projects">
      <>
        <h1>Projects</h1>

        {projectData.map((project) => {
          return (
            <section key={project.id}>
              <h2>{project.heading}</h2>
              <Container>
                <Row>
                  <Col sm="6" className="align-content">
                    <img
                      src={project.image}
                      alt={project.heading}
                      className="project-screenshots"
                    />
                  </Col>
                  <Col sm="6" className="align-content">
                    <p>{project.description}</p>
                    <p>{project.skills}</p>
                  </Col>
                </Row>
                <Button
                  className="button"
                  href={project.netlify}
                  target="_blank"
                >
                  View Project
                </Button>
              </Container>
            </section>
          );
        })}
      </>
    </div>
  );
};

export default Projects;
