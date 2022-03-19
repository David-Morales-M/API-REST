// Frameworks
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var cors = require('cors')
app.use(cors())


// Configuraciones
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);


// Configuración mínima del middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());


// Iniciando el servidor \ Listener
app.listen(app.get('port'),()=>{
    console.log(`Server listening on port ${app.get('port')}`);
});

// Routes
app.use(require('./routes/index'));
//app.use('/api/concesionarios', require('./routes/concesionarios'));
//app.use('/api/autos', require('./routes/autos'));