import React, { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom'
import "./Header.scss"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Header() {

    
    
    const nav = useNavigate()

  const [library, setLibrary] = useState('none')
  const [add, setAdd] = useState('none')
  const [profile, setProfile] = useState('none')

  const [folder, setFolder] = useState("none") 

  const [cssLibrarySet, SetCssLibrarySet] = useState("Black")
  const [cssLibraryFolder, SetCssLibraryFolder] = useState("Black")
  // const nav = useNavigate()

  const [dataCourse, SetDataCourse] = useState([])
  const [dataFolder, SetdataFolder] = useState([])

  const [login, SetLogin] = useState("")


  const HandleShowLibrary = () => {
    if(library === "none"){
      setLibrary("")
    }else {
      setLibrary("none")
    }
    HandleShowCourse()
  }

  const HandleShowCourse = () => {
    SetCssLibrarySet("Blue")
    SetCssLibraryFolder("Black")

    fetch(`https://localhost:7071/api/Courses/GetAll/${localStorage.getItem("ID")}`)
    .then (res => res.json())
    .then (data => {
      SetDataCourse(data)
      SetdataFolder([])
    })
  }

  const HandleShowFolder = () => {
    SetCssLibraryFolder("Blue")
    SetCssLibrarySet("Black")

    fetch(`https://localhost:7071/api/Folder/GetFolderByUserID?userID=${localStorage.getItem("ID")}`)
    .then (res => res.json())
    .then (data => {
      SetdataFolder(data)
      SetDataCourse([])
    })
  }

  const HandleShowAdd = () => {
    if(add === "none"){
      setAdd("")
    }else {
      setAdd("none")
    }
  }

  const HandleShowProfile = () => {
    if(profile === "none"){
      setProfile("")
    }else {
      setProfile("none")
    }
  }

  const HandleShow = (e) => {
    
    if(library ===""){
      setLibrary("none")
    }
    if(add ===""){
      setAdd("none")
    }
    if(profile ===""){
      setProfile("none")
    }
  }

  const HandleLogout = () => {
    localStorage.setItem("Account", "")
    localStorage.setItem("ID","")
    localStorage.setItem("LinkAvatar","")
    localStorage.setItem("Name", "")
    setProfile("none")
    SetLogin("")
}

//folder

  const HandleFolder = (e) => {
    e.stopPropagation();
    setFolder("")
  }

  const HandleModalFolder = () => {
    setFolder("none")
  }

  const [folderTitle, setFolderTitle] = useState("")
  const [folderDescription, setFolderDescription] = useState("")
  const HandleSuccess1 = () => toast.success("Create folder success!",{
    position: toast.POSITION.TOP_CENTER
  });
  const HandleFail1 = () => toast.error("Create folder fail!",{
    position: toast.POSITION.TOP_CENTER});
  const HandleCreateFolder = () => {
    fetch(`https://localhost:7071/api/Folder/CreateFolder?name=${folderTitle}&description=${folderDescription}&userID=${localStorage.getItem("ID")}`, 
        {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
        })
        .then(res => {
          console.log(res);
          if(res.status == 200){
            HandleSuccess1("Create folder success!")
            setFolder("none")
          }else {
            HandleFail1("Create folder fail!")
          }
        })
  }

  const HandleLogin = () => {
    SetLogin("Logined")
  }

  return (
    <div className='headera' onClick={(e) => {HandleShow(e)}}>
        <div className='modal-libraryy' style={{display: library}}>
            <div className='library'  onClick={(e) => {e.stopPropagation()}}>
                <div className='library-header'>
                <h3 onClick={HandleShowCourse} style={{color:cssLibrarySet}} >Study sets</h3>
                <h3 onClick={HandleShowFolder} style={{color:cssLibraryFolder}}>Folders</h3>
                </div>
                <div className='library-center'>
                {dataCourse.length > 0 && 
                    dataCourse.map(x => {
                    return <div className='library-content11'onClick={() => {nav(`/flashcard/${x.id}`)}}>
                                <h4>{x.name}</h4>
                                <div className='library-img'>
                                <img className='library-img1' alt='profile' src={x.user.linkAvatar}/>
                                <p >{x.user.account}</p>
                                </div>
                            </div>
                    })
                }
                
                {dataFolder.length > 0 && 
                    dataFolder.map(x => {
                    return <div className='library-content11' onClick={() => {nav(`/folder/${x.id}`,{state:{data: x.name}})}}>
                                <h4>{x.name}</h4>
                                <div className='library-img'>
                                {/* <img className='library-img1' alt='profile' src={x.user.linkAvatar}/> */}
                                <p >{x.countSet} sets</p>
                                </div>
                            </div>
                    })
                }
            </div>
            <div className='library-footer'>
            {cssLibrarySet == "Blue" ? <div onClick={() => {nav(`/course`)}} className='allsets'>View all sets</div> : <div onClick={() => {nav(`/folder`)}} className='allfolders'>View all folders</div>}
            </div>
            </div>
        </div>

      <div className='modal-add' style={{display: add}}>
        <div className='Add'  onClick={(e) => {e.stopPropagation()}}>
            <div className='study-set' onClick={() => {nav("/createcourse")}}>
                <img className='study-img' alt='aaa' src='/Img/study.png'/>
                <p>Study set</p>
            </div>
            <div className='folder' onClick={(e) => {HandleFolder(e)}}>
                <img className='folder-img' alt='aaa' src='/Img/folder.png'/>
                <p>Folder</p>
            </div>
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
                  <ToastContainer/>
                </div>
            </div>
      </div>

      <div className='modal-profile' style={{display: profile}}>
        <div  className='profile-library' onClick={(e) => {e.stopPropagation()}}>
            <div className='profile-img'>
                <img className='profile-img1' alt='profile' src={localStorage.getItem("LinkAvatar")} />
                <div className='profile-p'>
                    <p>{localStorage.getItem("Name")}</p>
                </div>
            </div>
            <div className='profile-user'>
                    <img className='user-img' alt='aaa' src='/Img/girl.png'/>
                    <Link className='profile-u' to={"/profiles"}>
                      <p >Profile</p>
                    </Link>
            </div>
            <div className='out' onClick={() => nav("/out")}>
                <p onClick={HandleLogout}>Log out</p>
            </div>
        </div>
      </div>
        <header className='Header'>
          {
          localStorage.getItem("ID")  ? 
          
          <div className='Nav'>
          <div className='header-l'>
          <div className='header-namesite' onClick={(e) => {nav("/")}}>QUIZZ</div>
            <div className='header-l-l' onClick={(e) => {nav("/")}}>Home</div>
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
            <Link to={"/logout"}>Logout</Link> */}
          </div>
        </div> :
          <div className='Nav'>
          <div className='header-l'>
            <div className='header-namesite' onClick={() => {nav("/out")}}>QUIZZ</div>
            <div className='header-l-l' onClick={() => {nav("/out")}}>Home</div>
            {/* <div className='Library'>
              <button onClick={() => {HandleShowLibrary()}}>Library</button>
            </div> */}
          </div>
          <div className='header-r'>
            
            <div className='header-r-login' onClick={(e) => {nav("/login")}} >Login</div>
            <div className='header-r-register' onClick={(e) => {nav("/register")}}>Register</div>
          </div>
        </div>
        }
        </header>
    </div>
  )
}
