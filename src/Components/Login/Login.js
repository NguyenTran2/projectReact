import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.scss'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login(props) {


    const nav = useNavigate()

    const [account, SetAccount] = useState('')
    const [password, SetPassword] = useState('')
    const HandleFail1 = () => toast.error("Login fail!",{
      position: toast.POSITION.TOP_CENTER});
    const HandleLogin = () => {
        fetch(`https://localhost:7071/api/Users/Login?userName=${account}&password=${password}`, 
        {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if(data.status != 400 ) {
            localStorage.setItem("Account",data.account)
            localStorage.setItem("ID",data.id)
            localStorage.setItem("LinkAvatar",data.linkAvatar)
            localStorage.setItem("Name",data.name)
            nav("/")
            props.login()
          }else {
            HandleFail1("Login fail!")
          }

        })
    }

  return (
    <div className='Login'>
        <div className='login-img1'>
        <img className='login-img1' alt='aaa' src='	https://assets.quizlet.com/a/j/dist/app/i/signup/QZ_Auth_Light.f0832112f8d66a6.png' />
        </div>
        <div className='Loginn'>
          <div className='tieude'>
            <h1>Log In</h1>
          </div>
          
          <input placeholder='Nhập email hoặc tên người dùng của bạn' className='login-input' onChange={(event) => {SetAccount(event.target.value)}}/>
          <p> Account </p>
          
          <input placeholder='Nhập mật khẩu' className='login-input' type={'password'} onChange={(event) => {SetPassword(event.target.value)}}/>
          <div className='pass'>
            <p>Password </p>
            
          </div>
          <div className='dichvu'>
            <p>By logging in, you accept the Terms of Service
              and Quizz's Privacy Policy.</p>
          </div>
          
          <button className='dangnhap' onClick={HandleLogin}>Log In</button>
          <ToastContainer/>
          <div className='pass1'>
            <p>Remember to sign out on the shared device </p>
            
          </div>
        </div>
    </div>
  )
}
