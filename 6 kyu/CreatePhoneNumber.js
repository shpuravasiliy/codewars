function createPhoneNumber(numbers){
    const num1 = numbers.join('').slice(0, 3)
    const num2 = numbers.join('').slice(3, 6)
    const num3 = numbers.join('').slice(6)
    return '(' + num1 + ') ' + num2 + '-' + num3
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));