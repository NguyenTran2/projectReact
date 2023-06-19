import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import Learn from './Learn'
import LearnTrueFalse from './LearnTrueFalse'

export default function LearnOverview() {

    const {id} = useParams()
    const lo = useLocation()
    const nav = useNavigate()
    const [data, setData] = useState([])

    const [correctAnswer, setCorrectAnswer] = useState([])
    const [incorrectAnswer, setIncorrectAnswer] = useState([])

    useEffect(() => {
        setData(lo.state.data)
    },[])

    useEffect(() => {
        if(i === data.length-1){
            setTimeout(() => {
                nav(`/flashcard/${id}/learn/result`, {state: {dataCorrect: correctAnswer, dataIncorrect: incorrectAnswer}})
            }, 1500);

            // if(incorrectAnswer.length == 0) {
            //     setTimeout(() => {
            //         nav("/write/result", {state: {dataCorrect: correctAnswer, dataIncorrect: incorrectAnswer}})
            //     }, 1500);
            // }
        }

        
    },[correctAnswer, incorrectAnswer])


    const randomfour = (a) => {
        const newData = [...data].sort(() => 0.5 - Math.random()).filter(x => 
            x.english != a.english
        ).slice(0, 3)
        return [a, ...newData]
    }

    const [i, SetI] = useState(0)

    const Next = () => {
        if(i < data.length - 1)
        {
            SetI(i+1)
        }
    }

    const AddCorrect = () => {
        setCorrectAnswer([...correctAnswer, {
            english: data[i].english,
            tiengViet: data[i].tiengViet,
            WrongAnswer: ""
        }])
    }

    const AddIncorrect = () => {
        setIncorrectAnswer([...incorrectAnswer, {
            english: data[i].english,
            tiengViet: data[i].tiengViet,
            WrongAnswer: ""
        }])
    }

  return (
    data.length > 0 && 
    <div>
        {console.log(correctAnswer)}
        {console.log(incorrectAnswer)}
        {Math.random() * 10 < 7 
        ? <Learn data = {randomfour(data[i])} next = {Next} i ={i} Si = {data.length} HandleAnswer = {{AddCorrect: AddCorrect, AddIncorrect: AddIncorrect}}/> 
        : <LearnTrueFalse data = {randomfour(data[i])} next = {Next} i ={i} Si = {data.length} HandleAnswer = {{AddCorrect: AddCorrect, AddIncorrect: AddIncorrect}}/>}
    </div>
  )
}
