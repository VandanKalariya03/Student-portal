import React, { useState } from 'react'
import { StudentInfo } from './studentInfo'
import { StudentInfo2 } from './studentInfo2'
import './../main.css'


export const Navbar = () => {
  return (
    <>
      <div className="nav">
  <div className="nav_logo">
    <img src="/l.jpg" alt="" />
  </div>
  <ul>
    <li>
      <i className="bi bi-speedometer2" /> <a href="Dashboard">Dashboard</a>
    </li>
    <li>
      <i className="bi bi-person-lines-fill" /> <a href="Profile">Profile</a>
    </li>
    <li>
      <i className="bi bi-table" />
      <a href="#">Table</a>
    </li>
    <li>
      <i className="bi bi-speedometer2" />
      <a href="#">Login</a>
    </li>
    <li>
      <i className="bi bi-speedometer2" />
      <a href="#">Register</a>
    </li>
  </ul>
  <button className="nav-button">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={30}
      height={30}
      fill="currentColor"
      className="bi bi-arrow-left-circle-fill"
      viewBox="0 0 16 16"
    >
      <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
    </svg>
  </button>
</div>

    </>
  )
}
