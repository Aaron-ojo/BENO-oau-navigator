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
    </nav>
  );
}

export default NavBar;
