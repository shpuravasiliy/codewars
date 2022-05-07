function longest(s1, s2) {
    var s3 = s1 + s2
    var s4 = []
    for (var i = 0; i < s3.length; i++) {
            if (!s4.includes(s3[i], 0)) {
                s4.push(s3[i])
            }
    }
    return s4.sort().join('').toString()
}

console.log(longest("aretheyhere", "yestheyarehere"))