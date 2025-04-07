export default function Navbar({ activeSection }) {
  return (
    <nav className="navbar">
      <a
        href="#about"
        className={`anchor-text nav-link ${
          activeSection === "about" && "active"
        }`}
      >
        <p id="nav-about">About</p>
      </a>
      <a
        href="#experience"
        className={`anchor-text nav-link ${
          activeSection === "experience" && "active"
        }`}
      >
        <p id="nav-experience">Experience</p>
      </a>
      <a
        href="#projects"
        className={`anchor-text nav-link ${
          activeSection === "projects" && "active"
        }`}
      >
        <p id="nav-projects">Projects</p>
      </a>
    </nav>
  );
}
