export default function Layout() {

  return (
    <main>
      <section
        className="home-section about-section"
        id="about"
        data-section="about"
      >
        <div className="sticky-header">
          <h2 className="light-text section-title">About</h2>
        </div>
        <p className="about-contents">
          Welcome to the official digital portfolio of Zachary Betters, where I
          showcase a selection of my latest programming projects. Using HTML,
          SCSS, and jQuery, this custom-built website highlights a few key
          pieces that demonstrate my technical skills, problem-solving
          abilities, and passion for clean, efficient code.
        </p>
      </section>
      <section
        className="home-section experience-section"
        id="experience"
        data-section="experience"
      >
        <div className="sticky-header">
          <h2 className="light-text section-title">Experience</h2>
        </div>
        <div className="experience-contents">
          <div className="experience-card">
            <p className="tenure">MAR 2022 - present</p>
            <div className="card-column">
              <a href="https://www.golo.com" target="_blank">
                <h3 className="anchor-text experience-title">
                  IT Specialist · GOLO LLC.
                  <i className="fa-solid fa-arrow-right anchor-icon"></i>
                </h3>
              </a>
              <p className="experience-desc">
                Assist with planning and executing large-scale projects,
                deployments, and migrations. Configure and support various
                applications, including Salesforce, AWS, Shopify, Excel, Azure,
                Exchange, and SharePoint. Provide direct personal and efficient
                problem-solving concerning software and hard-related matters,
                including backend application configurations when necessary. Act
                as a direct liaison between vendors and the company to solve
                IT-related business problems and needs.
              </p>

              <div className="tag-container">
                <div className="tag"><p>O365 Admin</p></div>
                <div className="tag"><p>Azure AD</p></div>
                <div className="tag"><p>Shopify</p></div>
                <div className="tag"><p>Salesforce</p></div>
              </div>
            </div>
          </div>
          <div className="experience-card">
            <p className="tenure">MAY 2018 - MAR 2022</p>
            <div className="card-column">
              <a href="https://www.pbfenergy.com/refineries/" target="_blank">
                <h3 className="anchor-text experience-title">
                  IT Desktop Support · Delaware City Refinery
                  <i className="fa-solid fa-arrow-right anchor-icon"></i>
                </h3>
              </a>
              <p className="experience-desc">
                Managed the IT Help Desk by responding to software and
                hardware-related issues, including Microsoft Access and Excel,
                SAP, and in-house developed software. Developed and modified PDQ
                software packages for bulk installation.
              </p>

              <div className="tag-container">
                <div className="tag"><p>Excel</p></div>
                <div className="tag"><p>Access</p></div>
                <div className="tag"><p>PDQ</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="home-section projects-section"
        id="projects"
        data-section="projects"
      >
        <div className="sticky-header">
          <h2 className="light-text section-title">Projects</h2>
        </div>
        <div className="project-contents">
          <div className="project-card">
            <div className="project-img-container">
              <img
                className="project-img"
                src="/reach.png"
                alt="pokemon project"
              />
            </div>
            <div className="card-column">
              <a href="https://reachworshipde.netlify.app/" target="_blank">
                <h3 className="anchor-text project-title">
                  Reach Worship Website
                  <i className="fa-solid fa-arrow-right anchor-icon"></i>
                </h3>
              </a>
              <p>
                A custom-built website based on the Reach Worship band in
                Delaware. This showcases many programming concepts, including
                responsive design using jQuery with CSS, custom navigation using
                Google Maps API, and JavaScript interaction with Google
                Firebase.
              </p>
              <div className="tag-container">
                <div className="tag"><p>HTML</p></div>
                <div className="tag"><p>SCSS</p></div>
                <div className="tag"><p>jQuery</p></div>
                <div className="tag"><p>Google Maps</p></div>
                <div className="tag"><p>Firebase</p></div>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-img-container">
              <img
                className="project-img"
                src="/zelda.png"
                alt="zelda project"
              />
            </div>
            <div className="card-column">
              <a href="https://zbetters97.itch.io/zelda" target="_blank">
                <h3 className="anchor-text project-title">
                  Action/Adventure Graphical 2D Video Game
                  <i className="fa-solid fa-arrow-right anchor-icon"></i>
                </h3>
              </a>
              <p>
                A graphical 2D sprite video game where the main character is
                controlled by user input to perform certain actions and
                animations. Inspired by The Legend of Zelda series, created by
                Nintendo.
              </p>
              <div className="tag-container">
                <div className="tag"><p>Java</p></div>
                <div className="tag"><p>IntelliJ</p></div>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="project-img-container">
              <img
                className="project-img"
                src="/pokemon.png"
                alt="pokemon project"
              />
            </div>
            <div className="card-column">
              <a href="https://zbetters97.itch.io/pokemon" target="_blank">
                <h3 className="anchor-text project-title">
                  Role-Playing Graphical 2D Video Game
                  <i className="fa-solid fa-arrow-right anchor-icon"></i>
                </h3>
              </a>
              <p>
                A graphical 2D sprite video game where the main character is
                controlled by user input to perform certain actions and
                animations. Inspired by The Pokemon Series, created by Game
                Freak.
              </p>
              <div className="tag-container">
                <div className="tag"><p>Java</p></div>
                <div className="tag"><p>IntelliJ</p></div>
              </div>
            </div>
          </div>
        </div>
        <a
          className="projects-link"
          href="https://github.com/zbetters97?tab=repositories"
          target="_blank"
        >
          <p>
            View all Projects
            <span className="right-arrow">
              <i className="fa-solid fa-arrow-right anchor-icon"></i>
            </span>
          </p>
        </a>
      </section>
    </main>
  );
}