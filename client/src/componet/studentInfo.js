import React, { useState, useEffect } from "react";
import { useCookies } from 'react-cookie';
import './../main.css'

export const StudentInfo = () => {

  const [cookies, setCookie] = useCookies(['id']);
  const [id, setId] = useState();
  const [FirstName, setFirstName] = useState();
  const [LastName, setLastName] = useState();
  const [Email, setEmail] = useState();



  const fillInfo = async () => {
    const res = await fetch('/studentinfo', {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      credentials: "include"
    });

    const data = await res.json();
    if (res.status === 200) {
      setId(data.id);
      setFirstName(data.FirstName);
      setLastName(data.LastName);
      setEmail(data.Email);
    }


  }


  useEffect(() => {

    fillInfo();

  }, []);


  const submitAPI = async (event) => {
    event.preventDefault();
    const res = await fetch('/studentinfo', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id, Email, FirstName, LastName
      })
    })


    if (res.status == 400) {
      alert("invalid")
    } else if (res.status == 201) {
      alert("Data add successfully")
    }
  }
  return (
    <>
      <div className="user_settings">
        <div className="user_settings_nav">
          <h2>User Settings</h2>
        </div>
        <form className="user-form" action="POST">
          <div>
            <label htmlFor="firstName" className="user-form-labels">
              First Name{" "}
            </label>
            <br />
            <input id="firstName" type="text" onChange={(e) => {
              setFirstName(e.target.value)

            }}
            value={FirstName}
            name="FirstName"
            placeholder="First Name" />
          </div>
          <div>
            <label htmlFor="lastName" className="user-form-labels">
              Last Name
            </label>
            <br />
            <input id="lastName" type="text" onChange={(e) => {
              setLastName(e.target.value)
            }} 
            value={LastName}
            name="LastName"
            placeholder="Last Name" />
          </div>
          <div>
            <label htmlFor="id" className="user-form-labels">
              Id
            </label>
            <br />
            <input id="id" type="text" onChange={(e) => {
              setId(e.target.value)
            }} 
            value={cookies.id}
            name="id"
            placeholder="ID" />
          </div>
          <div>
            <label htmlFor="emailAddress" className="user-form-labels">
              Email Address
            </label>
            <br />
            <input id="emailAddress" type="text"
            value={Email}
            name="email"            
            onChange={(e) => {
              setEmail(e.target.value)
            }} placeholder="Email Address" />
          </div>
        </form>
        <button className="bcss" onClick={submitAPI}>Save Settings</button>
      </div>


    </>
  );
};
