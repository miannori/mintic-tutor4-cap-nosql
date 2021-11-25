require('dotenv').config() // .env
const   express = require('express'), 
        morgan = require('morgan'), //Ver request en consola 
        app = express(),
        cors = require('cors');

// settings
app.set('port', process.env.PORT); //Setear puerto, ej: localhost:4000




// middlewares
app.use(cors());
app.use(morgan('dev')); //Ver request en consola 
app.use(express.urlencoded({extended: false})); //body post form HTML 
app.use(express.json()); //JSON documents
app.use(cors());

//Routes
//Cambiar ENTIDAD, 
//app.use('/api', require('./routes/ENTIDAD'));
app.use('/api', require('./routes/LibroRouter')); // /api/
app.use('/api', require('./routes/AuthorRouter'));
app.use('/api', require('./routes/UserRouter'));


// starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});