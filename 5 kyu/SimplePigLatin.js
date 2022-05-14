function pigIt(str){
    function replaceChar(str) {
        return str = str.slice(1) + str[0] + 'ay'
    }
    return str.replace(/(\w+)/gi, replaceChar)
}

function pigIt2(str){
    return str.replace(/(\w)(\w+)/g, "\$2\$1ay")
}

console.log(pigIt('Pig latin is, cool!'));
console.log(pigIt2('Pig latin is, cool!'));