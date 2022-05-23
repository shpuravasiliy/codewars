function moveZeros(arr) {
    let q = 0;
    const newArr = arr.filter(item => {
        if (item === 0) {
            q++;
            return false;
        } else {
            return true;
        }
    })
    for(let i = 0; i < q; i++) {
        newArr.push(0);
    }
    return newArr;
}

console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]));
console.log(moveZeros([ 'a', 'b', 'c', 'd', 1, 1, 3, [], 1, 9, {}, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]));
