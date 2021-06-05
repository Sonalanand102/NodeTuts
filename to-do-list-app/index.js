
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();
// app.use('/users', usersRouter);
let router = express.Router();
let name1 = [];

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }));
//creating databse connection
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'todoList'
});
//connecting 
connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('mysql connected');
});



app.get('/', (req, res) => {
    res.render("list", { newListItems: name1 });
});

app.post('/', (req, res) => {
    let name = req.body.taskInput;
    name1.push(name);

     // insert list data into users table
     var sql = `INSERT INTO list(listItem) VALUES (${name})`;
     connection.query(sql, function (err, data) {
         if (err) {
             console.error('error connecting: ' + err.stack);
             return;
         }
         console.log("User data is inserted successfully ");
     });
     res.redirect('/');  // redirect to user form page after inserting the data
    
});



app.listen('3000', () => {
    console.log('listening to port 3000...');
});

