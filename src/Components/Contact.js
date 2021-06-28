import React from "react";
import { Container } from "react-bootstrap";

const Contact = () => {
  return (
    <div className="Contact">
      <>
        <h1>Contact</h1>
        <Container>
          <section className="contact-section">
            <div>
              <i className="fas fa-envelope icons"></i>
            </div>
            <div>
              <a
                href="mailto:jyotnsmaria@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                jyotsnamaria@gmail.com
              </a>
            </div>
          </section>
          <br />
          <section className="contact-section">
            <div>
              <i className="fab fa-linkedin icons"></i>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/jyotsna-jose-82562418b/"
                target="_blank"
                rel="noreferrer"
              >
                Jyotsna Jose
              </a>
            </div>
          </section>
        </Container>
      </>
    </div>
  );
};

export default Contact;
