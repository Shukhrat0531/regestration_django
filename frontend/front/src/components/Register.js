import React,{useState} from 'react'
import axiosInstance from '../axios'
import {useNavigate} from 'react-router-dom'


export default function SignUp(){
    const history = useNavigate()
    const initialFormatData = Object.freeze({
        email:'',
        username:'',
        password:'',
    });
    
    const [formData,updateFormData] = useState(initialFormatData);

    const handleChange = (e) => {
        updateFormData({
            ...formData,

            [e.target.name]:e.target.value.trim(),
        })
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(FormData);

        axiosInstance 
           .post('account/register/',{
            email:FormData.email,
            user_name : FormData.username,
            password:FormData.password,
           })
           .then((res)=> {
            history.push('/login');
            console.log(res);
            console.log(res.data);
           })
    }

    return (
        <div>
            <h4>Sign Up</h4>

            <form>
                <input type="email"
                        id='email'
                        name='email'
                        onChange={handleChange} />
                <input type="text"
                        id='username'
                        name='username'
                        onChange={handleChange}
                         /> 
                <input type="password"
                        id='password'
                        name='password'
                        onChange={handleChange} />  
                        <button
                            type='submit'
                            onClick={handleSubmit}                       
                        >Sign Up
                        </button>              

            </form>
        </div>
    )
}



// function Register() {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Register
