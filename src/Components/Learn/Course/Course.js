import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Course.scss"
export default function Course() {

    const nav = useNavigate()

    const [data, setData] = useState([])

    const [filterData, SetfilterData] = useState("")

    useEffect(() => {
        fetch(`https://localhost:7071/api/Courses/GetAll/${localStorage.getItem("ID")}`)
            .then(res => res.json())
            .then(data => {
                        setData(data)
            })
        },[])    

  return (
    data.length >  0 && 
    <div className='library-all'>
        {console.log(data)}
        <div className='library-form'>
            <div className='library-header'>
                <img className='library-img1' alt='profile' src={localStorage.getItem("LinkAvatar")} />
                <div className='library-p'>
                        <p>{localStorage.getItem("Account")}</p>
                        <span>{localStorage.getItem("Name")}</span>
                </div>
               
            </div>
            <div className='library-search'>
              <p onClick={() => {nav("/course")}} style={{color:"blue"}}>Study sets</p>
              <p onClick={() => {nav("/folder")}}>Folders</p>
            </div>
            <div className='library-input'>
              <input placeholder='Search your sets' onChange={(e) => {SetfilterData(e.target.value)}}/>
            </div>
            {data.filter(x => x.name.includes(filterData)).map(x => {
                return <div className='' onClick={() => {nav(`/flashcard/${x.id}`)}}>
                            <div className='draftall'>
                                <div className='draft'>
                                    <div className='term1'>
                                        <p>{x.numberOfWord}</p>
                                        <span>|</span>
                                        <img className='term-img1' alt='profile' src={x.user.linkAvatar} />
                                        <p>{x.user.name}</p>
                                        </div>
                                        <div className='month'>
                                        <h2>{x.name}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
            })}
            
        </div>
    </div>
  )
}
