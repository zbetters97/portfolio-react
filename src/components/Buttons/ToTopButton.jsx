import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ToTopButton() {
  function goToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button href="#" className="scroll-to-top" onClick={goToTop}>
      <FontAwesomeIcon icon={faArrowUp} />
    </button>
  );
}
