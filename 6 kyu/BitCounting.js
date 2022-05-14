var countBits = function(n) {
    // num = n.toString(2)
    // console.log(num);
    return n.toString(2).split('1').length - 1
    // return num.split('1').length - 1
};

console.log(countBits(1234));