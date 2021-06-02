const EventEmitter = require('events');

var url = 'http://mylogger.io/log';


class Logger extends EventEmitter {
    log(message) {
        // Send an HTTP request
        console.log(message);
        console.log(__filename);
        console.log(__dirname);
    
        //Raise an event
    this.emit('messageLogged',{id: 1,url: 'http://'});
    }
}


module.exports = Logger;
// module.exports.endPoint = url;