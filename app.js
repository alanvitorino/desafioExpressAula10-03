const express = require('express')
const app = express()

const path = require('path');

app.get('/cadastro', (req , res) => {res.sendFile(path.join(__dirname, '/cadastro.html'))});
app.get('/login', (req , res) => {res.sendFile(path.join(__dirname, '/login.html'))});
app.get('/home', (req , res) => {res.sendFile(path.join(__dirname, '/home.html'))});
app.get('/cadastro', (req , res) => {res.sendFile(path.join(__dirname, '/cadastro.html'))});
app.get('/' , (req,res) => {res.send('desculpe, essa página não existe')});

app.listen(3000, ()=>console.log("Servidor rodando na url http://localhost:3000"))
