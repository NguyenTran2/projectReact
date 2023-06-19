import React, { useEffect, useMemo, useState } from 'react'
import "./LearnTrueFalse.scss"


export default function LearnTrueFalse(props) {

    const initial = {
        "learn-box-footer_title": "Select the correct term",
        "color" : "",
        "truecolor" : ""
        
    }

    const [defineAnswer, setDefineAnswer] = useState(initial)

    const shuffleddata = useMemo(() => {
        return [...props.data].sort(() => 0.5 - Math.random())
    },[props.i])

    const HandleAnswer = (e, result) => {

        if(props.data[0].tiengViet == shuffleddata[0].tiengViet && result == "true" || props.data[0].tiengViet != shuffleddata[0].tiengViet && result == "false") {
            setDefineAnswer({
                "learn-box-footer_title": "Awesome!",
                "color" : "#23b26d",
                "truecolor" : "2px solid #23b26d"
            })
            e.target.style.border = "2px solid #23b26d"

            props.HandleAnswer.AddCorrect()

            setTimeout(() => {
                setDefineAnswer(initial)
                e.target.style.border = "2px solid #dee1e7"
                props.next()
            }, 1500);

        }else {
            setDefineAnswer({
                "learn-box-footer_title": "No problem. You're still learning!",
                "color" : "#ff725b",
                "truecolor" : "2px solid #23b26d"
            })
            e.target.style.border = "2px solid #ff725b"

            props.HandleAnswer.AddIncorrect()

            setTimeout(() => {
                setDefineAnswer(initial)
                e.target.style.border = "2px solid #dee1e7"
                props.next()
            }, 1500);
        }
    }

  return (
    
    <div className='learntruefalse'>
        {console.log(props.i)}
         <div className='learn-box'>
            <div className='learn-box-header'>
                <p>Definition</p>
                <p>{props.i+1} of {props.Si}</p>
            </div>
            <div className='learn-box-body'>
                <p>{props.data[0].english}</p>
                {shuffleddata.length != 0 ? <p>{shuffleddata[0].tiengViet}</p> : ""}
            </div>
            <div className='learn-box-footer'>
                <p className='learn-box-footer_title' style={{color: defineAnswer["color"]}}>{defineAnswer['learn-box-footer_title']}</p>
                <div className='learn-box-footer_content'>
                    <p onClick={(e)=>{HandleAnswer(e, "true")}}>True</p>
                    <p onClick={(e)=>{HandleAnswer(e, "false")}}>False</p>
                </div>
            </div>
        </div>
    </div>
  )
}
