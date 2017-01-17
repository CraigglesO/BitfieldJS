import Bitfield from './BitfieldJS';

let x = new Bitfield(0, {grow:16});
x.set(15);
x.set(31);
console.log(x);

console.log(x.get(2));



//const buf = Buffer.from('40', 'hex');

//console.log(x.xor(buf));
