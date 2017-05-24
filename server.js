var app = require('http').createServer()
var io = require('socket.io')(app);
var five = require("johnny-five");

app.listen(7000, '172.16.7.142', function(){
    console.log('Servidor Corriendo');
});



var pin2;
var pin3;
var pin4;
var pin5;
var pin6;
var pin7;
var pin8;
var pin9;
var pin10;
var pin11;
var pin12;
var pin13;


var board = new five.Board();


board.on("ready", function() {
     pin2 = new five.Pin(2);
     pin3 = new five.Pin(3);
     pin4 = new five.Pin(4);
     pin5 = new five.Pin(5);
     pin6 = new five.Pin(6);
     pin7 = new five.Pin(7);
     pin8 = new five.Pin(8);
     pin9 = new five.Pin(9);
     pin10 = new five.Pin(10);
     pin11 = new five.Pin(11);
     pin12 = new five.Pin(12);
     pin13 = new five.Pin(13);


    io.sockets.on('connection', function(socket){
        socket.on('data', function(n){
            encender(n);
        });
    });

    

});

function encender(n){
    
    if(n >= 2 && n<=11){
        
        for(i = 2; i<=n;i++){
            eval('pin'+i).high();
        }

        board.wait(150, function(){
            for(i = 2; i<=n;i++){
                eval('pin'+i).low();
            }
        });
    }

}

