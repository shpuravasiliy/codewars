function findOdd(A) {
    var numbers = []
    var sum = 0
    for (const AKey in A) {
        if (numbers.includes(A[AKey])) continue
        numbers.push(A[AKey])
    }
    for (var i = 0; i < numbers.length; i++) {
        for (var j = 0; j < A.length; j++) {
            if (A[j] == numbers[i]) sum++
        }
        if (sum % 2) return numbers[i]
    }
}

const findOdd2 = (xs) => xs.reduce((a, b) => a ^ b);

// console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]))
console.log(findOdd2([1,2,4,3,3,3,4,3,3,3,1,2,5]))