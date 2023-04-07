import React,{useState} from 'react'
import axios from "axios"



function Register() {


const[username,setUsername]=useState('');
const[email,setEmail]=useState('');
const[password,setPassword]=useState('');


const submit = async e =>{
  e.preventDefault();

  await axios.post('http://localhost:8000/api/account/register/',
    {
      username,email,password
    },
  //   headers:{
  //     Authorization: localStorage.getItem('access_token')
  //       ? 'Bearer ' + localStorage.getItem('access_token')
  //       : null,
  //       'Content-Type' : 'application/json',
  //       accept: 'applcation/json',
  // }
  )                                                     
}

  return (                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
    <div>                                                                                                                                                                                                                                                                                 
        <form onSubmit={submit}  >                                                  
            <label htmlFor="Username"></label>
            <input type="text" placeholder='Username' onChange={e => setUsername(e.target.value)}/>
            <input type="email" placeholder='Email' onChange={e => setEmail(e.target.value)}/>
            <input type="password" placeholder='Password' onChange={e => setPassword(e.target.value)}/>                                               
            <input type="submit" />
        </form>
    </div>
  )                                                                                                                                                                                                                                                                                                                                                                               
}

export default Register