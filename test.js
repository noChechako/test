'use strict'

const net = require('net');

const onData = (data, ...args) =>{
    console.dir({args});
    console.log('res:' +data)
}
const server = net.createServer(socket => {
    console.log(socket.address());
    socket.setNoDelay(true);
    socket.write('kuku');
    socket.on('data', onData);
    socket.on('error', err =>{
        console.log('socket err')
    })
}).listen(2000)

server.on('error', (err) => {
    console.log('er', err)
})