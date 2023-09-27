import  axios  from 'axios'
import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import TVShow from './TVShow';

const Tv = () => {

  const[trindingTv ,setTrindingTv]=useState([]);
  const[src ,setSrc]=useState("");
  const[data ,setData]=useState([]);
  
  async function getTrindingMovies(movie ,callback){
        
    let {data} = await axios.get(`https://api.themoviedb.org/3/trending/${movie}/week?api_key=f1aca93e54807386df3f6972a5c33b50`)
    callback(data.results)
    

   }
 
  useEffect(()=>{
  
   getTrindingMovies('tv',setTrindingTv)

 },[])
 function tvShow(e,name){
  setSrc(e.target.src)
  setData(name)

 }
  return (
  <>
  <TVShow src={src} data={data}/>
    <div>
      <div className="container  ">
        <div className="row pt-5   ">
      {trindingTv.slice(0,10).map((movie,i)=> 
      
          <div className="col pt-3" key={i}>
          
               <div className="div " >
                  <img src={`https://image.tmdb.org/t/p/w500`+ movie.poster_path} onClick={(e)=> tvShow(e,[movie.name,movie.vote_count,movie.overview,movie.original_language,movie.first_air_date])}className='img-tv w-100' alt='img'/>  
                  <h6 className='py-2'>{movie.name}</h6>
                 
               </div>
           
        </div>
    

  

)
} 
  </div>
     </div>
    </div>
 <Footer/> </>)
}

export default Tv