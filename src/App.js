import React, { useState } from 'react'
import './App.scss'
import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom'
import Home from './Components/Home/Home'
import HomeLogined from './Components/Home/HomeLogined'
import Login from './Components/Login/Login'
import Logout from './Components/Logout/Logout'
import PrivateRoute from './Components/PrivateRoute/PrivateRoute'
import Write from './Components/Learn/Write/Write'
import FlashCard from './Components/Learn/FlashCard/FlashCard'
import WriteResult from './Components/Learn/Write/WriteResult'
import CreateSet from './Components/Learn/Create/CreateSet'
import Learn from './Components/Learn/Learn/Learn'
import LearnOverview from './Components/Learn/Learn/LearnOverview'
import LearnTrueFalse from './Components/Learn/Learn/LearnTrueFalse'
import Register from './Components/Learn/Register/Register'
import Course from './Components/Learn/Course/Course'
import Edit from './Components/Learn/Edit/Edit'
import Folder from './Components/Learn/Folder/Folder'
import FolderDetail from './Components/Learn/Folder/FolderDetail'
import Header from './Components/Header/Header'
import Setting from './Components/Learn/Setting/Setting'
import LearnResult from './Components/Learn/Learn/LearnResult'

export default function App() {

  const [login, SetLogin] = useState("")

  const HandleLogin = () => {
    SetLogin("Logined")
  }

  return (
    <div className='App' >
      <BrowserRouter>
      {/*<div className='library' style={{display: library}} onClick={(e) => {e.stopPropagation()}}>
        <div className='library-header'>
          <h3 onClick={HandleShowCourse} style={{color:cssLibrarySet}} >Study sets</h3>
          <h3 onClick={HandleShowFolder} style={{color:cssLibraryFolder}}>Folders</h3>
        </div>
        <div className='library-center'>
          {dataCourse.length > 0 && 
            dataCourse.map(x => {
              return <Link className='library-content' to={`/flashcard/${x.id}`}>
                        <h4>{x.name}</h4>
                        <div className='library-img'>
                          <img className='library-img1' alt='profile' src={x.user.linkAvatar}/>
                          <p >{x.user.account}</p>
                        </div>
                      </Link>
            })
          }
          
          {dataFolder.length > 0 && 
            dataFolder.map(x => {
              return <Link className='library-content' to={`/folder/${x.id}`}>
                        <h4>{x.name}</h4>
                        <div className='library-img'>
                          {/* <img className='library-img1' alt='profile' src={x.user.linkAvatar}/>
                          <p >{x.countSet} sets</p>
                        </div>
                      </Link>
            })
          }
        </div>
        <div className='library-footer'>
          {cssLibrarySet == "Blue" ? <Link to={`/course`}>View all sets</Link> : <Link to={`/folder`}>View all folders</Link>}
          </div>
      </div>

      <div className='Add' style={{display: add}} onClick={(e) => {e.stopPropagation()}}>
        <Link className='study-set' to={"/createcourse"}>
            <img className='study-img' alt='aaa' src='/Img/reading-book.png'/>
            <p>Study set</p>
        </Link>
        <div className='folder' onClick={(e) => {HandleFolder(e)}}>
            <img className='folder-img' alt='aaa' src='/Img/folder.png'/>
            <p>Folder</p>
        </div>
      </div>

      <div className='add-folder-modal-app'  style={{display: folder}} onClick={HandleModalFolder}>
            <div className='add-folder-box-app' onClick={(e) => {e.stopPropagation()}}>
                <div>
                  <div>
                      <h3>Add a folder</h3>
                  </div>
                  <input className='add-folder-box-app-input' placeholder='Add a title' onChange={(e) => {setFolderTitle(e.target.value)}}/>
                  <input className='add-folder-box-app-input' placeholder='Add a description' onChange={(e) => {setFolderDescription(e.target.value)}}/>
                </div>
                <div className='add-folder-box-app-footer'>
                  <button onClick={HandleCreateFolder}>Add</button>
                </div>
            </div>
      </div>

      <div style={{display: profile}} className='profile-library' onClick={(e) => {e.stopPropagation()}}>
        <div className='profile-img'>
            <img className='profile-img1' alt='profile' src={localStorage.getItem("LinkAvatar")} />
            <div className='profile-p'>
                <p>{localStorage.getItem("Name")}</p>
            </div>
        </div>
        <div className='profile-user'>
                <img className='user-img' alt='aaa' src='/Img/user.png'/>
                <p>Profile</p>
        </div>
        <Link className='out' to={"/out"}>
            <p onClick={HandleLogout} >Log out</p>
        </Link>
      </div>
        <header className='Header'>
          {
          localStorage.getItem("ID")  ? 
          
          <div className='Nav'>
          <div className='header-l'>
          <Link className='header-namesite' to={"/"}>QUIZZ</Link>
            <Link className='header-l-l' to={localStorage.getItem("Account")?"/":"/out"}>Home</Link>
            <div className='Library'>
              <button onClick={() => {HandleShowLibrary()}}>Library</button>
            </div>
          </div>
          <div className='header-r'>
            <button type='button' className='buttonprofile' onClick={HandleShowAdd}>
                  <img className='baitap-img' alt='aaa' src='/Img/plus.png'/>
            </button>
            <img onClick={HandleShowProfile} className='profile-img1' alt='profile' src={localStorage.getItem("LinkAvatar")} />
            {/* <Link to={"/login"}>Login</Link>---
            <Link to={"/logout"}>Logout</Link>
          </div>
        </div> :
          <div className='Nav'>
          <div className='header-l'>
            <Link className='header-namesite' to={"/out"}>QUIZZ</Link>
            <Link className='header-l-l' to={localStorage.getItem("Account")?"/":"/out"}>Home</Link>
            {/* <div className='Library'>
              <button onClick={() => {HandleShowLibrary()}}>Library</button>
            </div>
          </div>
          <div className='header-r'>
            
            <Link className='header-r-login' to={"/login"}>Login</Link>
            <Link className='header-r-register' to={"/register"}>Register</Link>
          </div>
        </div>
        }
        </header>
      */}
        <Header/>
        <div className='body'>
        <Routes >

            <Route path='out' element={
                <Home/>
            }/>

            <Route path='' element={
              <PrivateRoute>
                <HomeLogined/>
              </PrivateRoute>
            }/>

            <Route path='login' element={<Login login = {HandleLogin}/>}/>
            <Route path='flashcard/:id' element={<FlashCard/>}/>
            <Route path='flashcard/:id/write' element={<Write/>}/>
            <Route path='flashcard/:id/write/result' element={<WriteResult/>}/>
            <Route path='createcourse' element={<CreateSet/>}/>
            <Route path='flashcard/:id/edit' element={<Edit/>}/>
            <Route path='learn' element={<Learn/>}/>
            <Route path='flashcard/:id/learn' element={<LearnOverview/>}/>
            <Route path='flashcard/:id/learn/result' element={<LearnResult/>}/>
            <Route path='learntruefalse' element={<LearnTrueFalse/>}/>
            <Route path='register' element={<Register/>}/>
            <Route path='course' element={<Course/>}/>
            <Route path='folder' element={<Folder/>}/>
            <Route path='folder/:folderID' element={<FolderDetail/>}/>
            <Route path='header' element={<Header/>}/>
            <Route path='profiles' element={<Setting/>}/>
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}
