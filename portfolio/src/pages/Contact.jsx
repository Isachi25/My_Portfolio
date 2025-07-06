function Contact() {
  return (
    <section id="contact" className="app-section" aria-labelledby="contact-title">
      <h2 id="contact-title">Contact</h2>
      <p>
        Feel free to reach out to me via email or connect with me on social media. I'm always open to collaborations, questions, or just a friendly chat!
      </p>
      <ul>
        <li>
          Email: <a href="mailto:sachi@example.com">sachi@example.com</a>
        </li>
        <li>
          LinkedIn: <a href="https://www.linkedin.com/in/sachi-profile/" target="_blank" rel="noopener noreferrer">linkedin.com/in/sachi-profile</a>
        </li>
        <li>
          GitHub: <a href="https://github.com/sachi-profile" target="_blank" rel="noopener noreferrer">github.com/sachi-profile</a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;