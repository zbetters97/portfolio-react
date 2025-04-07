import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Navbar from "./Navbar";

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
      const isOnScreen =
        sectionBottom > viewportTop && sectionTop < viewportBottom;

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
    };
  }, []);

  return (
    <header>
      <Link
        to="https://www.linkedin.com/in/zachary-betters-916a74116/"
        target="_blank"
      >
        <h1 className="header-name light-text">Zachary Betters</h1>
      </Link>

      <h4 className="header-title light-text">IT Specialist</h4>
      <p className="header-desc">
        IT software and support specialist at GOLO LLC.
      </p>

      <Navbar activeSection={activeSection} />
      <Socials />
    </header>
  );
}

function Socials() {
  return (
    <div className="social-link-container">
      <SocialLink url="https://github.com/zbetters97" icon={faGithub} />

      <SocialLink
        url="https://www.linkedin.com/in/zachary-betters-916a74116/"
        icon={faLinkedin}
      />
      <SocialLink url="https://x.com/every1_betters" icon={faTwitter} />

      <SocialLink
        url="https://www.instagram.com/zachcheddars/"
        icon={faInstagram}
      />
    </div>
  );
}

function SocialLink({ url, icon }) {
  return (
    <Link to={url} target="_blank" className="social-link">
      <FontAwesomeIcon icon={icon} />
    </Link>
  );
}
