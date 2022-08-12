

import React from 'react';
// import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import {Routes, Route,useRoutes} from 'react-router-dom' 
import { BrowserRouter } from 'react-router-dom';   
import { Dashboard } from './Dashboard';
import { Login } from './Login';
import { Profile } from './Profile';

function App() {

  
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path ="/" element={<Login />} />
    <Route path ="/Dashboard" element={<Dashboard />} />
    <Route path ="/Profile" element={<Profile />} />
    </Routes>
    </BrowserRouter>



    </>
  );
}

export default App;
