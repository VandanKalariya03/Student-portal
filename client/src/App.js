

import React from 'react';
// import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import {Routes, Route,useRoutes} from 'react-router-dom' 
import { BrowserRouter } from 'react-router-dom';   
import { Login } from './Login';
import { Navbar } from './componet/Navbar';
import { Profile } from './Profile';

function App() {

  
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path ="/" element={<Login />} />
    <Route path ="/Profile" element={<Profile />} />
    </Routes>
    </BrowserRouter>



    </>
  );
}

export default App;
