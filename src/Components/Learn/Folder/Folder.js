import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Folder.scss"
export default function Folder() {

    const nav = useNavigate()

    const [data, setData] = useState([])

    const [filterText, SetFilterText] = useState("")

    useEffect(() => {
        fetch(`https://localhost:7071/api/Folder/getfolderbyuserid?userid=${localStorage.getItem("ID")}`)
            .then(res => res.json())
            .then(data => {
                setData(data)
            });
    },[])

  return (
    data.length >  0 && 
    <div className='library-all'>
        {console.log(data)}
        <div className='library-form'>
            <div className='library-header'>
                <img className='library-img1' alt='profile' src={localStorage.getItem("LinkAvatar")}/>
                <div className='library-p'>
                        <p>{localStorage.getItem("Account")}</p>
                        <span>{localStorage.getItem("Name")}</span>
                </div>
               
            </div>
            <div className='library-search'>
              <p onClick={() => {nav("/course")}}>Study sets</p>
              <p onClick={() => {nav("/folder")}} style={{color:"blue"}}>Folders</p>
            </div>
            <div className='library-input'>
              <input placeholder='Search your folders' onChange={(e) => {SetFilterText(e.target.value)}}/>
            </div>
            {data.filter(x => x.name.includes(filterText)).map(x => {
                return <div className='' onClick={() => {nav(`/folder/${x.id}`, {state : {name: x.name}})}}>
                            <div className='draftall'>
                                <div className='draft'>
                                    <div className='month'>
                                        <h2>{x.name}</h2>
                                    </div>
                                    <div className='term1'>
                                        <p>{x.countSet} sets</p>
                                    </div>
                                </div>
                            </div>
                        </div>
            })}
            
        </div>
    </div>
  )
}
