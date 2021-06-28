import React from "react";

const Footer = () => {
  return (
    <div className="Footer">
      <section>
        <i className="fab fa-github footer-icons"></i>
        <a
          href="https://www.linkedin.com/in/jyotsna-jose-82562418b/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin footer-icons"></i>
        </a>
        <a
          href="mailto:jyotsnamaria@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fas fa-envelope footer-icons"></i>
        </a>
      </section>
      <section>
        <small>
          Coded by Jyotsna Jose and open-sourced in{" "}
          <a
            href="https://portfolio-jyotsna.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </small>
      </section>
    </div>
  );
};
export default Footer;
