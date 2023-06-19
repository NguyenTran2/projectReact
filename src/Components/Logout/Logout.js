import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Logout() {

    const nav = useNavigate()

    const HandleLogout = () => {
        localStorage.setItem("Email", "")
        nav("/")
    }

  return (
    <div style={{display:'flex', height:'100vh'}}>
        <button style={{margin: 'auto'}} onClick={HandleLogout}>Logout</button>
    </div>
  )
}
