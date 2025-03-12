import { useEffect, useRef, useState } from "react";

export default function Header() {

  const [activeSection, setActiveSection] = useState(null);
  const sections = useRef([]);

  function handleScroll() {

    let newActiveSection = null;

    // LOOP THROUGH EACH HOME SECTION
    sections.current.forEach((section) => {

      // GET SIZE OF SECTION
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;

      // GET SIZE OF SCREEN
      const viewportTop = window.scrollY;
      const viewportBottom = viewportTop + window.innerHeight;

      // IF SECTION WITHIN SCREEN BOUNDARIES
      const isOnScreen = sectionBottom > viewportTop && sectionTop < viewportBottom;

      // SET ACTIVE IF NO CURRENT ACTIVE
      if (isOnScreen && newActiveSection === null) {
        newActiveSection = section.id;
      }
    });

    setActiveSection(newActiveSection);
  }

  // RUN ON FIRST LOAD
  useEffect(() => {

    // ALL ELEMENTS CONTAINING data-section DATA
    sections.current = document.querySelectorAll("[data-section]");
    window.addEventListener("scroll", handleScroll);

    // CLEAN UP IF UNMOUNTED
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <header>
      <a
        href="https://www.linkedin.com/in/zachary-betters-916a74116/"
        target="_blank"
      >
        <h1 className="header-name light-text">Zachary Betters</h1>
      </a>

      <h4 className="header-title light-text">IT Specialist</h4>
      <p className="header-desc">IT software and support specialist at GOLO LLC.</p>
      <nav className="navbar">
        <a
          className={`anchor-text nav-link ${activeSection === 'about' && 'active'}`}
          href="#about"
        >
          <p id="nav-about">
            About
          </p>
        </a>
        <a
          className={`anchor-text nav-link ${activeSection === 'experience' && 'active'}`}
          href="#experience"
        >
          <p id="nav-experience">Experience</p>
        </a>
        <a
          className={`anchor-text nav-link ${activeSection === 'projects' && 'active'}`}
          href="#projects"
        >
          <p id="nav-projects">Projects</p>
        </a>
      </nav>
      <div className="social-link-container">
        <a
          className="social-link"
          href="https://github.com/zbetters97"
          target="_blank"
        >
          <i className="social-icon fa-brands fa-github"></i>
        </a>
        <a
          className="social-link"
          href="https://www.linkedin.com/in/zachary-betters-916a74116/"
          target="_blank"
        >
          <i className="social-icon fa-brands fa-linkedin"></i>
        </a>
        <a
          className="social-link"
          href="https://x.com/every1_betters"
          target="_blank"
        >
          <i className="social-icon fa-brands fa-x-twitter"></i>
        </a>
        <a
          className="social-link"
          href="https://www.instagram.com/zachcheddars/"
          target="_blank"
        >
          <i className="social-icon fa-brands fa-instagram"></i>
        </a>
      </div>
    </header>
  );
}
