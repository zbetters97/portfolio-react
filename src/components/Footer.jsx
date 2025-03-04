export default function Footer() {

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <footer>
      <p className="footer-info">
        Coded in
        <a
          className="anchor-text"
          href="https://code.visualstudio.com"
          target="_blank"
        >
          Visual Studio Code
        </a>
        by
        <a
          href="https://www.linkedin.com/in/zachary-betters-916a74116/"
          target="_blank"
          className="anchor-text"
        >
          Zachary Betters
        </a>
        .<br />
        Built with HTML & SCSS, and deployed with
        <a href="https://www.netlify.com" target="_blank" className="anchor-text">
          Netlify
        </a>
        .<br />
        All text is set in the
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