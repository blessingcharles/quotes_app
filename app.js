const express = require('express');

const bodyParser = require('body-parser');

const controller =  require('./controllers/todoController');

const app = express();

app.set('view engine' , 'ejs');
app.use(express.static('./public'))

controller(app);
app.listen(3000);