const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('connect', function(){
    console.log('successfully connected to game server');
  })

  conn.on('data', (data) => {
    console.log(data);
  })

  conn.on('connect', () => {
    console.log('connected');
  })

  conn.on('connect', () => {
    conn.write('Name: BAN');
  })

 conn.on('connect', () => {
     conn.write('Move: up')
    setInterval(() => {
     conn.write('Move: left')
    }, 200)
   })

  return conn;
}
module.exports = connect;