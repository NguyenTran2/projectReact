import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import "./FolderDetail.scss"
export default function FolderDetail() {

    const {folderID} = useParams()

    const lo = useLocation()

    const nav = useNavigate()

    const [data, setData] = useState([])

    const [filterData, SetfilterData] = useState("")

    useEffect(() => {
        fetch(`https://localhost:7071/api/Courses/GetByFolderID/${folderID}`)
            .then(res => res.json())
            .then(data => {
                        setData(data)
            })
        },[folderID])    

  return (
    data.length >  0 && 
    <div className='library-all'>
        {console.log(lo)}
        <div className='library-form'>
            <div className='library-header'>
                <img className='library-img1' alt='profile' src={localStorage.getItem("LinkAvatar")} />
                <div className='library-p'>
                        <p>{localStorage.getItem("Account")}</p>
                        <span>{localStorage.getItem("Name")}</span>
                </div>
               
            </div>
            <div className='library-search'>
              <h3>{lo.state.data}</h3>
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
