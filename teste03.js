// a) 1, 3, 5, 7, ___
var A = 1;
for(var i = 0; i < 4; i++){
  A += 2;
}
console.log(`a) ${A}`);

// b) 2, 4, 8, 16, 32, 64, ____
var B = 2;
for(var i = 0; i < 6; i++){
  B *= 2;
}
console.log(`b) ${B}`);

// c) 0, 1, 4, 9, 16, 25, 36, ____
var n = 7;
var C = n * n;

console.log(`c) ${C}`); // c) 49

// d) 4, 16, 36, 64, ____
var D = 10 * 10;
console.log(`d) ${D}`);

// e) 1, 1, 2, 3, 5, 8, ____
var a = 1;
var b = 1;
for (var i = 2; i < 7; i++) {
  var nextNumber = a + b;
  a = b;
  b = nextNumber;
}
console.log(`e) ${b}`);

// f) 2,10, 12, 16, 17, 18, 19, ____
var sequence = [2, 10, 12, 16, 17, 18, 19];

var nextNumber;
for (var i = 200; i < Infinity; i++) {
  if (i.toString().startsWith("2")) {
    nextNumber = i;
    break;
  }
}

console.log(`e) ${i}`);
  