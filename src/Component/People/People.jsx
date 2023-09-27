import  axios  from 'axios'
import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import PeopleShow from './PeopleShow';
const People = () => {

  const[trindingPerson ,setTrindingPerson]=useState([]);
  const[data ,setData]=useState([]);
  const[url ,setUrl]=useState("")
  
  async function getTrindingMovies(person ,callback){
        
    let {data} = await axios.get(`https://api.themoviedb.org/3/trending/${person}/week?api_key=f1aca93e54807386df3f6972a5c33b50`)
    callback(data.results)
    

   }
 
  useEffect(()=>{
  
   getTrindingMovies('person',setTrindingPerson)

 },[])
 function tvShow(e,name){
 
  setData(name)
  setUrl(e.target.src)

 }
  return (
    <>
    <PeopleShow url={url}   data={data}/> 
      <div>
        <div className="container  ">
          <div className="row pt-5   ">
        {trindingPerson.slice(0,10).map((movie,i)=> 
        
            <div className="col pt-3" key={i}>
            
                 <div className="div " >
                    <img src={`https://image.tmdb.org/t/p/w500`+ movie.profile_path} 
                    onClick={(e)=> tvShow(e,
                    [movie.name
                    ,movie.known_for_department
                    ,movie.known_for])}
                    className='img-tv w-100'
                     alt='img'/>  
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

export default People