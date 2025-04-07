import { Link } from "react-router-dom";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tags } from "../Tags";

export default function ExperienceCard(props) {
  const { tenure, url, title, company, description, tags } = props;

  return (
    <div className="experience-card">
      <p className="tenure">{tenure}</p>
      <div className="card-column">
        <Link to={url} target="_blank">
          <h3 className="anchor-text experience-title">
            {title} · {company}
            <FontAwesomeIcon icon={faArrowRight} className="anchor-icon" />
          </h3>
        </Link>
        <p className="experience-desc">{description}</p>
        <Tags tags={tags} />
      </div>
    </div>
  );
}
