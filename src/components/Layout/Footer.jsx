import { Link } from "react-router-dom";
import ToTopButton from "../Buttons/ToTopButton";

export default function Footer() {
  return (
    <footer>
      <p className="footer-info">
        Coded in&nbsp;
        <Link
          to="https://code.visualstudio.com"
          target="_blank"
          className="anchor-text"
        >
          Visual Studio Code&nbsp;
        </Link>
        by&nbsp;
        <Link
          to="https://www.linkedin.com/in/zachary-betters-916a74116/"
          target="_blank"
          className="anchor-text"
        >
          Zachary Betters
        </Link>
        .&nbsp;
        <br />
        Built with React.JS, HTML, & SCSS, and deployed with&nbsp;
        <Link
          to="https://www.netlify.com"
          target="_blank"
          className="anchor-text"
        >
          Netlify
        </Link>
        .
        <br />
        All text is set in the&nbsp;
        <Link
          to="https://rsms.me/inter/"
          target="_blank"
          className="anchor-text"
        >
          Inter typeface
        </Link>
        .
      </p>

      <ToTopButton />
    </footer>
  );
}
