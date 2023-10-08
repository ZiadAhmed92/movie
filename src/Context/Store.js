import { createContext, useState , useEffect } from "react";
import axios from "axios";
export let movieContext = createContext(0);

export default function MoviesContextProvider(props){
 
    const [trindingMovie, setTrindingMovie] = useState([]);
    const [trindingTv, setTrindingTv] = useState([]);
    const [trindingPerson, setTrindingPerson] = useState([]);
   
  
    async function getTrindingMovies(movie, callback) {
      let { data } = await axios.get(
        `https://api.themoviedb.org/3/trending/${movie}/week?api_key=f1aca93e54807386df3f6972a5c33b50`
      );
      callback(data.results);
    }
  
    useEffect(() => {
      getTrindingMovies("movie", setTrindingMovie);
      getTrindingMovies("tv", setTrindingTv);
      getTrindingMovies("person", setTrindingPerson);
    }, []);
    // Add And Remove Movies 
    const [favourites, setFavourites] = useState([]);
    function addFavouritMovie(movie) {
      if (favourites.find((fav) => fav.id === movie.id) == null) {
        setFavourites([...favourites, movie]);
      } else {
        window.alert("Already Added");
      }
    }
    function removeFavouritMovie(movie) {
      let newFavourit = favourites.filter(
        (moviedelete) => movie.id !== moviedelete.id
      );
      setFavourites(newFavourit);
      //  window.alert("Are You Sure To Remove This Movie From Favourites ?")
    }

    return <movieContext.Provider value={{trindingMovie ,trindingTv ,trindingPerson ,favourites ,addFavouritMovie ,removeFavouritMovie}}>
    {props.children}
    </movieContext.Provider>

}


    