import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <nav className="header">
      <h2>AI Catalog</h2>

      <div className="nav-links">
        <Link to="/">Generate</Link>
        <Link to="/result">Result</Link>
      </div>
    </nav>
  );
}
