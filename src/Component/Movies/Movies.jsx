import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Movies = () => {
  let[movie , setMovie]=useState([]);
  let arr = new Array(13).fill(1).map((elem , i )=> i+1)
    async function getMovie(pageNumber){
  
      let {data} = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=f1aca93e54807386df3f6972a5c33b50&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}`);
   
    setMovie(data.results)
    }
      
  
    useEffect(()=>{
      
  getMovie(1);
    
    },[])
    return (
      <>{movie?<>   { <div className="row justify-content-center">
       
  {movie.map((movie , i)=>
  <div className='col-md-2 position-relative  my-2' key={i}>
  
  
  <Link  to={`/moviedetailscompleted/${movie.id}`}>
  <img src={`https://image.tmdb.org/t/p/w500`+ movie.poster_path} className=' w-100'alt=''/>
  <h6 className='py-2'>{movie.original_title}</h6>
  <h6 className='position-absolute top-0 bg-info p-1 '>{movie.vote_count}</h6>
  </Link>
  
  </div>
  )} 
  
  
      </div>}
  
      <nav aria-label="Page navigation example">
    <ul className="pagination d-flex justify-content-center ">
      {
       arr.map((ele)=>
        <li key={ele} onClick={()=>getMovie(ele)} className="page-item "><div className="page-link">{ele}       </div></li>
  
       )
      }
  
    </ul>
  </nav></>: <div className='vh-100 d-flex justify-content-center align-items-center'><i className='spiner-movie fas fa-spinner fa-spin'></i></div>}
   
      </>
    )
  }
  
export default Movies