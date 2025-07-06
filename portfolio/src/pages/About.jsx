import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

function About() {
  return (
    <section id="about" className="about-section" aria-labelledby="about-title">
      <div className="about-wrapper">
        <div className="about-text">
          <h2 id="about-title">About Me</h2>
          <p>
            I'm a passionate developer with experience in building web
            applications and solving complex problems. I specialize in front-end
            development, creating responsive and user-friendly interfaces.
          </p>
          <p>
            Over the years, I've worked with a variety of technologies, including
            React, Node.js, and Python. My goal is to continuously learn and
            improve my skills to deliver high-quality software solutions.
          </p>
          <p>
            When I'm not coding, I enjoy exploring new technologies, contributing
            to open-source projects, and sharing knowledge with the developer
            community.
          </p>

          <footer className="about-footer">
            <h3>Get in Touch</h3>
            <p>
              Feel free to reach out if you'd like to collaborate, have questions,
              or just want to connect!
            </p>
            <div className="contact-links">
              <a
                href="mailto:sharonachieng309@gmail.com"
                title="Send me an email"
                className="contact-link"
              >
                <FaEnvelope style={{ fontSize: '24px', marginRight: '16px' }} />
              </a>
              <a
                href="https://www.linkedin.com/in/sharonmasiga/"
                target="_blank"
                rel="noopener noreferrer"
                title="Connect with me on LinkedIn"
                className="contact-link"
              >
                <FaLinkedin style={{ fontSize: '24px', color: '#0077B5' }} />
              </a>
            </div>
          </footer>
        </div>

        <div className="about-image-container">
          <img
            src="/images/sachi.jpeg"
            alt="Portrait of Sharon Masiga"
            className="about-image"
          />
        </div>
      </div>
    </section>
  );
}

export default About;