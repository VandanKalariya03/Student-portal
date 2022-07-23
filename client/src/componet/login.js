import React, { useState,useHistory } from 'react'
import "../style.css"

export const Login = () => {

    let history = useHistory ();
   
    const [username,setUsername]=useState();
    const [password,setPassword]=useState();
    console.log(username);
    
    
    const LoginUser = async(e) => {
        e.preventDefault();
        const res = await fetch('/login',{
            
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                username,password
            })
        })
        

        if(res.status===400){
            alert("invalid")
        }else if (res.status===200) {
            alert("sucess")
            // history.push("./navbar")
        }
    }

        

    return (

        <>
        <form method='POST'>
            
            <div className="container">
                <h2>Login Form</h2>
                <label htmlFor="uname">
                    <b>Username</b>
                </label>
                <input type="text" placeholder="Enter Username" name="username" onChange={(e)=>{ setUsername(e.target.value) }} required="" />
                <label htmlFor="psw">
                    <b>Password</b>
                </label>
                <input type="password" placeholder="Enter Password" id="password" onChange={(e)=>{ setPassword(e.target.value) }}/>
                <button type="button" onClick={LoginUser}>
                    Login
                </button>
            </div>

        </form>

        </>
    );

}