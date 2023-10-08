import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Layout = ({
  userData,
  logOut,
  setUserdata,
 
}) => {
  return (
    <div>
      <Navbar
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
