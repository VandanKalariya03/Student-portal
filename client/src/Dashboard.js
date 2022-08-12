import React from 'react'
import { Navbar } from './componet/Navbar'


export const Dashboard = () => {
  return (
    <>
    <div className="main">
 <Navbar/>
  <div className="dashboard_main">
    <div className="dashboard_login_detail"></div>
    <div className="dashboard_nav">
      <p>Dashboard</p>
    </div>
    <div className="dashboard_subject">
      <div className="sub1">
        <div className="sub1_heading">
          <h2>Design &amp; Analysis of Algorithms</h2>
          <div className="sub1_code">
            <h3>CE355</h3>
          </div>
        </div>
      </div>
      <div className="sub2">
        <div className="sub2_heading">
          <h2>Operating System</h2>
          <div className="sub2_code">
            <h3>CE354</h3>
          </div>
        </div>
      </div>
      <div className="sub3">
        <div className="sub3_heading">
          <h2>Software Engineering</h2>
          <div className="sub3_code">
            <h3>CE343</h3>
          </div>
        </div>
      </div>
      <div className="sub4">
        <div className="sub4_heading">
          <h2>Advanced Web Technology</h2>
          <div className="sub4_code">
            <h3>CE377</h3>
          </div>
        </div>
      </div>
      <div className="sub5">
        <div className="sub5_heading">
          <h2>Software Group Project - III</h2>
          <div className="sub5_code">
            <h3>CE356</h3>
          </div>
        </div>
      </div>
      <div className="sub6">
        <div className="sub6_heading">
          <h2>Communication Soft Skills</h2>
          <div className="sub6_code">
            <h3>HS131.02A</h3>
          </div>
        </div>
      </div>
    </div>
    <div className="dashboard_container2">
      <div className="dashboard_sem_marks"></div>
      <div className="dashboard_sem_attendance"></div>
    </div>
  </div>
</div>

    </>
  )
}
