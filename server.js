import express from "express";
import "dotenv/config.js";

const server = express()

const PORT = process.env.PORT

const ready = () => console.log("server ready in port: "+PORT);

server.get('/',(req,res) => {
    res.send('Hola mundo en Express')
})

server.get('/saludo',(req,res) => {
    res.send('Hola bienvenido al mundo de Express')
})

server.listen(PORT,ready)

console.log(process.env.PORT);
