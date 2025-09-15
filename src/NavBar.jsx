import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="home-button">
        Home
      </NavLink>

      <NavLink to="/about" className="about-button">
        About
      </NavLink>

      <NavLink to="/faq" className="faq-button">
        FAQ
      </NavLink>
    </nav>
  );
}

export default NavBar;
