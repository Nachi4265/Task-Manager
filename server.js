const fs = require("fs");

fs.readFile("./data.json", "utf-8", (err, jsonString)=>{
    if(err){
        console.log(err);
    }else{
        try{
    const data = JSON.parse(jsonString);
    console.log(data.taskname);
} catch (err){
    console.log("error parsing JSON",err)
}}
})

const input = document.querySelector("#new-task-input");
const newTask = input

const jsonString = JSON.stringify(newTask);
console.log(jsonString);

fs.writeFile("./data.json",JSON.stringify(newTask),(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("FILE SUCCESSFULLY WRITTEN!");
    }
});

jsonReader("./data.json",(err,data)=>{
    if (err){
        console.log(err);
    }else{
        data.taskname += " go to the school dance";
        fs.writeFile("./data.json",JSON.stringify(data),err =>{
            if(err){
                console.log(err);
            }
        });
    }
});






// const express = require ("express");
// const app = express();

// app.get("/", (req, res) =>{
//     res.send("Hello world!!");
// });


// app.get("/api/courses/" , (req, res) =>{
//     res.send([1,2,3]);
// })


// app.get("/api/courses/:id" , (req, res) =>{
//     res.send(req.params.id);
// })

// //port 
// const port = process.env.PORT || 3000;
// app.listen(3000,() => console.log(`It's living on port ${port}...`))
















// const http = require("http");

// const server = http.createServer

// import fs from "fs"
// import express from "express"

// const app = express();



// app.get("/",(req,res) => {
//     fs.readFile("/data.json",(err,data) =>{
//         if(err)return err;
//         res.json(JSON.parse(data))
//     })
// })

// app.Listen(6666,(err) => {
//     if(err) return err;
//     console.log(`It's undead on port ${port}`)
// })