import React from 'react'
import { Navigate } from 'react-router-dom'

export default function PrivateRoute(props) {
  return (
    <div>
        {
            localStorage.getItem("Account") ? 
            props.children : 
            <Navigate to={"/login"}/>
        }
    </div>
  )
}
