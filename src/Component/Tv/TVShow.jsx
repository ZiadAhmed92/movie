import React from 'react'

const TVShow = ({src,data}) => {
console.log(data)
console.log(src)
  return (
    <div >
        <div className="container mt-3 ">
            <div className="row ">
                <div className="col-md-4  position-relative">
                <img src={src?src:"https://image.tmdb.org/t/p/w500/v1YEOdGptCyNxnc4mJSYNd4cE8E.jpg"} className=' w-100 h-100 'alt='img' />
                <h6 className='position-absolute top-0  bg-info  p-1 '>{data[1]?data[1]:"52"}</h6>
                </div>
                <div className="col-md-8 ">
                
                    <h1 className='mb-3'>{data[0]?data[0]:"The Continental: From the World of John Wick"}</h1>
                    <h5 className='my-3'>Data : {data[4]?data[4]:"2023-09-22"}</h5>
                    <h5 className='my-3'>Language : {data[3]?data[3]==="en"?"English":data[3]:"English"}</h5>
                    <button type="button" className="btn mx-1 my-1 btn-primary">Crime</button>
                    <button type="button" className="btn mx-1 my-1 btn-secondary">Drama</button>
                    <button type="button" className="btn mx-1 my-1 btn-success">Mystery</button> 
                    <h6 className='text-muted mt-4'>{data[2]?data[2]:"Winston Scott is roped into a world of assassins and must make things right after his brother's attack on the Continental hotel."}</h6>
                
                   
                   </div>
            </div>
        </div>
    </div>
  )
}

export default TVShow