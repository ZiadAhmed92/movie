import React, { useState  } from 'react'
import { useNavigate} from 'react-router-dom'
import '../Register/Register.css'
import axios from 'axios'
import joi from 'joi'
const Login = ({dataUser}) => {

  let Navigate = useNavigate();
  const[error ,setError]= useState("")
  const[errorList ,setErrorList]= useState([])
  const[loading ,setLoading]= useState(false)
  const[user ,setUser] = useState({
           email:'',
           password:''
           });

           function getUserData(e){   
                let myuser = {...user};
                myuser[e.target.name] = e.target.value;
                setUser(myuser)       
                 
           }
           async function sendUserData(){
              let {data} = await axios.post(`https://movies-api.routemisr.com/signin`,user);
              
              if(data.message === "success"){
                localStorage.setItem('userToken',data.token)               
                dataUser()
                Navigate("/")
              }else{
                setLoading(false)
                setError(data.message)
                
              }
           }
           function submitLogin(e){
            
            setLoading(true);
              e.preventDefault();
             let validation = validateLoginForm();
            
             if(validation.error){
                setErrorList(validation.error.details);
                setLoading(false)
             }
             else{
              sendUserData();
             }
              
           }
           function validateLoginForm(){
            let schema = joi.object({
              email : joi.string().email({tlds:{allow : ['com','net']}}),
              password : joi.string().pattern(new RegExp('^[a-zA-Z0-9]{6,30}$')),

            })
              return  schema.validate(user,{abortEarly:false})
           }
  return (
    <>
    
    <form onSubmit={submitLogin} className="from-Register  w-75 ms-auto my-5">
    {error?<p className='w-75 alert alert-danger text-danger'>{error} </p>:""} 
    {errorList.map( (error,i) =>{
      if(error.context.label === 'password'){
        return <p key={i} className='w-75 p-2 alert alert-danger text-danger'>The password is weak and must not be less than five numbers </p>
      }else{
         return <p key={i} className='w-75 p2 alert alert-danger text-danger'>{error.message} </p>

      }
    })} 
      <h4> Login From</h4>

    
    
     
      <label htmlFor='Email' className='text-Rgister my-2'>Email :</label>
      <input type='email' id='Email' className='my-input form-control w-75'name='email'onChange={getUserData} />
      
    
      <label htmlFor='p assword' className='text-Rgister my-2'>Password :</label>
      <input type='password' id='password' className='my-input form-control w-75'name='password'onChange={getUserData} />
      
     <button type='submit' className='btn btn-outline-info my-4'>{ loading ?<i className='fas fa-spinner fa-spin'></i> :'Login'}</button>

    </form>
 
  </>
  )
}

export default Login