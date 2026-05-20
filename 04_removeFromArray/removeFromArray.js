const removeFromArray = function(arr, ...elementosAEliminar) {
    return arr.filter(elemento => !elementosAEliminar.includes(elemento));
};

// Do not edit below this line
module.exports = removeFromArray;