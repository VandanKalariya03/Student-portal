import React, { useState ,useEffect} from "react";
import { useCookies } from 'react-cookie';

export const StudentInfo = () => {

    const [cookies, setCookie] = useCookies(['id']);
    const [id,setId]=useState();
    const [FirstName,setFirstName]=useState();
    const [LastName,setLastName]=useState();
    const [Email,setEmail]=useState();



  const fillInfo = async() => {  
    const res = await fetch('/studentinfo',{
      method:"GET",
      headers:{
        Accept:"application/json",
          "Content-Type":"application/json"
      },
      credentials:"include"
  });
  
    const data = await res.json();
    if (res.status===200) {
      setId(data.id);
      setFirstName(data.FirstName);
      setLastName(data.LastName);
      setEmail(data.Email);
    }
      
    
  }

  
useEffect(() => {

 fillInfo(); 

}, []);


    const submitAPI = async(event) => {
        event.preventDefault();
        const res = await fetch('/studentinfo',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                id,Email,FirstName,LastName
            })
        })
        

        if(res.status==400){
            alert("invalid")
        }else if (res.status==201) {
            alert("Data add successfully")
        }
    }
  return (
    <>
      <div className="card shadow mb-3">
        <div className="card-header py-3">
          <p className="text-primary m-0 fw-bold">User Settings</p>
        </div>
        <div className="card-body">
          <form>
            <div className="row">
              <div className="col">
                <div className="mb-3">
                  <label className="form-label" htmlFor="username">
                    <strong>ID</strong>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    onChange={(e)=>{
                        setId(e.target.value)
                    }}
                    value={cookies.id}
                    id="username"
                    placeholder="user.name"
                    name="ID"
                  />
                </div>
              </div>
              <div className="col">
                <div className="mb-3">
                  <label className="form-label" htmlFor="email">
                    <strong>Email Address</strong>
                  </label>
                  <input
                    className="form-control"
                    type="email"
                    id="email"
                    value={Email}
                    onChange={(e)=>{
                        setEmail(e.target.value)
                    }}
                    placeholder="user@example.com"
                    name="email"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="mb-3">
                  <label className="form-label" htmlFor="first_name">
                    <strong>First Name</strong>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    value={FirstName}
                    id="first_name"
                    onChange={(e)=>{
                        setFirstName(e.target.value)
                    }}
                    placeholder="John"
                    name="FirstName"
                  />
                </div>
              </div>
              <div className="col">
                <div className="mb-3">
                  <label className="form-label" htmlFor="last_name">
                    <strong>Last Name</strong>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    value={LastName}
                    id="last_name"
                    onChange={(e)=>{
                        setLastName(e.target.value)
                    }}
                    placeholder="Doe"
                    name="LastName"
                  />
                </div>
              </div>
            </div>
            <div className="mb-3">
              <button className="btn btn-primary btn-sm" onClick={submitAPI} type="submit">
                Save Settings
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
