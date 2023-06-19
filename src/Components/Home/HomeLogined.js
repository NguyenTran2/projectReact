import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './HomeLogined.scss'

export default function HomeLogined() {

    const nav = useNavigate()

    const [data, SetData] = useState([])

    useEffect(() => {
        fetch(`https://localhost:7071/api/Courses/GetSixNewest?userID=${localStorage.getItem("ID")}`)
            .then(res => res.json())
            .then(data => {
                SetData(data)
            });
    },[])


  return (
    <div className='HomeLogined'>
        {/* {localStorage.getItem("DataUser")} */}
        <div className='All-Box'>
            <h3 className='Text-Achievements m-t-40'>Achievements</h3>
            <div className='Achievements'>
            <div className='Achievements1'>
                 <img alt='123' src='https://quizlet.com/static/achievements/streak-Week.svg'></img>
                    <div className='a-content'>
                        <h4> A week streak</h4>
                        <p>Study next week to keep your streak going</p>
                    </div>
                    <div className='week'>
                        <div className='week-n'>
                            <p>S</p>
                            <p>M</p>
                            <p>T</p>
                            <p>W</p>
                            <p>T</p>
                            <p>F</p>
                            <p>S</p>
                        </div>
                        <div className='day'>
                            <div className='p1'>
                            <p>1</p>
                            <p>2</p>
                            <p>3</p>
                            <p>4</p>
                            <p>5</p>
                            <p>6</p>
                            <p>7</p>
                            </div>
                          
                        </div>
                    </div>
                </div>
            </div>

            <h3 className='Text-Recent m-t-40'>Recents</h3>
            {data.length > 0 ? <div className='Recent'>
                {data.map((x, i) => {
                    return <div key={i} className='Box' onClick={() => {nav(`/flashcard/${x.id}`)}}>
                                <div>
                                    <h3>{x.name}</h3>
                                    <p className='numberOfWord'>{x.numberOfWord} terms</p>
                                </div>
                                <div className='Box-footer'>
                                    <img className='baitap-img' alt='aaa' src={x.user.linkAvatar}/>
                                    <p>{x.user.name}</p>
                                </div>
                            </div>
                })}
            </div> : 
            <div className='Recent'>
                <div className='Box'>
                <h2>Bạn chưa có học phần nào</h2>
                <p>Các học phần bạn đã tạo hoặc đã học sẽ hiển thị ở đây.</p>
                 </div>
            </div>
            }

        </div>
    </div>
  )
}
