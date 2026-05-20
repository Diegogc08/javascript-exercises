const sumAll = function(numMin,numMax) {
if (numMin < 0){
    return "ERROR"
}
if (typeof numMin !=="number"||typeof numMax !=="number"){
    return "ERROR"
}
if (!Number.isInteger (numMin)|| !Number.isInteger (numMax)) {
    return "ERROR"
}
const min = Math.min(numMin, numMax);
const max = Math.max(numMin, numMax);

let suma = 0;

for (let i = min; i <= max; i++){
    suma += i;

}
return suma;
};

// Do not edit below this line
module.exports = sumAll;
