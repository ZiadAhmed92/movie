
import React, { useContext} from "react";
import { Link } from "react-router-dom";
import { movieContext } from "../../Context/Store";
import Footer from "../Footer/Footer";
import "./Home.css"

const Home = () => {
  const {trindingMovie ,trindingTv ,trindingPerson} = useContext(movieContext)
  let {addFavouritMovie} =useContext(movieContext)
  return (
    <>
      {trindingMovie ? (
        <>
          {/* movie */}
          <div className="row justify-content-center py-4 ">
            <div className="col-md-4 d-flex align-items-center">
              <div>
                <div className="h1 mb-3 bg-white w-25"></div>
                <h3>
                  Trending <br /> movies <br /> to watch now{" "}
                </h3>
                <h6 className="text-muted">Most watched movies by days</h6>
                <div className="h1 mt-3 bg-white w-100"></div>
              </div>
            </div>
            {trindingMovie.slice(0, 16).map((movie, i) => (
              <div className="movieFavourit col-md-2 col-sm-4 " key={i}>
                
                  <div className="div position-relative ">
                    <div className="position-relative">
                    <Link to={`/moviedetails/${movie.media_type}/${movie.id}`}>
                    <img
                      src={
                        `https://image.tmdb.org/t/p/w500` + movie.poster_path
                      }
                      className="w-100"
                      alt="img"
                    />
                     </Link>
                    <div className="home-favourit position-absolute p-1 ">
                      <h6
                        className="addFavourit ms-2 p-2"
                        onClick={() => addFavouritMovie(movie)}
                      >
                        ADD FAVOURIT
                        <i
                          className="fa-solid fa-star fs-6 p-1 curser-pointer"
                          style={{ color: "#dad72f" }}
                        ></i>
                      </h6>
                    </div>
                    </div>
                    <h6 className="py-2">{movie.original_title}</h6>
                    <h6 className="position-absolute top-0 end-0 bg-info  p-1 ">
                      {movie.vote_count}
                    </h6>
                  </div>
               
              </div>
            ))}

            {/* tv */}
          </div>
          {/* tv */}
          <div className="row justify-content-center py-4 ">
            <div className="col-md-4 d-flex align-items-center">
              <div>
                <div className="h1 mb-3 bg-white w-25"></div>
                <h3>
                  Trending <br /> Tv <br /> to watch now{" "}
                </h3>
                <h6 className="text-muted">Most Watched Tv By Days</h6>
                <div className="h1 mt-3 bg-white w-100"></div>
              </div>
            </div>
            {trindingTv.slice(0, 16).map((movie, i) => (
              <div className="movieFavourit col-md-2 col-sm-4 " key={i}>
               
                <div className="div position-relative ">
                  <div className="div position-relative ">
                  <Link to={`/moviedetails/${movie.media_type}/${movie.id}`}>
                    <img
                      src={
                        `https://image.tmdb.org/t/p/w500` + movie.poster_path
                      }
                      className="w-100"
                      alt="img"
                    />
                     </Link>
                    <div className="home-favourit position-absolute p-1 ">
                      <h6
                        className="addFavourit ms-2 p-2"
                        onClick={() => addFavouritMovie(movie)}
                      >
                        ADD FAVOURIT
                        <i
                          className="fa-solid fa-star fs-6 p-1 curser-pointer"
                          style={{ color: "#dad72f" }}
                        ></i>
                      </h6>
                    </div>
                    </div>
                    <h6 className="py-2">{movie.name}</h6>
                    <h6 className="position-absolute top-0 end-0 bg-info  p-1 ">
                      {movie.vote_count}
                    </h6>
                  </div>
               
              </div>
            ))}
          </div>
          {/* person  */}
          <div className="row justify-content-center py-4 ">
            <div className="col-md-4 d-flex align-items-center">
              <div>
                <div className="h1 mb-3 bg-white w-25"></div>
                <h3>
                  Trending <br /> Person <br /> to watch now{" "}
                </h3>
                <h6 className="text-muted">Most Watched Person By Days</h6>
                <div className="h1 mt-3 bg-white w-100"></div>
              </div>
            </div>
            {trindingPerson.slice(0, 16).map((movie, i) => (
              <div className="col-md-2 col-sm-4 " key={i}>
                <Link to={`/moviedetails/${movie.media_type}/${movie.id}`}>
                
                  <div className="div position-relative ">
                    <img
                      src={
                        `https://image.tmdb.org/t/p/w500` + movie.profile_path
                      }
                      className="w-100"
                      alt="img"
                    />
                    
                    <h6 className="py-2">{movie.name}</h6>
                    <h6 className="position-absolute top-0 end-0 bg-info  p-1 ">
                      {movie.id}
                    </h6>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="vh-100 d-flex justify-content-center align-items-center">
          <i className="spiner-movie fas fa-spinner fa-spin"></i>
        </div>
      )}
      <Footer />{" "}
    </>
  );
};

export default Home;
