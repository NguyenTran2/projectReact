import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import './FlashCard.scss'
import icon from '../FlashCard/plus.png'
import icon1 from '../FlashCard/edit.png'
import icon2 from '../FlashCard/upload.png'
import icon3 from '../FlashCard/star.png'
import icon4 from '../FlashCard/speaker-filled-audio-tool.png'
import icon5 from '../FlashCard/writing.png'
import icon6 from '../FlashCard/online-education.png'
import icon7 from '../FlashCard/minus-sign.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function FlashCard() {

    const nav = useNavigate()
    const { id } = useParams();
    
    const [flashCard, setFlashCard] = useState("rotateX(0deg)")
    //Handle data

    const [data, setData] = useState([])
    const [user, setUser] = useState({})
    const [course, setCourse] = useState({})
    

    useEffect(() => {
        fetch(`https://localhost:7071/api/Words/GetWordsByCourseID/${id}`)
                .then(res => res.json())
                .then(data => {
                    setData(data.words)
                    setUser(data.user)
                    setCourse(data.course)
                });
    },[id])

    const ReadEng = (value) => {
        var msg = new SpeechSynthesisUtterance();
        msg.text = `${value}`;
        window.speechSynthesis.speak(msg);
    }

    const [i, setI] = useState(0)

    const HandleAfterData = (e) => {
        e.stopPropagation();
        if(i < data.length - 1)
        {
            setI(i+1)
        }
        else 
        {
            setI(data.length-1)
        }

    }

    const HandlePreviousData = (e) => {
        e.stopPropagation();
        if(i != 0)
        {
            setI(i-1)
        }
        else 
        {
            setI(0)
        }

    }

    // Set CSS


    const HandleShowFlashCard = () => {

        if(flashCard === "rotateX(0deg)")
        {
            setFlashCard("rotateX(180deg)")
        }
        else {
            setFlashCard("rotateX(0deg)")
        }
    }

    const [folder, setFolder] = useState("none")

    const ShowFolder = () => {
        setFolder("")
    }

    const HandleModal = () => {
        setFolder("none")
    }

    //handle add to folder

    const [dataFolder, setDataFolder] = useState({})

    const HandleFolder = () => {
        ShowFolder()

        fetch(`https://localhost:7071/api/Folder/GetFolderByUserIDAndSetID?userID=${localStorage.getItem("ID")}&setID=${id}`)
                .then(res => res.json())
                .then(data => {
                    setDataFolder(data)
                });

        
    }

    const HandleAddToFolder  = (folderID) => {
        fetch(`https://localhost:7071/api/Courses/AddCourseToFolder?courseID=${id}&folderID=${folderID}`, 
        {
            method: 'PUT',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }            
        })
        .then(res => {
          HandleFolder()
        })
    }

    const HandleRemoveToFolder  = (folderID) => {
        fetch(`https://localhost:7071/api/Courses/RemoveCourseToFolder?courseID=${id}&folderID=${folderID}`, 
        {
            method: 'PUT',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }            
        })
        .then(res => {
            HandleFolder()
        })
    }

    ///////////////////////////////////////////////////

    //Handle share 

    const [modalShare, setModalShare] = useState("none")
    const [accountShare, SetAccountShare] = useState("")

    const ShowModalShare = () => {
        setModalShare("")
    }

    const HideModalShare = () => {
        setModalShare("none")
    }
    const HandleSuccess1 = () => toast.success("Share success!",{
        position: toast.POSITION.TOP_CENTER
      });
    const HandleFail1 = () => toast.error("Can not find account!",{
        position: toast.POSITION.TOP_CENTER});
    const HandleModalShare = () => {
        fetch(`https://localhost:7071/api/Courses/ShareCourse?userNameShared=${accountShare}&setID=${id}`, 
        {
            method: 'PUT',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }            
        })
        .then(res => {
            if(res.status == 200){
                HandleSuccess1("Share success!")
              }else {
                HandleFail1("Can not find account!")
              }
        })
    }
    const [isShown, setIsShown] = useState(false);
    const [isShown1, setIsShown1] = useState(false);
    const [isShown2, setIsShown2] = useState(false);

    ////////////////////

  return (
    
    data.length > 0 && <div className='FlashCard'>
        <div className='add-folder-modal'  style={{display: folder}} onClick={HandleModal}>
            {dataFolder.length > 0 
            ?
            <div className='add-folder-box' onClick={(e) => {e.stopPropagation()}}>
                <div className='add-folder-box-header'>
                    <h3>Add to a folder</h3>
                </div>
                {dataFolder.map(x => {
                    return <div className='add-text'>
                                    <p>{x.name}</p>
                                    <div className='add-dau'>
                                    {x.added ? 
                                        <div>
                                            <span onClick={() => {HandleRemoveToFolder(x.id)}}>-</span>
                                        </div>
                                    :
                                        <div>
                                            <span onClick={() => {HandleAddToFolder(x.id)}}>+</span>
                                        </div>}
                                    
                                    </div>
                                    
                            </div>
                    
                    // <div>
                    //             <p>{x.name}</p>
                    //             {x.added ? <button onClick={() => {HandleRemoveToFolder(x.id)}}>Remove</button> : <button onClick={() => {HandleAddToFolder(x.id)}}>Add</button>}
                    //         </div>
                })}
            </div>
            :
            <div className='add-folder-box' onClick={(e) => {e.stopPropagation()}}>
                <div>
                    <h3>You don't have any folder</h3>
                </div>
                {/* <div className='add-text'>
                       <p>{x.name}</p>
                       <div className='add-dau'>
                            <p>-</p>
                            <p>+</p>
                       </div>
                       
                </div> */}
            </div>
            } 
        </div>

        <div className='share-modal'  style={{display: modalShare}} onClick={HideModalShare}>
            <div className='share-box' onClick={(e) => {e.stopPropagation()}}>
                    <div>
                        <h3>Share this set</h3>
                        <input placeholder='Share link via email' onChange={(e) => {SetAccountShare(e.target.value)}}/>
                    </div>
                        <div className='share-box-footer'>
                            <button onClick={HandleModalShare}>Share</button>
                        </div>
            </div>
        </div>
            
        <div className="box">
            <div  className='box-title'>
             <h2>{course.name}</h2>
            </div>
            <div className='box-header'>
                <div className='box-write'>
                    <button onClick={() => {nav(`/flashcard/${id}/write`, {state:{data: data}})}}>
                        <img className='write-img' alt='aaa' src={icon5}/>
                        <p>Write</p></button>
                </div>
                <div className='box-learn'>
                    <button onClick={() => {nav(`/flashcard/${id}/learn`, {state:{data: data}})}}>
                    <img className='learn-img' alt='aaa' src={icon6}/>
                        <p>Learn</p>
                    </button>
                    
                </div>
                
            </div>

            <div className="flip-card" tabIndex="0" onClick={(e) => {HandleShowFlashCard(e)}}>
                <div className="flip-card-inner" style={{transform: flashCard}}>
                    <div className="flip-card-front">
                        <div className="boxHead">
                            <p>{i+1}/{data.length}</p>
                        </div>
                        <div className="boxContent">
                            <h3>{data[i].english}</h3>
                        </div>
                        <div className="nextPrev">
                            <p onClick={(e) => {HandlePreviousData(e)}} >{"<"}</p>
                            <p onClick={(e) => {HandleAfterData(e)}}>{">"}</p>
                        </div>
                    </div>
                    <div className="flip-card-back">
                        <div className="boxHead">
                            <p>{i+1}/{data.length}</p>
                        </div>
                        <div className="boxContent">
                            <h3>{data[i].tiengViet}</h3>
                        </div>
                        <div className="nextPrev">
                            <p  onClick={(e) => {HandlePreviousData(e)}} >{"<"}</p>
                            <p onClick={(e) => {HandleAfterData(e)}}>{">"}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='baitap'>
                <div className='profile'>
                    <div className='profile-img'>
                        <img className='profile-img1' alt='profile' src={user.linkAvatar} />
                        <div className='profile-p'>
                            <p>Creat by</p>
                            <p>{user.name}</p>
                        </div>
                    </div>
                    <div className='button-img'>
                    <div>
                            <button type='button' className='buttonprofile'
                             onMouseEnter={() => setIsShown(true)}
                             onMouseLeave={() => setIsShown(false)}>
                                <img className='baitap-img' alt='aaa' src={icon} onClick={HandleFolder}/>
                                {isShown && (
                                <div className='bt-add'>
                                    Add
                                </div>
                                )}
                            </button>
                        </div>
                        <div>
                            <button type='button' className='buttonprofile' onClick={() => {nav(`/flashcard/${id}/edit`)}}
                            onMouseEnter={() => setIsShown1(true)}
                            onMouseLeave={() => setIsShown1(false)}>
                                <img className='baitap-img' alt='aaa' src={icon1}/>
                                {isShown1 && (
                                <div className='bt-edit'>
                                    Edit
                                </div>
                                )}
                            </button>
                        </div>
                        <div>
                            <button type='button' className='buttonprofile'
                            onMouseEnter={() => setIsShown2(true)}
                            onMouseLeave={() => setIsShown2(false)}>
                                <ToastContainer/>
                                <img className='baitap-img' alt='aaa' src={icon2} onClick={ShowModalShare}/>
                                {isShown2 && (
                                <div className='bt-share'>
                                    Share
                                </div>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='creatorall'> 
            <div className='creatorterms'>
                <h2>
                    Terms in this set ({data.length})
                </h2>
                {/* <h3>
                    Still learning ({data.length})
                </h3> */}

                {data.length > 0 && 
                    data.map((x, i) => {
                        return <div key={i} className='creator-mean'>
                                    <div className='creator-both'>
                                        <div className='creator-en'>
                                            <span>{x.english}</span>
                                        </div>
                                        <div className='creator-vn'>
                                            <span > |</span>
                                            <span className='creator-space'>{x.tiengViet}</span>
                                        </div>
                                    </div>
                                    <div className='creator-button'>
                                        <button type='button' className='buttonprofile1'>
                                            <img className='baitap-img' alt='aaa' src={icon3}/>
                                        </button>
                                        <button type='button' className='buttonprofile1'>
                                            <img className='baitap-img' alt='aaa' src={icon4} onClick={() => {ReadEng(x.english)}}/>
                                        </button>
                                        <button type='button' className='buttonprofile1'>
                                            <img className='baitap-img' alt='aaa' src={icon1}/>
                                        </button>
                                    </div>
                                </div>
                    })
                }
            </div>
        </div>

        </div>
    </div>
  )
}
