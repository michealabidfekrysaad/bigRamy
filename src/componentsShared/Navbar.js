import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../config/providers/UserProvider/UserProvider";
import { PATH_PAGE } from "../routes/paths";

export const Navbar = () => {
  const { setUser } = useContext(UserContext);

  const handleLogout = () => {
    localStorage.removeItem("bigRamy");
    setUser(null);
  };

  return (
    <nav className="navbar">
      <div className="navbar-langs">اللغة العربية</div>
      <div className="navbar-data">
        <div className="navbar-left">
          <img
            src="http://bigramyweb.inovaeg.com/static/media/main-logo.d37fd44b1dd3dfb263bfdd977c7cef90.svg"
            alt="Logo"
            className="logo"
          />
        </div>
        <div className="navbar-right">
          <div className="dropdown">
            <button className="dropbtn" onClick={() => handleLogout()}>
              logout, User
            </button>
          </div>
        </div>
      </div>
      <div className="navbar-third">
        <div className="navbar-third-left">
          <Link to="" className="nav-link">
            Home
          </Link>
          <Link to="" className="nav-link">
            News
          </Link>
          <Link to="" className="nav-link">
            Courses
          </Link>
          <Link to={PATH_PAGE.books} className="nav-link">
            E-books
          </Link>
        </div>
        <div className="navbar-third-right">
          <p className="cart-text">Cart</p>
        </div>
      </div>
    </nav>
  );
};
