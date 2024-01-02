import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavbarStyle.css";
import { TbBrandPlanetscale } from "react-icons/tb";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="navbar1">
          <div className="navbar-container1 container1">
            <Link to="/" className="navbar-logo1" onClick={closeMobileMenu}>
              <TbBrandPlanetscale className="navbar-icon1" />
              SoS
            </Link>
            <div className="menu-icon1" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu1 active" : "nav-menu1"}>
              <li className="nav-item1">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    "nav-links1" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Pocetna
                </NavLink>
              </li>
              <li className="nav-item1">
                <NavLink
                  to="/prognoza"
                  className={({ isActive }) =>
                    "nav-links1" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Prognoza
                </NavLink>
              </li>
              <li className="nav-item1">
                <NavLink
                  to="/zagadjenje"
                  className={({ isActive }) =>
                    "nav-links1" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Zagadjenje
                </NavLink>
              </li>
              <li className="nav-item1">
                <NavLink
                  to="/o-nama"
                  className={({ isActive }) =>
                    "nav-links1" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                   O nama
                </NavLink>
              </li>
              <li className="nav-item1">
                <NavLink
                  to="/kontakt"
                  className={({ isActive }) =>
                    "nav-links1" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Kontakt
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;