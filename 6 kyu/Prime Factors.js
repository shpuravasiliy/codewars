function prime_factors_old(n) {
    var answer = []
    while (n % 2 == 0) {
            n = n / 2
            answer.push(2)
    }
    while (n % 3 == 0) {
        n = n / 3
        answer.push(3)
    }
    while (n % 5 == 0) {
        n = n / 5
        answer.push(5)
    }
    while (n % 7 == 0) {
        n = n / 7
        answer.push(7)
    }
    if (n == 1) {
        return answer
    } else {
        answer.push(n)
        return answer
    }
}

function prime_factors(n) {
    var answer = []
    var number = n
    for (let i = 2; i <= 1000; i++) {
        let flag = 1
        let j = 2
        for (; (j <= i / 2) && flag; j++) {
            if (i % j == 0) flag = 0
        }
        while (flag && number % i == 0) {
            number = number / i
            answer.push(i)
        }
        if (number == 1) return answer
    }
    answer.push(number)
    return answer
}



console.log(prime_factors_old(2340164))

console.log(prime_factors(2340164))