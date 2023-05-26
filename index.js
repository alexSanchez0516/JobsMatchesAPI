const express = require('express');
const cors = require('cors');
require('dotenv').config();
const fetch = require("node-fetch");
const app = express();

app.use(cors());
// app.set('view engine', 'pug')
app.use( express.static('public'));

app.use( express.json() );

// app.use( '/api/auth', require('./routes/auth') );
app.use( '/', require('./routes/appRoutes') );


// Se indica el directorio donde se almacenarán las plantillas 
app.set('views', './views');

// Se indica el motor del plantillas a utilizar
app.set('view engine', 'pug');


app.get('/hello', (req, res) => {
    res.render('hello.pug', { title: 'Hey', message: 'Hello there!' }); // Se muestra la plantilla hello.pug
});


app.listen( process.env.PORT, () => {
    console.log('servidor corriendo en tl puerto ', process.env.PORT);
});