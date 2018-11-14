const express = require("express");
const app = express();
const PORT = process.env.PORT || 9090;
const bodyParser = require('body-parser');
const db = require('./models');
const io = require('socket.io');
const http = require('http');
const server = http.Server(app);
const socket = io(server);


// Tell body-parser the type of data to use
app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.urlencoded({ extended: true }))



// Require the api routes here
require('./routes/apiRoutes')(app);


// Start the API server
db.sequelize.sync({ force: false }).then(function () {
    server.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });

    // socket.io 
    // WORKING: it connects when entering sample chat component and consolelogs msgs.
    socket.on('connection', (socket) => {
        console.log('connected to socket', socket)
        //socket.on will receive from socket.emit (on = recieve, emit = send)
        // .on recieves data as an argument in the form of function(msg)
        socket.on('channel1', function (msg) {
            console.log('message ' + msg);
            socket.emit('channel1', msg)
        })
    })
});







  /*
  OLD CODE TO START THE SERVER
    var server = app.listen(PORT, function(){
    var host = server.address().address
    var port = server.address().port
    console.log(`server started on ${PORT}`)
})

*/

//TESTING MESSAGE
/*
app.post("/login", function(req,res){
    res.send({
        message: 'testing new server!'
    })
})

*/