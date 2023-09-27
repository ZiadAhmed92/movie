import  axios  from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer'

import './Home.css'

const Home = () => { 

  const[trindingMovie ,setTrindingMovie]=useState([]);
  const[trindingTv ,setTrindingTv]=useState([]);
  const[trindingPerson ,setTrindingPerson]=useState([]);
  console.log(trindingPerson)
  
async function getTrindingMovies(movie ,callback){
        
     let {data} = await axios.get(`https://api.themoviedb.org/3/trending/${movie}/week?api_key=f1aca93e54807386df3f6972a5c33b50`)
     callback(data.results)
     
 
    }
  
   useEffect(()=>{
    getTrindingMovies('movie',setTrindingMovie)
    getTrindingMovies('tv',setTrindingTv)
    getTrindingMovies('person',setTrindingPerson)
  },[])
 


  
  
  return (
    <>
    {trindingMovie?<> 
      {/* movie */}
<div className="row justify-content-center py-4 " >

<div className="col-md-4 d-flex align-items-center">
 <div>
   <div className='h1 mb-3 bg-white w-25'></div>
     <h3>Trending <br/> movies <br/> to watch now </h3>
     <h6 className='text-muted'>Most watched movies by days</h6>
  <div className='h1 mt-3 bg-white w-100'></div>
 </div>
  
</div>
{
trindingMovie.slice(0,10).map((movie,i)=>
  
   
  <div className="col-md-2 col-sm-4 " key={i}>
    <Link  to={`/moviedetails/${movie.media_type}/${movie.id}`}>
      <div className="div position-relative ">
        <img src={`https://image.tmdb.org/t/p/w500`+ movie.poster_path} className='w-100' alt='img'/>  
        <h6 className='py-2'>{movie.original_title}</h6>
        <h6 className='position-absolute top-0 end-0 bg-info  p-1 '>{movie.vote_count}</h6>
      </div>
    </Link>  
  </div>
  

)
}

{/* tv */}

  </div>
      {/* tv */}
  <div className="row justify-content-center py-4 " >

<div className="col-md-4 d-flex align-items-center">
 <div>
   <div className='h1 mb-3 bg-white w-25'></div>
     <h3>Trending <br/> Tv <br/> to watch now </h3>
     <h6 className='text-muted'>Most Watched Tv By Days</h6>
  <div className='h1 mt-3 bg-white w-100'></div>
 </div>
  
</div>
{
trindingTv.slice(0,10).map((movie,i)=> 
  <div className="col-md-2 col-sm-4 " key={i}>
     <Link  to={`/moviedetails/${movie.media_type}/${movie.id}`}>
      <div className="div position-relative ">
        <img src={`https://image.tmdb.org/t/p/w500`+ movie.poster_path} className='w-100' alt='img'/>  
        <h6 className='py-2'>{movie.name}</h6>
        <h6 className='position-absolute top-0 end-0 bg-info  p-1 '>{movie.vote_count}</h6>
      </div>
    </Link>  
  </div>
  

)
}
  </div>
      {/* person  */}
      <div className="row justify-content-center py-4 " >

<div className="col-md-4 d-flex align-items-center">
<div>
  <div className='h1 mb-3 bg-white w-25'></div>
    <h3>Trending <br/> Person <br/> to watch now </h3>
    <h6 className='text-muted'>Most Watched Person By Days</h6>
 <div className='h1 mt-3 bg-white w-100'></div>
</div>
 
</div>
{
trindingPerson.slice(0,10).map((movie,i)=>
 
 
 <div className="col-md-2 col-sm-4 " key={i}>
   <Link  to={`/moviedetails/${movie.media_type}/${movie.id}`}>
     <div className="div position-relative ">
       <img src={`https://image.tmdb.org/t/p/w500`+ movie.profile_path} className='w-100' alt='img'/>  
       <h6 className='py-2'>{movie.name}</h6>
       <h6 className='position-absolute top-0 end-0 bg-info  p-1 '>{movie.id}</h6>
     </div>
   </Link>  
 </div>
 

)
}


 </div>    
</>:<div className='vh-100 d-flex justify-content-center align-items-center'><i className='spiner-movie fas fa-spinner fa-spin'></i></div>}
 <Footer/> </>)
}

export default Home