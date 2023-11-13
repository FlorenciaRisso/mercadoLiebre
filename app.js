//require express
const express=require('express');

//Ejecucion de express
const app=express();

//Require path
const path=require('path');

//Usando recursos estaticos
app.use(express.static('public'));

//Levantando el servidor Puerto 3000
const port = process.env.PORT || 3000;
app.listen(port,()=>console.log("Exito")); 


//RUTAS

app.get('/', (req,res) =>{ 
    res.sendFile(path.resolve(__dirname,'./views/home.html')); 
});

app.get('/register.html',(req,res) =>{
    res.sendFile(path.resolve(__dirname,'./views/register.html'));
});

app.get('/login.html',(req,res) =>{
    res.sendFile(path.resolve(__dirname,'./views/login.html'));
});