// get the reference of EventEmitter class of events module
var event = require('events');
var fs = require('fs');

// creating function which returns emitter object
var readfile = function (filepath) {
    //create an object of EventEmitter class by using above reference
    var emitter = new event.EventEmitter();
    fs.readFile(filepath, 'utf-8', function (err, data) {
        if (err) {
            //Emitting for error event
            emitter.emit('error', err);
        }
        //Emitting for read event
        emitter.emit('read', data);
    });
    return emitter;
};

// calling function
var myEvent = readfile('sample.txt');

// raising error event
myEvent.on('error', function (data) {
    console.log(data);
});

// raising read event
myEvent.on('read', function (data) {
    console.log(data);
});