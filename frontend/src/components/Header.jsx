import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="app-header">
      <div className="logo-container">
        <span className="logo-icon">✨</span>
        <h2 className="logo-text">AI Catalog</h2>
      </div>

      <nav className="nav-links">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          Generate
        </NavLink>

        <NavLink
          to="/result"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          Result
        </NavLink>
      </nav>
    </header>
  );
}
