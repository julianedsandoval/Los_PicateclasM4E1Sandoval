const express = require('express');
const path = require('path');
const app = express ();
// le decimos cual es la carpeta publica
const publicPath = path.resolve(__dirname, './public');
// para que encuentre las imagenes y css en la carpeta public como un recurso de archivos estáticos
app.use(express.static(publicPath));
//para que levante en Heroku
const port = process.env.PORT;
app.listen(port || 3000,() => console.log('Levantando un servidor con Express en el puerto 3000'));
 
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'/views/home.html'))
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname,'/views/register.html'))
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname,'/views/login.html'))
});

