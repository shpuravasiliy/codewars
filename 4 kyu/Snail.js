snail = function(array) {
    if (!array.length) return [];
    else if (array.length === 1) return [].concat(...array);
    let newArr = [];
    while (array.length > 1) {
        newArr = newArr.concat(array[0]);
        array = array.slice(1);
        array = array.map( (t) => {
            newArr.push(t.pop());
            return t;
        } );
        newArr = newArr.concat(array[array.length - 1].reverse());
        array = array.slice(0, array.length -1);
        array = array.reverse().map( (t) => {
            newArr.push(t.shift());
            return t;
        } );
        array.reverse();
    }
    // return newArr.concat(array.flat().reverse());
    return newArr.concat(...array.reverse());
}

console.log(snail([[]]));
console.log(snail([[1]]));
console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log(snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]));
console.log(snail([[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]]));

