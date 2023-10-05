import './App.css';
import Layout from '../Component/Layout/Layout'
import Home from '../Component/Home/Home'
import Login from '../Component/Login/Login'
import Movies from '../Component/Movies/Movies'
import People from '../Component/People/People'
import Profile from '../Component/Profile/Profile'
import Register from '../Component/Register/Register'
import About from '../Component/About/About'
import Tv from '../Component/Tv/Tv'
import Notfound from '../Component/Notfound/Notfound';
import {createBrowserRouter ,Navigate,RouterProvider} from 'react-router-dom'
import jwtDecode from 'jwt-decode';
import { useEffect, useState } from 'react';
import ProtectedRouter from '../Component/ProtectedRouter/ProtectedRouter';
import Moviedetails from '../Component/MovieDetails/Moviedetails';
import MovieDetailsCompleted from '../Component/MovieDetails/MovieDetailsCompleted';
import Favourites from '../Component/Favourites/Favourites';


function App() {
  const[userData , setUserdata] = useState(null)
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
    useEffect(()=>{
      if(localStorage.getItem('userToken') !== null){
        dataUser()
      }},[])

    function logOut(){
      localStorage.removeItem('userToken');
      setUserdata(null)
     
      return <Navigate to='/login'/>
    }
    function dataUser(){
      let token = localStorage.getItem('userToken');
      let userData = jwtDecode(token);
      setUserdata(userData)

    }
  let router = createBrowserRouter([
    {path:"/" , element:<Layout favourites={favourites} removeFavouritMovie={removeFavouritMovie} userData={userData} logOut={logOut} setUserdata={setUserdata}/>,children:[
      {index:true , element:<ProtectedRouter dataUser={dataUser} userData={userData}><Home favourites={favourites} removeFavouritMovie={removeFavouritMovie} addFavouritMovie={addFavouritMovie}/></ProtectedRouter>},
      {path:"login" , element:<ProtectedRouter dataUser={dataUser} userData={userData}><Login dataUser={dataUser}/></ProtectedRouter>},
      {path:"movies" , element:<ProtectedRouter dataUser={dataUser} userData={userData}><Movies/></ProtectedRouter>},
      {path:"people" , element:<ProtectedRouter dataUser={dataUser} userData={userData}><People/></ProtectedRouter>},
      {path:"profile" , element:<ProtectedRouter dataUser={dataUser} userData={userData}><Profile userData ={userData}/></ProtectedRouter>},
      {path:"moviedetails/:media_type/:id" , element:<ProtectedRouter dataUser={dataUser} userData={userData}><Moviedetails userData ={userData}/></ProtectedRouter>},
      {path:"moviedetailscompleted/:id" , element:<ProtectedRouter dataUser={dataUser} userData={userData}><MovieDetailsCompleted userData ={userData}/></ProtectedRouter>},
      {path:"register" , element:<Register/>},
      {path:"tv" , element:<ProtectedRouter dataUser={dataUser} userData={userData}><Tv/></ProtectedRouter>},
      {path:"about" , element:<ProtectedRouter dataUser={dataUser} userData={userData}><About/></ProtectedRouter>},
      {path:"*" , element:<Notfound/>},
      
    
    ]}
  ])

  return <>
   {/* <Favourites/> */}
  <RouterProvider router={router}/>
 
  </>
}

export default App;
