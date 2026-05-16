const repeatString = function(word, times) {
let string= "";
if (times<0){
    return ("ERROR");
}
for (let i= 0; i < times; i++) {
    console.log(word);
    string += word;
    console.log(string);
}
return string;
}; 
// Do not edit below this line
module.exports = repeatString;
