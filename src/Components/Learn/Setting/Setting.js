import React , { useState } from 'react'
import './Setting.scss'
import icon from '../Setting/settings.png'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Setting() {
    const [oldpassword, setCurrentPassword] = useState("")
    const [newpassword, setNewPassword] = useState("")
    
    const nav = useNavigate();
    const HandleSuccess1 = () => toast.success("Change password success!",{
        position: toast.POSITION.TOP_CENTER
      });
    const HandleFail1 = () => toast.error("Change password fail!",{
        position: toast.POSITION.TOP_CENTER});
      const HandleChange = () => {

        fetch(`https://localhost:7071/api/Users/ChangePassword?userName=${localStorage.getItem("Name")}&oldPassword=${oldpassword}&newPassword=${newpassword}`, 
        {
            method: 'PUT',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }            
        })
        .then(res => {
          console.log(res);
          if(res.status == 200){
            HandleSuccess1("Change password success!")
            nav("/login")
          }else {
            HandleFail1("Change password fail!")
          }
        })
      }

    const [avatar, setAvatar] = useState(localStorage.getItem("LinkAvatar"))
    const HandleSuccess = () => toast.success("Change avatar success!",{
      position: toast.POSITION.TOP_CENTER
    });
    const HandleFail = () => toast.error("Change avatar fail!",{
      position: toast.POSITION.TOP_CENTER});
    const HandleChangePicture = (param) => {
        fetch(`https://localhost:7071/api/Users/ChangeAvatar?userID=${localStorage.getItem("ID")}&linkAvatar=${param}`, 
            {
                method: 'PUT',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                }            
            })
            .then(res => {
              console.log(res);
              if(res.status == 200){
                localStorage.setItem("LinkAvatar", param)
                setAvatar(param)
                HandleSuccess("Change avatar success!")
              }else {
                HandleFail("Change avatar fail!")
              }
            })
    }
  return (

    <div className='settingall'>
        <div className='setting'>
            <div className='profile-picture'>
                <div className='profile'>
                    <img className='profile-img' alt='aaa' src={avatar} />
                    <p>Profile Picture</p>
                </div>
                
                <div className='choose-picture'>
                    <p>Choose your profile picture</p>
                    <div>
                        <ToastContainer/>
                        <img onClick={()=>{HandleChangePicture('https://graph.facebook.com/1413622616119534/picture?type=large')}} className='profile1-img' alt='aaa' src='https://graph.facebook.com/1413622616119534/picture?type=large' />
                        
                        <img onClick={()=>{HandleChangePicture('https://assets.quizlet.com/a/j/dist/app/i/animals/107.bb531c1b3ceac29.jpg')}}className='profile1-img' alt='aaa' src='https://assets.quizlet.com/a/j/dist/app/i/animals/107.bb531c1b3ceac29.jpg' />
                        <img onClick={()=>{HandleChangePicture('https://assets.quizlet.com/a/j/dist/app/i/animals/116.cda755979f5721a.jpg')}}className='profile1-img' alt='aaa' src='https://assets.quizlet.com/a/j/dist/app/i/animals/116.cda755979f5721a.jpg' />
                        <img onClick={()=>{HandleChangePicture('https://assets.quizlet.com/a/j/dist/app/i/animals/108.390115418945503.jpg')}}className='profile1-img' alt='aaa' src='https://assets.quizlet.com/a/j/dist/app/i/animals/108.390115418945503.jpg' />
                        <img onClick={()=>{HandleChangePicture('https://assets.quizlet.com/a/j/dist/app/i/animals/112.e6227755ff72868.jpg')}}className='profile1-img' alt='aaa' src='https://assets.quizlet.com/a/j/dist/app/i/animals/112.e6227755ff72868.jpg' />
                        <img onClick={()=>{HandleChangePicture('	https://assets.quizlet.com/a/j/dist/app/i/animals/122.c41ad18a194cfde.jpg')}}className='profile1-img' alt='aaa' src='	https://assets.quizlet.com/a/j/dist/app/i/animals/122.c41ad18a194cfde.jpg' />
                        <img onClick={()=>{HandleChangePicture('		https://assets.quizlet.com/a/j/dist/app/i/animals/113.eafba0bdf330db5.jpg')}}className='profile1-img' alt='aaa' src='		https://assets.quizlet.com/a/j/dist/app/i/animals/113.eafba0bdf330db5.jpg' />
                        <img onClick={()=>{HandleChangePicture('		https://assets.quizlet.com/a/j/dist/app/i/animals/114.1593b595f8027ba.jpg')}}className='profile1-img' alt='aaa' src='		https://assets.quizlet.com/a/j/dist/app/i/animals/114.1593b595f8027ba.jpg' />
                        <img onClick={()=>{HandleChangePicture('			https://assets.quizlet.com/a/j/dist/app/i/animals/118.3dc6b72fd152076.jpg')}}className='profile1-img' alt='aaa' src='	https://assets.quizlet.com/a/j/dist/app/i/animals/118.3dc6b72fd152076.jpg' />
                        <img onClick={()=>{HandleChangePicture('		https://assets.quizlet.com/a/j/dist/app/i/animals/119.fe8084aaef12da7.jpg')}}className='profile1-img' alt='aaa' src='		https://assets.quizlet.com/a/j/dist/app/i/animals/119.fe8084aaef12da7.jpg' />
                        <img onClick={()=>{HandleChangePicture('		https://assets.quizlet.com/a/j/dist/app/i/animals/121.2e69ce6545986ab.jpg')}}className='profile1-img' alt='aaa' src='	https://assets.quizlet.com/a/j/dist/app/i/animals/121.2e69ce6545986ab.jpg' />
                        <img onClick={()=>{HandleChangePicture('		https://assets.quizlet.com/a/j/dist/app/i/animals/123.7e2616c298df6c0.jpg')}}className='profile1-img' alt='aaa' src='		https://assets.quizlet.com/a/j/dist/app/i/animals/123.7e2616c298df6c0.jpg' />
                        <img onClick={()=>{HandleChangePicture('		https://assets.quizlet.com/a/j/dist/app/i/animals/124.7cb3e74e1ecd4ca.jpg')}}className='profile1-img' alt='aaa' src='		https://assets.quizlet.com/a/j/dist/app/i/animals/124.7cb3e74e1ecd4ca.jpg' />
                        <img onClick={()=>{HandleChangePicture('			https://assets.quizlet.com/a/j/dist/app/i/animals/126.f207b8e022a4971.jpg')}}className='profile1-img' alt='aaa' src='			https://assets.quizlet.com/a/j/dist/app/i/animals/126.f207b8e022a4971.jpg' />


                    </div>
                    
                </div>
            </div>
        </div>
        <div className='setting1'>
            <div className='setting-password'>
                <div className='profile1'>
                    <img className='setting-img' alt='aaa' src={icon}/>
                    <p>Change your Password</p>
                </div>
                
                <div className='choose-picture1'>
                    <div className='p1'>
                        <span>Change your password</span>
                    </div>
                    
                    <div className='bt1'>

                        <input onChange={(event) => {setCurrentPassword(event.target.value)}}></input>
                        <span>CURRENT PASSWORD</span>
                    </div>
                    <div className='bt1'>

                        <input onChange={(event) => {setNewPassword(event.target.value)}}></input>
                        <span>NEW PASSWORD</span>
                    </div>
                    <div className='bt1'>

                        <input></input>
                        <span>CONFIRM NEW PASSWORD</span>
                    </div>
                    
                        <button className='bt-submit' onClick={HandleChange}>Submit</button>
                        <ToastContainer/>
                    
                </div>
                
            </div>
        </div>
       
    </div>
  )
}
