"use strict";
const BitfieldJS_1 = require("./BitfieldJS");
let x = new BitfieldJS_1.default(0, { grow: 16 });
x.set(15);
x.set(31);
console.log(x);
console.log(x.get(2));
