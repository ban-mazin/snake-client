const connect = require('./client');
console.log('Connecting ...');
connect();

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  return stdin;
}
process.stdin.on('data', (key) => {
  process.stdout.write('.');
});

console.log('after callback');
