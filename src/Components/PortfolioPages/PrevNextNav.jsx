import { useLocation, Link } from "react-router-dom";
import { usePortfolioNav } from "../PortfolioPages/PortfolioStyles/PortfolioNavContext";
import "./PrevNextNav.scss";

function PrevNextNav() {
  const location = useLocation();
  const navData = usePortfolioNav();
  const normalize = (path) => path.replace(/\/+$/, "").toLowerCase();
  const current = navData.find((item) => normalize(location.pathname) === normalize(item.url));

  let prevNav = null;
  let nextNav = null;
  if (current) {
    // Loop prev/next
    const currentIndex = navData.indexOf(current);
    prevNav = navData[(currentIndex - 1 + navData.length) % navData.length];
    nextNav = navData[(currentIndex + 1) % navData.length];
  }

  return (
    <nav className="prev-next-nav">
      {current && (
        <ul className="prev-next-list">
          <li>
            <Link className="prev-link" to={prevNav.url}>
              prev project
            </Link>
          </li>
          <span>|</span>
          <li>
            <Link className="next-link" to={nextNav.url}>
              next project 
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default PrevNextNav;
