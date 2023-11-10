import express from 'express';

import path from 'path';
const app=express();

app.get("/",(req,res)=>{
    console.log("Cioa sei entrato nella home page");


})

app.listen("9000",()=>{
    console.log("Server sta aspettando la porta 9000");
})




