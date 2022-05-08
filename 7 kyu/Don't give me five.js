function dontGiveMeFive(start, end) {
    var arrNum = []
    var result = 0
        for (var i = start; i <= end; i++) {
            if (i == 5 || i == -5 || i % 5 == 0 && i % 3 == 0 && !i == 0) continue
            arrNum.push(i)
            result++
        }
    return console.log('Array: ' + arrNum + ' Result ' + result)
}


function dontGiveMeFive2(start, end) {
    var arrNum = []
    var result = 0
    for (var i = start; i <= end; i++) {
        if (i.toString().includes(5)) continue
        arrNum.push(i)
        result++
    }
    return console.log('Array: ' + arrNum + ' Result ' + result)
}

dontGiveMeFive2(-4, 170)