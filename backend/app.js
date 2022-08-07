const express = require('express');
const { mongoose } = require('mongoose');
const conn=require("./conn/conn.js");
var fs = require('fs');
var path = require('path');
var multer = require('multer');
var imgModel = require('./model/img');

conn();
const Student = require('./model/Student.js');
const User=require("./model/user")
const app=express();

var cookieParser = require('cookie-parser');
const { log } = require('console');
app.use(cookieParser());
const port=process.env.PORT || 5000;



app.use(express.json());

   

app.post("/newstudent",(req,res)=>{
    let newUser = new User({
        id: req.body.id,
        password: req.body.password       
    })

    newUser.save((err, reslut) => {
        if (err) console.log(err)
        else res.status(201).json(reslut)
    })
    
})

app.post("/login", async (req, res) => {
    
        const { id, password } = req.body;
       
    try {
        
        
        const doc = await User.findOne({ id: id })
        if (doc) {
            
            console.log(doc);
            if (password==doc.password) {
                res.status(200).cookie("id",req.body.id).json({"DCcsd":"login success"})
                console.log("login success");
               
                
            }else{
                res.status(400).json({"sdc":"invalid"})
                console.log("invalid");
                
            }
        }else{
            res.status(400).json({"sdc":"invalid"})
            console.log("invalid");
            conxsole.log(err);
        }
          
   
    } catch (error) {
        console.log(error);
    } 

    

})

app.post("/studentInfo", async (req, res) => {
    
        const { id,Email, FirstName,LastName } = req.body;
    try {
        
        const StudentLogin = await Student.findOne({ id: id });
    if (!StudentLogin) {
         
     
        let newUser = new Student({
            id: id,
            Email: Email,       
            FirstName: FirstName,
            LastName: LastName

        })
               

        newUser.save((err, reslut) => {
            if (err) console.log(err)
            else res.status(201).json(reslut)
        })
    }else{
        const ress2=await StudentLogin.AddInfo(req.body);
        console.log("added");
       
        res.status(200).json({"success":"wdcw"})
    }
    } catch (err) {
        console.log(err);
    } 

    
})

app.post("/studentInfo2", async (req, res) => {
    
        const { Address,City,Number } = req.body;
        const id2=req.cookies.id;
        console.log(id2);
    try {
     
        const StudentLogin2 = await Student.findOne({id:id2});
        
        console.log(StudentLogin2);
        const resss=await StudentLogin2.AddInfo2(req.body);
        console.log("added");
       
        res.status(200).json({"success":"wdcw"})
         
        
               

        
    } catch (err) {
        console.log(err);
    }     
})


app.get("/studentInfo", async (req, res) => {   

    const id2=req.cookies.id;
    console.log(id2);
    try {
        const StudentLogin = await Student.findOne({id:id2});
        console.log(StudentLogin);
        res.status(200).json(StudentLogin)
    } catch (err) {
        console.log(err);
    }     
});




app.listen(port,()=>{
    console.log(`from port ${port}` );
})