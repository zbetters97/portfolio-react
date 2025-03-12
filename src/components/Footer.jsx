export default function Footer() {

  function goToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <footer>
      <p className="footer-info">
        Coded in&nbsp;
        <a
          className="anchor-text"
          href="https://code.visualstudio.com"
          target="_blank"
        >
          Visual Studio Code&nbsp;
        </a>
        by&nbsp;
        <a
          href="https://www.linkedin.com/in/zachary-betters-916a74116/"
          target="_blank"
          className="anchor-text"
        >
          Zachary Betters
        </a>
        .&nbsp;
        <br />
        Built with React.JS, HTML, & SCSS, and deployed with&nbsp;
        <a href="https://www.netlify.com" target="_blank" className="anchor-text">
          Netlify
        </a>
        .
        <br />
        All text is set in the&nbsp;
        <a href="https://rsms.me/inter/" target="_blank" className="anchor-text">
          Inter typeface
        </a>
        .
      </p>
      <button href="#" className="scroll-to-top" onClick={goToTop}>
        <i className="fa-solid fa-arrow-up"></i>
      </button>
    </footer>
  );
}