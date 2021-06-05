
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();
let name1 = [];

app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended : true}));
 //creating databse connection
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'todoList'
  });
 //connecting 
  connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
  
    console.log('mysql connected');
  });

//   creating database
// app.get('/createdb', (req,res) => {
//     let sql = 'CREATE DATABASE todoList';
//     connection.query(sql, (err,result) => {
//         if(err) throw err;
//         console.log(result);
//         res.send('Databse Created');
//     });
// });

app.get('/',(req,res) => {
    res.render("list",{newListItems: name1});
});

app.post('/',(req,res) => {
    let name = req.body.taskInput;
    // console.log(name);
    // res.render("list",{newListItem:name});
    name1.push(name);
    res.redirect('/');
});

app.listen('3000',()=>{
    console.log('listening to port 3000...');
});

