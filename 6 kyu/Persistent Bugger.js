function persistence(num) {
    var nums = 0;
    var numStr = [];
    if (num < 10) return nums;
    do {
        numStr = num.toString();
        for (var i = 0; i < numStr.length; i++) {
            i ? num = num * numStr[i] : num = numStr[i];
            }
        nums++;
        console.log(num);
    } while (num > 9)
    return nums;
}

function persistence2(num) {
    var nums = 0;
    var numStr;
    if (num < 10) return nums;
    do {
        numStr = num.toLocaleString();
        for (var i = 0; i < numStr2.length; i++) {
            i ? num = num * numStr2[i] : num = numStr2[i];
        }
        nums++;
        console.log(num);
    } while (num > 9)
    return nums;
}


console.log(persistence(2899988))