import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";
import Favourites from "../Favourites/Favourites";
import { movieContext } from "../../Context/Store";

const Navbar = ({
  userData,

  logOut,
}) => {
  let { favourites, removeFavouritMovie } = useContext(movieContext);
  return (
    <>
      <nav className=" navbar navbar-expand-lg  navbar-dark ">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold" to="">
            NOXE
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {userData ? (
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="movies"
                  >
                    Movies
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="tv">
                    Tv
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="people"
                  >
                    People
                  </Link>
                </li>
                <li className="parent-favourit m-2 ">
                 
                  <Favourites />
                </li>
                {/* <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="about">About</Link>
        </li> */}
              </ul>
            ) : (
              ""
            )}

            <ul className="navbar-nav d-flex align-items-center ms-auto mb-2 mb-lg-0">
              {userData ? (
                <>
                  <li className="nav-item mx-3 ">
                    <a href="https://www.facebook.com/profile.php?id=100009338019129">
                      <i className="fab fa-facebook mx-2"></i>
                    </a>
                    <a href="https://mail.google.com/mail/u/0/#inbox">
                      <i className="fa-brands fa-google mx-2"></i>
                    </a>
                    <a href="https://twitter.com/ZiadAhm27793817">
                      <i className="fab fa-twitter mx-2"></i>
                    </a>
                    <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile">
                      <i className="fa-brands fa-linkedin mx-2"></i>
                    </a>
                    <a href="https://wa.me/01559992401">
                      <i className="fa-brands fa-whatsapp mx-2"></i>
                    </a>
                  </li>

                  <li className="nav-item">
                    <span
                      className="logout nav-link active"
                      onClick={logOut}
                      aria-current="page"
                    >
                      Logout
                    </span>
                  </li>
                  <Link to="profile">
                    <i className="fa-solid fa-user rounded-circle border mx-3 p-2"></i>
                  </Link>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="login"
                    >
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="register"
                    >
                      Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
