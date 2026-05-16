const reverseString = function(phrase) {
    let reversePhrase= ""
    for (i=phrase.length;i>0;i--){
      reversePhrase += phrase.slice(i-1,i); 
    }
    
return reversePhrase;
};

// Do not edit below this line
module.exports = reverseString;