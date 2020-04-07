//requiring mongoose
const mongoose = require('mongoose');
//connecting to data base
mongoose.connect('mongodb://localhost/task_list_db');

//acquiring the connection(to check if it connected or not)
const db=mongoose.connection;

//Error
db.on('error', console.error.bind(console, 'connection error:'));

//up and running
db.once('open', function() {
    console.log("we're connected to DataBase!"); 
  });