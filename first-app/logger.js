var url = 'http://mylogger.io/log';

function log(message) {
    // Send an HTTP request
    console.log(message);
    console.log(__filename);
    console.log(__dirname);
}

module.exports.log = log;
// module.exports.endPoint = url;