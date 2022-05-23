// function validParentheses1(parens) {
//     if (!parens) return true;
//     let sk1 = parens.match(/\)/gi);
//     let sk2 = parens.match(/\(/gi);
//     return sk1 && sk2 ? sk1.length === sk2.length: false;
// }
function validParentheses(parens) {
    if (!parens) return true;
    while (parens.includes("()")) {
        parens = parens.slice(0, parens.indexOf("()")).concat(parens.slice(parens.indexOf("()") + 2));
    };
    return !parens;
}

console.log(validParentheses("())(()"));
console.log(validParentheses("(()()()())(())"));
// console.log(validParentheses(""));
// console.log(validParentheses("()"));
// console.log(validParentheses("())"));