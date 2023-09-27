import React from 'react'

const PeopleShow = ({data ,url}) => {
    console.log(data)
    
   
    return (
        <div >
            <div className="container mt-3 pt-3 ">
                <div className="row ">
                    <div className="col-md-4">
                    <img src={url?url:"https://image.tmdb.org/t/p/w500/nraZoTzwJQPHspAVsKfgl3RXKKa.jpg"} className=' w-100 h-100 'alt='img' />
                    
                    </div>
                    <div className="col-md-8 ">
                    
                        <h1 className='mb-3'>{data[0]?data[0]:"Jackie Chan"}</h1>
                        <h3 className='pt-5'>Department : {data[1]?data[1]:"Action"}</h3>
                       <div className="container">
                        <div className="row">
                            <div className="col-md-4 pt-5">
                                <div className="div">
                                    <img src={data[2]?`https://image.tmdb.org/t/p/w500${data[2][0].poster_path}`:"https://image.tmdb.org/t/p/w500/we7wOLVFgxhzLzUt0qNe50xdIQZ.jpg"}  className='w-75 h-50' alt='img' />
                                    <h6 className='h6 py-2'>{data[2]?data[2][0].original_title:"Rush Hour"}</h6>
                                </div>
                            </div>
                            <div className="col-md-4 pt-5">
                                <div className="div">
                                <img src={data[2]?`https://image.tmdb.org/t/p/w500${data[2][1].poster_path}`:"https://image.tmdb.org/t/p/w500/rZ7IxJlPhNNJ6Rn8z1rzsXuA70P.jpg"}  className='w-75 h-50' alt='img' />
                                <p className='h6 py-2'>{data[2]?data[2][1].original_title:"Rush Hour 2"}</p>
 
                                </div>
                            </div>
                            <div className="col-md-4 pt-5">
                                <div className="div">
                                <img src={data[2]?`https://image.tmdb.org/t/p/w500${data[2][2].poster_path}`:"https://image.tmdb.org/t/p/w500/aBQf2vMiCINeVC9v6BGVYKXurTh.jpg"}  className='w-75 h-50' alt='img' />
                                <p className='h6 py-2'>{data[2]?data[2][2].original_title:"Rush Hour 3"}</p>
                                </div>
                            </div>
                        </div>
                       </div>
                        {/* <h5 className='my-3'>Language : {data[3]?data[3]==="en"?"English":data[3]:"English"}</h5>
                        <button type="button" className="btn mx-1 my-1 btn-primary">Crime</button>
                        <button type="button" className="btn mx-1 my-1 btn-secondary">Drama</button>
                        <button type="button" className="btn mx-1 my-1 btn-success">Mystery</button> 
                        <h6 className='text-muted mt-4'>{data[2]?data[2]:"Winston Scott is roped into a world of assassins and must make things right after his brother's attack on the Continental hotel."}</h6>
                     */}
                       
                       </div>
                </div>
            </div>
        </div>
      )
}

export default PeopleShow