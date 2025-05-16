import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import SectionHeader from "./SectionHeader";
import ProjectCard from "../Cards/ProjectCard";

export default function ProjectsSection() {
  return (
    <section
      className="home-section projects-section"
      id="projects"
      data-section="projects"
    >
      <SectionHeader section="Projects" />

      <div className="project-contents">
        <ProjectCard
          imgUrl="/tracklist.png"
          imgAlt="tracklist project"
          url="https://tracklist-app.netlify.app/"
          title="TrackList"
          description="A custom-built React.js application designed for reviewing and discussing music. It highlights key development concepts such as responsive UI with React components and SCSS, Spotify integration via the Spotify Web API, and user authentication powered by Firebase."
          tags={["React.js", "Vite", "SCSS", "Spotify API", "Firebase"]}
        />

        <ProjectCard
          imgUrl="/reach.png"
          imgAlt="reach project"
          url="https://reachworshipde.netlify.app/"
          title="Reach Worship Website"
          description="A custom-built website based on the Reach Worship band in Delaware. This showcases many programming concepts, including responsive design using jQuery with CSS, custom navigation using Google Maps API, and JavaScript interaction with Google Firebase."
          tags={["HTML", "SCSS", "jQuery", "Google Maps", "Firebase"]}
        />

        <ProjectCard
          imgUrl="/zelda.png"
          imgAlt="zelda project"
          url="https://zbetters97.itch.io/zelda"
          title="Action/Adventure Graphical 2D Video Game"
          description="A graphical 2D sprite video game where the main character is controlled by user input to perform certain actions and animations. Inspired by The Legend of Zelda series, created by Nintendo."
          tags={["Java", "IntelliJ", "Game Engine"]}
        />

        <ProjectCard
          imgUrl="/pokemon.png"
          imgAlt="pokemon project"
          url="https://zbetters97.itch.io/pokemon"
          title="Role-Playing Graphical 2D Video Game"
          description="A graphical 2D sprite video game where the main character is controlled by user input to perform certain actions and animations. Inspired by The Pokemon Series, created by Game Freak."
          tags={["Java", "IntelliJ", "Game Engine"]}
        />
      </div>
      <Link
        to="https://github.com/zbetters97?tab=repositories"
        target="_blank"
        className="projects-link"
      >
        <p>
          View all Projects
          <span className="right-arrow">
            <FontAwesomeIcon icon={faArrowRight} className="anchor-icon" />
          </span>
        </p>
      </Link>
    </section>
  );
}
