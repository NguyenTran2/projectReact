import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import "./WriteResult.scss"
import icon5 from '../Write/speaker-filled-audio-tool.png'

export default function WriteResult() {

    const lo = useLocation()
    const nav = useNavigate()
    const {id} = useParams()

    const HandleButton = () => {
        nav(`/flashcard/${id}/write`, {state: {data: lo.state.dataIncorrect}})
    }

    const HandlePrev = () => {
        nav(`/flashcard/${id}`)
    }
  return (
    <div className='completeall'>
        <div>
        <div className='complete-hsall'>
            <div className='complete-hs'>
                <h2>Nice work. You’re doing brilliantly.</h2>
                <p>{lo.state.dataCorrect.length} / {lo.state.dataCorrect.length + lo.state.dataIncorrect.length} terms</p>
            </div>
        </div>
        <div className='complete-mean'>
            <div>
            <div>
                <p className='complete-p'>Correct Answer:</p>
                {lo.state.dataCorrect.map(x => {
                return <div className='creator-mean-sc'>
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
                                    <img className='baitap-img' alt='aaa' src={icon5}/>
                                </button>
                            </div>
                        </div>
                })}
            </div>

               {
                 lo.state.dataIncorrect.length > 0 && <div>
                 <p className='complete-p'>Incorrect Answer:</p>
                 {lo.state.dataIncorrect.map(x => {
                 return <div className='creator-mean-f'>
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
                                     <img className='baitap-img' alt='aaa' src={icon5}/>
                                 </button>
                             </div>
                         </div>
                 })}
             </div>
               }
            </div>
           
        </div>
        </div>
        {
        lo.state.dataIncorrect.length > 0 ?
            <div className='complete-footerall' >
                <div className='complete-footer'>
                    <span>Redo the wrong sentences</span>
                    <button className='complete-bt' onClick={HandleButton}>Continue</button>
                </div>
            </div>
            :
            <div className='complete-footerall' >
                    <div className='complete-footer'>
                        <span>Enter to continue</span>
                        <button className='complete-bt' onClick={HandlePrev}>Continue</button>
                    </div>
            </div>
        }
                
         </div>
  )
}
