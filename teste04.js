var originalString = prompt("Digite uma string para ser invertida:");
var invertedString = "";

for (var i = originalString.length - 1; i >= 0; i--) {
  invertedString += originalString[i];
}

console.log(invertedString);