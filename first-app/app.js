
// Built-in Modules
// HTTP Modules
// const http = require('http');
// const server = http.createServer((req,res)=>{
//      if(req.url === '/'){
//          res.write('Hello World');
//          res.end();
//      }

//      if(req.url === '/api/courses'){
//          req.write(JSON.stringify([1,2,3]));
//          res.end();
//      }
// });
// server.listen(3000);
// console.log('Listening on port 3000...');

// Event Modules
// const EventEmitter = require('events');
//Register a listner
// emitter.on('messageLogged', function(arg){
//     console.log('Listner Called',arg);
// });
// const Logger = require('./logger');
// const logger = new Logger();
//ES6 Register a Listner
// logger.on('messageLogged', (arg) => {
//     console.log('Listner Called',arg);
// });
// logger.log('message');


// File System Modules
// const fs = require('fs');
// const files = fs.readdirSync('./'); //syncronous method
// console.log(files);
// fs.readdir('./',function(err,files){ //asyncronous method
//     if (err) console.log('Error ', err);
//     else console.log('Result ', files);
// });

// OS module
// const os = require('os');
// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();
// console.log('Total Memory: ' + totalMemory); or
// console.log(`Total Memory: ${totalMemory}`); //Template string //ES6 / ES2015: ECMAScript 6
// console.log(`Total Memory: ${freeMemory}`);

// Path Module
// const path = require('path');
// var pathObj = path.parse(__filename);
// console.log(pathObj);

//Loading  Module
// const logger = require('./logger');
// logger.log('message');

// Object
// function sayHello(name){
//     console.log('Hello ' + name);
// }

// sayHello('sonal');
// console.log(window);
// console.log(module);