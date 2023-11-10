import express from 'express';

import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
//nell'ultima versione non esiste dirname quindi ho usato un'altro metodo
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app=express();
app.use(express.static(path.join(__dirname, 'public')));

app.get("/",(req,res)=>{
    console.log(__dirname);
    res.sendFile(path.join(__dirname,"public","home.html"));


})

app.listen("7000",()=>{
    console.log("Server sta aspettando la porta 7000");
})




