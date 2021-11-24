import "./footer.styles.scss";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="links">
        <a
          className="link"
          href="https://github.com/NihadZeidan"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          className="link"
          href="https://www.linkedin.com/in/nihadzeidan/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
      <div className="copyright">All rights reserved. © E-Era 2021</div>
    </footer>
  );
};

export default Footer;
