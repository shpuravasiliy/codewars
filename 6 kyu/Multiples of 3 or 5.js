function solution(number){
    var arrMul = []
    var sum = 0;
    for (var i = 1; i < number; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            arrMul.push(i)
            continue
        }
        if (i % 3 == 0 || i % 5 == 0) {
            arrMul.push(i)
        }
    }
    for (var arrMulKey in arrMul) {
         sum = sum + arrMul[arrMulKey]
    }
    return sum
}

console.log(solution(20))