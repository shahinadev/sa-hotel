import React from "react";
import { NavLink, Link } from "react-router-dom";
import useAuth from "./../../../hooks/useAuth";
import "./Header.css";
const Header = () => {
  const { logOut, user } = useAuth();
  return (
    <nav className="navbar navbar-expand-lg sticky-top top-0 navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="#">
          SA Hotel Booking
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                activeClassName="active-nav"
                className="nav-link"
                aria-current="page"
                exact
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="active-nav"
                className="nav-link"
                to="/services"
              >
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="active-nav"
                className="nav-link"
                to="/about"
              >
                About
              </NavLink>
            </li>
            {user?.email ? (
              <>
                <li className="nav-item dropdown mx-2">
                  <NavLink
                    className="nav-link dropdown-toggle username"
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {user?.displayName}
                  </NavLink>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li className="dropdown-item">
                      <NavLink
                        activeClassName="active-nav"
                        className="nav-link"
                        to="/my-bookings"
                      >
                        My Bookings
                      </NavLink>
                    </li>
                    <li className="dropdown-item">
                      <NavLink
                        activeClassName="active-nav"
                        className="nav-link"
                        to="/manage-all-bookings"
                      >
                        Manage all bookings
                      </NavLink>
                    </li>
                    <li className="dropdown-item">
                      <NavLink
                        activeClassName="active-nav"
                        className="nav-link"
                        to="/add-service"
                      >
                        Add a new service
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="dropdown-item">
                  <button
                    onClick={logOut}
                    className="nav-link px-2 rounded-circle my-md-0 my-3 btn logout-btn text-light d-inline-block m-2"
                  >
                    <i className="fas fa-sign-out-alt text-light"></i>
                  </button>
                </li>
              </>
            ) : (
              <li className="nav-item d-flex m-2 align-items-center">
                <NavLink
                  activeClassName="active-nav"
                  to="/login"
                  className="nav-link p-1 my-md-0 my-3 d-inline-block btn header-login-btn text-light"
                >
                  <i class="fas fa-sign-in-alt text-light mx-2 align-items-center"></i>
                  Login
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
