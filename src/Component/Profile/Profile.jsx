import React from 'react'
import imgProfile from '../../Image/profile.jpg'
const Profile = ({userData}) => {
  return (
    <>
    <div className="container ">
        <div className="row align-items-center">
            <div className="col-md-6">
                {userData? <img src={imgProfile} alt='img' className='py-5 rounded-circle w-75 ' />:''}
               
            </div>
            <div className="col-md-6">
            {userData? <>  <h3 className='py-1'>Email : {userData.email} </h3>
                <h3 className='py-1'>First_name : {userData.first_name}</h3>
                <h3 className='py-1'>Last_name : {userData.last_name}</h3>
                <h3 className='py-1'>Age : {userData.age} </h3> </>:''
                }
               
            </div>
            <div className="col-md-12">
              <h1 className='text-danger text-center'>Design By Ziad</h1>
            </div>
        </div>
    </div>
    </>
  )
}

export default Profile