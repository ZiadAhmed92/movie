import React from 'react'
import Login from '../Login/Login'

const ProtectedRouter = ({userData,dataUser, children}) => {
 if(userData === null){
    return <Login dataUser={dataUser}/>
 }else{
  return children
 }
}

export default ProtectedRouter