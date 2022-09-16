import React,{useContext, useState} from 'react';
import { NavLink,useHistory } from 'react-router-dom';
// import logo from "../images/logo.jpg";
import {UserContext} from "../App";

const Login = () => {
const {state,dispatch} = useContext(UserContext);
const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = async (e)=>{
e.preventDefault();

const res = await fetch('/signin',{
    method:"POST",
    headers:{
"Content-Type":"application/json"
    },
    body:JSON.stringify({email,password})
});
const data = res.json();
if(res.status=== 400 || !data){
window.alert("Invalid Credentials");
}
else{
    dispatch({type:'USER', payload:true})
    window.alert("Login SuccessFull");
    history.push("/");
}

    }

    return (
        <>
         <section className='signin'>
                <div className='container mt-5'>
                    <div className='signin-content'>

                    <div className='signin-image'>
                            {/* <figure>
        <img src={logo} alt="logo"/>
    </figure> */}
                            <NavLink to="/signup" className="signup-image-link">
                                Create an account</NavLink>
                        </div>

                        <div className='signin-form'>
                            <h2 className='form-title'>Login in</h2>

                            <form method='POST' className='register-form' id='register-form'>                               

                                <div className='form-group'>
                                    <label htmlFor='email'>
                                        <i class="zmdi zmdi-email"></i>
                                    </label>
                                    <input type="email" name='email' id='email' value={email}
                                     onChange={(e)=> setEmail(e.target.value)}
                                     autoComplete='off' placeholder='Your Email' />
                                </div>
                              
                                <div className='form-group'>
                                    <label htmlFor='password'>
                                        <i class="zmdi zmdi-lock"></i>
                                    </label>
                                    <input type="password" name='password' id='password' value={password}
                                    onChange={(e)=> setPassword(e.target.value)}
                                     autoComplete='off' placeholder='Your Password' />
                                </div>
                              
                                <div className='form-group form-button'>
                                    <input type="Submit" name="signin" id="signin" onClick={loginUser} 
                                    className="form-submit" value="Log in" />
                                </div>
                            </form>
                        </div>
                       

                    </div>

                </div>
            </section>
        </>
    );
};

export default Login;