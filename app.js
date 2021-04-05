const express = require('express');
const path = require('path');
const app = express ();
// le decimos cual es la carpeta publica
const publicPath = path.resolve(__dirname, './public');
// para que encuentre las imagenes y css en la carpeta public como un recurso de archivos estáticos
app.use(express.static(publicPath));
app.listen(3030,() => console.log('Levantando un servidor con Express'));
 
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname,'/views/home.html'))
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname,'/views/register.html'))
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname,'/views/login.html'))
});

