import React, { useState } from "react";
import{Link, useHistory} from 'react-router-dom';
import {signInWithEmailAndPassword} from 'firebase/auth'

import {auth} from '../components/config/firebase'




function Login (){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let history = useHistory();

    const login = (()=> {

        signInWithEmailAndPassword(auth, email, password).then(()=>{
            history.push("/home") ;

        }).catch((err)=>{
            console.log(err);
        })
       
    })




    return(
        <div className="container" >
        <h1>Login</h1>

        <input type="email" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" placeholder="Enter your passwaord" onChange={(e)=>setPassword(e.target.value)} />


        
        <button className="btn btn-secondary" onClick={login}>Login</button>

            <span>Don't have an account?</span>
            <span>
                <Link to="/sign-up" >Create an account here</Link>
            </span>
            
        </div>
    )
}














export default Login;