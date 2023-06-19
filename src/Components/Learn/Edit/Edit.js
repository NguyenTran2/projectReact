import React, { useEffect, useState } from 'react'
import './Edit.scss'
import icon from '../Create/delete-account.png'
import { useNavigate, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Edit() {

    const {id} = useParams();
    const nav = useNavigate();

    

    const [a, setA] = useState([])
     
    // const [course, setCourse] = useState({})

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    useEffect(() => {
        fetch(`https://localhost:7071/api/Words/GetWordsByCourseID/${id}`)
                .then(res => res.json())
                .then(data => {
                    setA(data.words)
                    // setCourse(data.course)
                    setTitle(data.course.name)
                    setDescription(data.course.description)
                });
    },[])
                                
    

    const HandleAddElement = () => {
        setA([...a, {
            id : 0,
            english:"",
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
    const HandleSuccess1 = () => toast.success("Edit Set success!",{
        position: toast.POSITION.TOP_CENTER
      });
    const HandleFail1 = () => toast.error("Edit Set fail!",{
        position: toast.POSITION.TOP_CENTER});
    const HandleEdit = () => {
        fetch(`https://localhost:7071/api/Courses/EditCourseWord?courseID=${id}&name=${title}&description=${description}&userID=${localStorage.getItem("ID")}`,
        {
            method: 'PUT',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(a)
        }).then(res => {
            if(res.status == 200) {
                HandleSuccess1("Edit Set success!")
                nav(`/flashcard/${id}`)
            }else {
                HandleFail1("Edit Set fail!")
            }
        })
    }

  return (
    <div className='createall'>
        {console.log(a)}
        <div className='createall-box' >
            <div className='createheader'>
                <div className='createnew'>
                    <h2>Edit study set</h2>
                    <button className='createbt' onClick={HandleEdit}>Edit</button>
                    <ToastContainer/>
                </div>
                <div className='createinput1'>
                        <input placeholder='Enter a title' value={title} className='creatlogin-input' onChange={(e)=>{setTitle(e.target.value)}} />
                        <p className='createp'>TITLE</p>
                        <input placeholder='Add a discription' value={description} className='creatlogin-input'  onChange={(e)=>{setDescription(e.target.value)}}/>
                        <p className='createp'>DESCRIPTION</p>
                        <p className='createip'>+ Import</p>
                </div>
            </div>

            {a.map((x,index) => {
                return <div className='creatcontent'>
                <div className='contentinner1'>
                    <input value={x.id} hidden/>
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
