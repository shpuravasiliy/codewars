function dirReduc(arr) {
    const ns = ['NORTH', 'SOUTH'];
    const we = ['WEST', 'EAST'];
    return arr.reduce((acc, cur, index) => {
        if (index === 0) return [cur];
        const prev = acc[acc.length - 1];
        if (((ns.includes(prev) && ns.includes(cur)) || (we.includes(prev) && we.includes(cur))) && prev !== cur) {
            acc.splice(-1, 1);
            return acc;
        }
        return [...acc, cur];
    }, []);
}

// console.log(dirReduc(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST']));
// //["WEST"]
// console.log(dirReduc(['NORTH', 'WEST', 'SOUTH', 'EAST']));
// //["NORTH", "WEST", "SOUTH", "EAST"]
// console.log(dirReduc(['NORTH', 'SOUTH', 'EAST', 'WEST', 'EAST', 'WEST']));
// //[]
// console.log(dirReduc(['NORTH', 'SOUTH', 'WEST', 'EAST', 'SOUTH', 'NORTH', 'NORTH', 'NORTH', 'NORTH', 'EAST', 'WEST', 'NORTH', 'SOUTH', 'EAST', 'WEST']));
// // [ 'NORTH', 'NORTH', 'NORTH' ]