
import Offcanvas from "react-bootstrap/Offcanvas";

import React, { useContext, useState } from "react";
import { movieContext } from "../../Context/Store";

const Favourites = () => {
  let {favourites ,removeFavouritMovie} =useContext(movieContext)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(!show);
  return (
    <div >
      <div className=" btn-favourit " variant="primary" onClick={handleShow}>
        Favourites {favourites.length == 0 ? "" : favourites.length}
      </div>

      <Offcanvas className="offcanvas" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>FAVOURITES MOVIES</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="container">
            <div className="row">
              
              {favourites.map((movie ,i) => (
            <div className="col-md-6" key={i}>
              <div>
             <div className="img-remove position-relative">
             <img
                src={`https://image.tmdb.org/t/p/w500` + movie.poster_path}
                className="w-100 h-100 my-2"
                alt="img"
              />
                <div className="icon-remove home-favourit position-absolute p-1 ">
                      <h6
                        className="addFavourit ms-2 p-2"
                        onClick={() => removeFavouritMovie(movie)}
                      >
                       REMOVE
                <i
                  className="icon-remove fa-solid fa-trash ms-2"
                  style={{ color: "#f01414" }}
                ></i>
                      </h6>
                    </div>
             </div>

              <div>
                <h6 className="small">{movie.name}</h6>
                <h6 className="small">{movie.original_title}</h6>
              </div>
              </div>
           
             
            </div>
          ))}
              
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Favourites;
