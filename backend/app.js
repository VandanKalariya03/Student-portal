const express = require('express');
const { mongoose } = require('mongoose');
const conn=require("./conn/conn.js");
conn();
const Student = require('./model/Student.js');
const User=require("./model/user")
const app=express();

var cookieParser = require('cookie-parser');
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

app.post("/login", (req, res) => {
    
        const { id, password } = req.body;
       
    try {
        
        
        User.findOne({ id: id }, (err, doc) => {
            console.log(doc);
            if (password==doc.password) {
                res.status(200).cookie("id",req.body.id).json({"DCcsd":"login success"})
               
                
            }else{
                res.status(400).json({"sdc":"invalid"})

            }
            console.log(err);
          
        });
       
    } catch (error) {
        // console.log(error);
    } 

    

})

app.post("/studentInfo", (req, res) => {
    
        const { id,Email, FirstName,LastName } = req.body;
    try {
        
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
    } catch (err) {
        console.log(err);
    } 

    
})

app.post("/studentInfo2", async (req, res) => {
    
        const { Address,City,Number } = req.body;
        // const id2=req.cookies;
        const id2="20dce043";
        console.log(id2);
    try {
     
        const StudentLogin = await Student.findOne({id:id2});
        
        console.log(StudentLogin);
        const resss=await StudentLogin.ADDff(req.body);
        console.log("added");
       
        res.status(200).json({"success":"wdcw"})
         
        
               

        
    } catch (err) {
        console.log(err);
    } 

    
})




app.listen(port,()=>{
    console.log(`from port ${port}` );
})