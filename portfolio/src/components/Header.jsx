function Header() {
  return (
    <header className="app-header" role="banner">
      <div className="header-content">
        <h1>Discover My Work</h1>
        <p>
          Navigate through the sections to learn more about my skills, projects,
          and how to get in touch.
        </p>
      </div>

      <nav className="header-navigation" aria-label="Main navigation">
        <ul className="nav-list">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Me</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
