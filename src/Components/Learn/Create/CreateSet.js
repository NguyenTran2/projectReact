import React, { useState } from 'react'
import './CreateSet.scss'
import icon from '../Create/delete-account.png'
import { useNavigate, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function CreateSet() {


    const {id} = useParams();
    const nav = useNavigate();

    const [a, setA] = useState([{english:"",
                                tiengViet:""
                                },
                                {english:"",
                                tiengViet:""
                                },
                                {english:"",
                                tiengViet:""
                                }
                            ])
                                
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const HandleAddElement = () => {
        setA([...a, {english:"",
        tiengViet:""
        }])            
    }

    const HandleRemoveElement = (id) => {
        var newA = [...a].filter((x, i) => i != id)
        setA(newA)
    }

    const HandleChangeEng = (e, index) => {
        const b = [...a]
        b[index].english = e.target.value
        setA(b)
    }
    const HandleChangeViet = (e, index) => {
        const b = [...a]
        b[index].tiengViet = e.target.value
        setA(b)
    }
    const HandleSuccess1 = () => toast.success("Create Set success!",{
        position: toast.POSITION.TOP_CENTER
      });
    const HandleFail1 = () => toast.error("Create Set fail!",{
        position: toast.POSITION.TOP_CENTER});
    const HandleCreate = () => {
        fetch(`https://localhost:7071/api/Courses/CreateCourseWord?name=${title}&description=${description}&userID=${localStorage.getItem("ID")}`,
        {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(a)
        }).then(res => {
            if(res.status == 200) {
                HandleSuccess1("Create Set success!")
                nav(`/`)
            }else {
                HandleFail1("Create Set fail!")
            }
        })
    }

  return (
    <div className='createall'>
        {console.log(a)}
        <div className='createall-box' >
            <div className='createheader'>
                <div className='createnew'>
                    <h2>Create a new study set</h2>
                    <button className='createbt' onClick={HandleCreate}>Create</button>
                    <ToastContainer/>
                </div>
                <div className='createinput1'>
                        <input placeholder='Enter a title' className='creatlogin-input' onChange={(e)=>{setTitle(e.target.value)}} />
                        <p className='createp'>TITLE</p>
                        <input placeholder='Add a discription' className='creatlogin-input'  onChange={(e)=>{setDescription(e.target.value)}}/>
                        <p className='createp'>DESCRIPTION</p>
                        <p className='createip'>+ Import</p>
                </div>
            </div>

            {a.map((x,index) => {
                return <div className='creatcontent'>
                <div className='contentinner1'>
                    <div className='content1'>
                        <p className='content1p'>{index+1}</p>
                        <img className='creat-img' alt='aaa' src={icon} onClick={() => {HandleRemoveElement(index)}}/>
                    </div>
                    <div className='form1'>
                        <div className='form1-div'>
                            <input className='form1-input' value={x.english}   onChange={(e) => {HandleChangeEng(e, index)}}></input>
                            <div className='form1p'>
                                <p >Term</p>
                            </div>
                        </div>
                        <div className='form1-div'>
                            <input className='form1-input' value={x.tiengViet}  onChange={(e) => {HandleChangeViet(e, index)}}></input>
                            <div className='form1p'>
                                <p >Definition</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            })}

            <div className='creatcontent'>
                <div className='contentinner2'>
                <p className='addcontentp' onClick={HandleAddElement}>+ADD CARD</p>
                </div>
            </div>
        </div>
    </div>
  )
}
