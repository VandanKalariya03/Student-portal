import React, { useState, useEffect } from "react";

export const StudentInfo2 = () => {

    const [Address,setAddress]=useState();
    const [City,setCity]=useState();
    const [Number,setNumber]=useState();


    

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
        setAddress(data.Address);
        setCity(data.City);
        setNumber(data.Number);

      }
        
      
    }
  
    
  useEffect(() => {
  
   fillInfo(); 
  
  }, []);
    const submitAPI2 = async(event) => {
        event.preventDefault();
        const res = await fetch('/studentinfo2',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
               Address,City,Number
            })
        })
        

        if(res.status==400){
            alert("invalid")
        }else if (res.status==200) {
            alert("Data add successfully")
        }
    }
  return (
    <>
      <div classname="card shadow">
        <div classname="card-header py-3">
          <p classname="text-primary m-0 fw-bold">Contact Settings</p>
        </div>
        <div classname="card-body">
          <form>
            <div classname="mb-3">
              <label classname="form-label" htmlfor="address">
                <strong>Address</strong>
              </label>
              <input
                classname="form-control"
                type="text"
                id="address"
                value={Address}
                onChange={(e)=>{
                    setAddress(e.target.value);
                }}
                placeholder="Sunset Blvd, 38"
                name="address"
              />
            </div>
            <div classname="row">
              <div classname="col">
                <div classname="mb-3">
                  <label classname="form-label" htmlfor="city">
                    <strong>City</strong>
                  </label>
                  <input
                    classname="form-control"
                    type="text"
                    id="city"
                    value={City}
                    onChange={(e)=>{
                        setCity(e.target.value);
                    }}
                    placeholder="Los Angeles"
                    name="city"
                  />
                </div>
              </div>
              <div classname="col">
                <div classname="mb-3">
                  <label classname="form-label" htmlfor="country">
                    <strong>Number</strong>
                  </label>
                  <input
                    classname="form-control"
                    type="text"
                    id="country"
                    value={Number}
                    onChange={(e)=>{
                        setNumber(e.target.value);
                    }}
                    placeholder="USA"
                    name="number"
                  />
                </div>
              </div>
            </div>
            <div classname="mb-3">
              <button classname="btn btn-primary btn-sm" onClick={submitAPI2} type="submit">
                Save&nbsp;Settings
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
