import "./Footer.scss";

function Footer({ colorTheme }) {
  return (
    <footer className={`footer ${colorTheme}`}>
      <span className="footer-links">
        <a className="footer-resume-link" href="/">
          resume
        </a>
        <span className="footer-links-divider"> // </span>
        <a className="footer-email-link" href="mailto:laura.e.gunther@gmail.com">
          email
        </a>
      </span>
    </footer>
  );
}

export default Footer;