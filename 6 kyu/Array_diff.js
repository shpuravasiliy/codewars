function arrayDiff(a, b) {
    var aLen = a.length
    for (var i = 0; i < b.length; i++) {
        for (var j = 0; j < aLen;) {
            if (b[i] == a[j]) {
                a.splice(j, 1)
                aLen = a.length
                continue
            }
            j++
        }
    }
    return a
}

console.log(arrayDiff([1,2,2], [2]))