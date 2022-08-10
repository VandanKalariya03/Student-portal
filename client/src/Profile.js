import React from 'react'
import { Navbar } from './componet/Navbar'
import { StudentInfo } from './componet/studentInfo'
import { StudentInfo2 } from './componet/studentInfo2'

export const Profile = () => {
    return (
        <>
            <div class="main">
                <Navbar />
                <div className="profile">
                    <div className="profile_nav">
                        <p>Profile</p>
                    </div>
                    <div className="profile_info">
                        <div className="profile_img">
                            <img
                                className="profile-pic"
                                src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
                            />
                        </div>
                        <div className="profile_contant">
                            <StudentInfo/>
                            <StudentInfo2/>

                            
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
