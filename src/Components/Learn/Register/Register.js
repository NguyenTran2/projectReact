import  {useState, React} from 'react'
import { useNavigate } from 'react-router-dom'
import './Register.scss'
import icon from '../Register/question.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
   


export default function Register() {
  const [account, setAccount] = useState("")
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
    // const [days, setDays] = useState(
    //     Array.from({ length: 31 }, (_, index) => index + 1)
    //   );
    //   const dayOptions = days.map((day) => (
    //     <option key={day} value={day}>
    //       {day}
    //     </option>
    //   ));
    //   const [thangs, setThangs] = useState(
    //     Array.from({ length: 12 }, (_, index) => index + 1)
    //   );
    //   const thangOptions = thangs.map((thang) => (
    //     <option key={thang} value={thang}>
    //       {thang}
    //     </option>
    //   ));

    //   const years = [];
    //   const startYear = 1950;
    //   const endYear = new Date().getFullYear();

    //   for (let i = startYear; i <= endYear; i++) {
    //     years.push(i);
    //   }
    
      const nav = useNavigate();
      const HandleSuccess = () => toast.success("Register success!",{
        position: toast.POSITION.TOP_CENTER
      });
      const HandleFail = () => toast.error("Register fail!",{
        position: toast.POSITION.TOP_CENTER});
      const HandleRegister = () => {
        fetch(`https://localhost:7071/api/Users/Register?userName=${account}&password=${password}&name=${name}`, 
        {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }            
        })
        .then(res => {
          console.log(res);
          if(res.status == 200){
            HandleSuccess("Register success!")
            nav("/login")
          }else {
            HandleFail("Register fail!")
          }
        })
      }
  return (
   
    <div className='Login'>
        <div className='Login-img'>
          <img className='Login-img' alt='aaa' src='	https://assets.quizlet.com/a/j/dist/app/i/signup/QZ_Auth_Light.f0832112f8d66a6.png' />
        </div>
        <div className='formtong'>
          <div className='birthday'>
            <h1>Register</h1>
            {/* <p>Ngày sinh</p>
              <div className='form1'>
                  <select id="day" name="day">
                    <option>Ngày</option>
                     {dayOptions}
                  </select>
                  <select id="thang" name="thang">
                    <option>Tháng</option>
                    {thangOptions}
                  </select>
                  <select id='year'>
                      <option>Năm</option>
                      {years.map((year) => (
                    <option key={year} value={year} >
                          {year}
                      </option>
                    ))}
                      
                  </select>
                        
                    <img className='login-img' alt='aaa' src={icon}/>
                        
                    
              </div> */}
            <div className='form2'>
              <div className='email'>
                <p >Account</p>
                <input placeholder='user@quizz.com'className='input2' onChange={(e) => {setAccount(e.target.value)}}></input> 
              </div>
              <div className='user'>
                <p>User Name</p>
                <input placeholder='nguyentran' className='input2' onChange={(e) => {setName(e.target.value)}}></input> 
              </div> 
              <div className='password'>
                <p>Password</p>
                <input   placeholder='123456' className='input2' onChange={(e) => {setPassword(e.target.value)}}></input> 
              </div>     
              
              <button className='dangnhap' onClick={HandleRegister} >Register</button>
              <ToastContainer/>
            </div> 
                
          </div>
          
           
        </div>
        
    </div>
    
   
  )
}
