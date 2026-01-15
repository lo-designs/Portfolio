import "./Header.scss";
import ThemeSwitcher from "./ThemeSwitcher.jsx";
import "./Header.scss";

function Header({ colorTheme, handleClick }) {
  return (
    <nav className="header-nav">
      <div className={`header ${colorTheme}`}> 
        <div className="header-links">
          <a className="header-logo" href="/">
            lg design & dev
          </a>
          <span className="header-links-divider"> </span>
          <a className="portfolio-nav-link" href="/portfolio">
            portfolio
          </a>
        </div>
        <div className="theme-switcher-container">
          <ThemeSwitcher colorTheme={colorTheme} handleClick={handleClick} />
        </div>
      </div>
    </nav>
  );
}

export default Header;
