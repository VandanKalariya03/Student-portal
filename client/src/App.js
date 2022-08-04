

import React from 'react';
// import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import {Routes, Route,useRoutes} from 'react-router-dom' 
import { BrowserRouter } from 'react-router-dom';   
import { Login } from './componet/Login';
import { Navbar } from './componet/Navbar';

function App() {

  
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path ="/" element={<Login />} />
    <Route path ="/navbar" element={<Navbar />} />
    </Routes>
    </BrowserRouter>



    </>
  );
}

export default App;
