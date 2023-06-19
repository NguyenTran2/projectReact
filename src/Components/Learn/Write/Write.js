import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import './Write.scss'

export default function Write() {

    const nav = useNavigate()
    const lo = useLocation()

    const {id} = useParams()

    const initialCss = {
        "background-color-button": "#3ccfcf",
        "color": "Black",
        "display": "block",
        "Answer": "Answer",
        "nonDisplay": "None",
        "correct" : ""
        
    }

    const [i, setI] = useState(0)
    const [currentAnswer, setCurrentAnswer] = useState("")
    const [cssAnswer, setCssAnswer] = useState(initialCss)
    const [correctAnswer, setCorrectAnswer] = useState([])
    const [incorrectAnswer, setIncorrectAnswer] = useState([])
    const [data, setData] = useState([])

    useEffect(() => {
            setData(lo.state.data)
    },[])

    useEffect(() => {
        if(i === data.length-1){
            setTimeout(() => {
                nav(`/flashcard/${id}/write/result`, {state: {dataCorrect: correctAnswer, dataIncorrect: incorrectAnswer}})
            }, 1500);

            // if(incorrectAnswer.length == 0) {
            //     setTimeout(() => {
            //         nav("/write/result", {state: {dataCorrect: correctAnswer, dataIncorrect: incorrectAnswer}})
            //     }, 1500);
            // }
        }

        
    },[correctAnswer, incorrectAnswer])
    

    const CheckAnswer = (e) => {
        if(data[i].english == currentAnswer){
            setCssAnswer({
                "background-color-button": "#23b26d",
                "color": "#23b26d",
                "display": "none",
                "Answer": "",
                "nonDisplay": "block",
                "correct" : "Correct"
            })
            
                setCorrectAnswer([...correctAnswer, {
                    english: data[i].english,
                    tiengViet: data[i].tiengViet,
                    WrongAnswer: ""
                }])
                setTimeout(() => {
                    NextQuestion()
                }, 1500);

            return true
        }else {
            
            setCssAnswer({
                "background-color-button": "#ff9c8c",
                "color": "#ff9c8c",
                "display": "none",
                "Answer": "",
                "nonDisplay": "block",
                "correct" : "Incorrect"
            })

            setCurrentAnswer(data[i].english)

            setIncorrectAnswer([...incorrectAnswer, {
                english: data[i].english,
                tiengViet: data[i].tiengViet,
                WrongAnswer: currentAnswer
            }])

            setTimeout(() => {
                NextQuestion()
            }, 1500);

            return false
        }
    }

    const whenEnter = (e) => {
        if(e.key == "Enter"){
            CheckAnswer()
        }
    }

    const NextQuestion = () => {
        setCssAnswer(initialCss)    

        if(i < data.length - 1)
        {
            setI(i+1)
        }

        setCurrentAnswer("")
        
    }

    return (
        data.length > 0 &&
        <div className='write'>
            <div className="box">
                <div className='flip-card-left'>
                    <p>Correct</p>
                    <div className="bar-container">
                        <div className="bar-1" style={{width: correctAnswer.length/data.length *100 + "%"}}></div>
                    </div>
                    <p>Incorrect</p>
                    <div className="bar-container">
                        <div className="bar-2" style={{width: incorrectAnswer.length/data.length *100 + "%"}}></div>
                    </div>

                    {/* {correctAnswer.length > 0 && 
                        correctAnswer.map(x => {
                            return <p style={{backgroundColor:" #a0eec7"}}>{x.english}: {x.tiengViet}</p>
                        })
                    } */}
                </div>
                <div className='flip-card-right'>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="boxHeader">
                                <div className="boxHeaderDetail">
                                    <div className="vietsub" style={{color: cssAnswer["color"]}}>
                                        {data[i].tiengViet}
                                    </div>
                                    <p onClick={() => {setCurrentAnswer(data[i].english)}} style={{display: cssAnswer["display"]}}>Don't know</p>
                                    <p style={{display: cssAnswer.nonDisplay, color: cssAnswer["color"]}}>{cssAnswer.correct}</p>
                                </div>
                            </div>
                            <div className="boxFooter">
                                <div className="boxHeaderDetail">
                                    <div>
                                        <input className="engsub" value={currentAnswer} type="text" onChange={(e) => {setCurrentAnswer(e.target.value)}} onKeyUp={(e) => {if(cssAnswer.correct === "") {whenEnter(e)}}} style={{color: cssAnswer["color"]}}/>
                                        <p className="answer" style={{display: cssAnswer["display"]}}>Type the answer in english</p>
                                    </div>
                                    <button onClick={() => {if(cssAnswer.correct === "") {CheckAnswer()}}} style={{backgroundColor: cssAnswer["background-color-button"]}}>{cssAnswer.Answer}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )
}
