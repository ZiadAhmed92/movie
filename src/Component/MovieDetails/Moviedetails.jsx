import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'


const Moviedetails = () => {
  let {id , media_type} =useParams()
  const[movieDetails,setMovieDetails] = useState({})
          async function moviedetails(id , media_type){
                let {data} = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}?api_key=f1aca93e54807386df3f6972a5c33b50&language=en-US`)
           
                setMovieDetails(data)

                }
                useEffect(()=>{
                  moviedetails(id,media_type)
                },[])
               
  return (
    <div>
       <Link to="/" > <i className="my-4 prev fa-solid fa-arrow-right fa-rotate-180"></i></Link>
    {movieDetails? <div className="row">
        <div className="col-md-4 d-flex align-items-center ">
           
            <img src={movieDetails.poster_path?"https://image.tmdb.org/t/p/w500"+movieDetails.poster_path:"https://image.tmdb.org/t/p/w500"+movieDetails.profile_path} className="w-100 h-100" alt="img" />
        </div>
        <div className="col-md-8   ">
            <h1 className=' mb-3'>{movieDetails.name}</h1>
            <h1 className=' mb-3'>{movieDetails.original_title}</h1>
            <button type="button" className="btn mx-1 btn-primary">Primary</button>
            <button type="button" className="btn mx-1 btn-secondary">Secondary</button>
            <button type="button" className="btn mx-1 btn-success">Success</button> 
            
            <ul className='my-4'>
                <li className='py-2'>Popularity : {movieDetails.popularity}</li>
                <li className='py-2'>Original_language : {movieDetails.original_language==='en'?"English":"en"}</li>
                <li className='py-2'>Id : {movieDetails.id}</li>
                {/* <li className='py-2'>Genres : {movieDetails.genres[0].name}</li> */}
                <li className='py-2'>Homepage : {movieDetails.homepage?<Link to={movieDetails.homepage} className='link-movieDetails'>{movieDetails.homepage}</Link>:  "  NO Link" } </li>
            </ul>
            <p className='py-3 text-muted text-capitalize'>{movieDetails.overview}</p>
        </div>
    </div>:<div className='vh-100 d-flex align-items-center'><h1>I'm sorry, there is no content at the moment, please try again</h1></div>


    }
    
    </div>
  )
}

export default Moviedetails