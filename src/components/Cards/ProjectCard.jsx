import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Tags } from "../Tags";

export default function ProjectCard(props) {
  const { imgUrl, imgAlt, url, title, description, tags } = props;

  return (
    <div className="project-card">
      <div className="project-img-container">
        <img className="project-img" src={imgUrl} alt={imgAlt} />
      </div>
      <div className="card-column">
        <Link to={url} target="_blank">
          <h3 className="anchor-text project-title">
            {title}
            <FontAwesomeIcon icon={faArrowRight} className="anchor-icon" />
          </h3>
        </Link>
        <p>{description}</p>
        <Tags tags={tags} />
      </div>
    </div>
  );
}
