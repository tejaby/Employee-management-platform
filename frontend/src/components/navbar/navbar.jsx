import { NavLink } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar sticky-top navbar-expand-lg p-2 navbar-background p-3">
      <div className="container">
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to={"/"}
          style={{
            textDecoration: "none",
            color: "#2a2a2a",
            padding: "5px",
            fontSize: "28px",
          }}
        >
          Home
        </NavLink>
        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-lg-auto">
            <li className="nav-item nav-item">
              <NavLink to={"/"} className={"link"}>
                Empleados
              </NavLink>
            </li>
            <li className="nav-item nav-item">
              <NavLink to={"/crear"} className={"link"}>
                Crear Empleado
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
