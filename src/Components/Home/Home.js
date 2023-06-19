import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.scss'

export default function Home() {

  const nav = useNavigate()

  return (
    <div className='HOMEBANNER'>
      <div className='banner'>
        <div className='mainSize bannerDetail'>
          <div className='bannerContent'>
            <h3>The best digital flashcards and learning tools</h3>
            <p>Join more than 60 million students who are
            use platform-based flashcards
            science, mock tests and expert solutions by
            Quizlet to improve the score and reach the goal.
            </p>
            <button onClick={() => {nav("/register")}}>Register for free</button>
          </div>
        </div>
      </div>
      <div className='center'>
        <div className='caithien'>
          <h1>90% of students who used Quizz said they had improved their scores.</h1>
        </div>
        <div className='priming-content'>
          <div className='priming-am'>
            <h3>Memorize faster, for free.</h3>
            <p>Research shows that self-testing with flashcards is more effective than rereading your notes.
                From math to medicine to modern languages, Quizlet is used by students in over 100 different topics.
            </p>
            <button onClick={() => {nav("/login")}}>Start</button>
          </div>
          <div className='priming-image'>
            <img className='priming-image' alt='aaa' src='https://images.prismic.io/quizlet-prod/130dc509-6919-47bc-b27d-17f600a41b0c_IntlFirstSlice.png?auto=compress,format' />
          </div>
        </div>
        <div className='priming-content1'>
          <div className='priming-am1'>
            <h3>Yesterday's commute time, today is class again</h3>
            <p>
              Learn anywhere – even offline – with our iOS and Android apps.
              Your progress is synced between your phone and computer.
            </p>
            
          </div>
        <div className='priming-image1'>
          <img className='priming-image1' alt='aaa' src='https://images.prismic.io/quizlet-prod/1d359d1f-be06-481d-af18-30a4d93b3b0f_commute-image.png?auto=compress,format&rect=0,0,1001,1000&w=1001&h=1000 1x, https://images.prismic.io/quizlet-prod/1d359d1f-be06-481d-af18-30a4d93b3b0f_commute-image.png?auto=compress,format&rect=0,0,1001,1000&w=1001&h=1000 2x' />
          </div>
        </div>
        
        
      </div>
      <div className='cmt'>
          <div className='tieude'>
            <h3>What students say about Quizlet.</h3>
          </div>
          <div className='nhanxet'>
            <div className='w-33 p-20'>
              <div className='card'>
                <div className='nximg'>
                 <img src='https://images.prismic.io/quizlet-prod/8568c5a7-2554-43c5-81bf-322169240769_Image+%2812%29.png?auto=compress,format&rect=0,3,310,228&w=286&h=210' className='w-100'></img>
                </div>
                <div className='nxp'>
                  <p>“Quizlet has fueled my success since high school.
                  The flashcards that can be used on the go are helping me a lot in college."
                  </p>
                  <br></br>
                  <p>
                    Hamza, senior year, Medicine.</p>
                </div>
              </div>
            </div>
            <div className='w-33 p-20'>
              
              <div className='card'>
                <div className='nximg'>
                 <img src='https://images.prismic.io/quizlet-prod/17a32b86-e009-47f6-acb0-cdc8e89d35c4_06Sydney+1.png?auto=compress,format&rect=0,10,930,683&w=286&h=210' className='w-100'></img>
                </div>
                <div className='nxp'>
                  <p>“Learning Mode is the best thing ever from Quizz. It shows you the terms in the easiest way to remember."
                  </p>
                  <br></br>
                  <p>Sydney, second year, Biology.</p>
                </div>
              </div>
            
            </div>
            <div className='w-33 p-20'>
             
              <div className='card'>
                <div className='nximg'>
                 <img src='https://images.prismic.io/quizlet-prod/8160414d-ed6b-41ce-9654-18fc839916f6_oscar+and+owen+photo+for+us+homepage_fullsize+%281%29+1.png?auto=compress,format&rect=0,8,793,582&w=286&h=210' className='w-100'></img>
                </div>
                <div className='nxp'>
                  <p>“All of our friends use Quizz.
                    It's a fun way to learn and we feel more confident as we prepare for midterms and finals."
                  </p>
                  <br></br>
                  <p>Owen & Oscar, sophomores in high school.</p>
                </div>
              
              </div>
            
            </div>
        </div>
        
        <div className='sup-content'>
          <div className='sup-tonghop'>
            <div className='sup-am'>
              <h3>Teacher
                  Energize your students</h3>
              <p>Help them confidently learn any content, no matter what their goals are.
                Using Quizlet's free sets, learning modes, and Milestones game, you can instantly create a more interactive classroom.
                Students and teachers can register and learn for free.
              </p>
              <button>Create a free account.
                </button>
            </div>
            <div className='sup-img'>
              <img className='sup-img' alt='aaa' src='https://images.prismic.io/quizlet-prod/d5b00568-a324-488f-b16b-44480144cb81_Image+for+Text+Callout+%283%29.png?auto=compress,format&rect=0,0,501,500&w=501&h=500 1x, https://images.prismic.io/quizlet-prod/d5b00568-a324-488f-b16b-44480144cb81_Image+for+Text+Callout+%283%29.png?auto=compress,format&rect=0,0,501,500&w=501&h=500 2x' />
            </div>
          </div>
           
        </div>
        
       

        
        
      </div>
    </div>
    
    
  )
}

