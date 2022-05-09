function digital_root(num) {
    if (num < 10) return num;
    do {
        num = num.toString().split('').reduce((a, b) => Number(a) + Number(b))
    } while (num > 9)
    return num
}

console.log(digital_root(2899988))