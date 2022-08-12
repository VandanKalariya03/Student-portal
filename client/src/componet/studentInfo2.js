import React, { useState, useEffect } from "react";
import './../main.css'

export const StudentInfo2 = () => {

  const [Address, setAddress] = useState();
  const [City, setCity] = useState();
  const [Number, setNumber] = useState();
  const [Country, setCountry] = useState();




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
      setAddress(data.Address);
      setCity(data.City);
      setNumber(data.Number);
      setCountry(data.Country);

    }


  }


  useEffect(() => {

    fillInfo();

  }, []);
  const submitAPI2 = async (event) => {
    event.preventDefault();
    const res = await fetch('/studentinfo2', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        Address, City, Number,Country
      })
    })


    if (res.status == 400) {
      alert("invalid")
    } else if (res.status == 200) {
      alert("Data add successfully")
    }
  }
  return (
    <>
      {/* <div classname="card shadow">
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
                onChange={(e) => {
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
                    onChange={(e) => {
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
                    onChange={(e) => {
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
      </div> */}



      <div classname="user_contact_setting">
        <div classname="user_contact_setting_nav nav1">
          <h2 className="ad">Contact Settings</h2>
        </div>
        <form classname="user-form" action="">
          <div>
            <label htmlfor="">Contact No </label> <br />
            <input type="text" onChange={(e) => {
              setNumber(e.target.value);
            }} value={Number} placeholder="Contact No" />
          </div>
          <div>
            <label htmlfor="">Address</label>
            <br />
            <input type="text" onChange={(e) => {
              setAddress(e.target.value);
            }} value={Address} placeholder="Address" />
          </div>
          <div>
            <label htmlfor="">City</label>
            <br />
            <input type="text" onChange={(e) => {
              setCity(e.target.value);
            }} 
            value={City}
            placeholder="City" />
          </div>
          <div>
            <label htmlfor="">Country</label>
            <br />
            <input type="text" onChange={(e) => {
              setCountry(e.target.value);
            }}
            name="Country"
            value={Country}

            placeholder="Country" />
          </div>
        </form>
        <button className="bcss" onClick={submitAPI2} >Save Settings</button>
      </div>

    </>
  );
};
