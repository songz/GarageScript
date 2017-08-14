const add = require('./sol.js');
const test = (a,b,c) => {
  const msg = add(a,b) === c ? ' CORRECT!' : ' WRONG!';
  console.log(`you are ${msg}`);
}

test(1,2,3);
test(2,0,2);
test(8,1,9);
