import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Layout = ({
  userData,
  logOut,
  setUserdata,
  favourites,
  removeFavouritMovie,
  addFavouritMovie,
}) => {
  return (
    <div>
      <Navbar
        favourites={favourites}
        removeFavouritMovie={removeFavouritMovie}
        addFavouritMovie={addFavouritMovie}
        userData={userData}
        logOut={logOut}
        setUserdata={setUserdata}
      />
      <div className="container">
        <Outlet></Outlet>
      </div>
      {/* {userData?<Footer/>:""} */}
    </div>
  );
};

export default Layout;
