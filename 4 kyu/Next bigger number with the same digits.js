function nextBigger2(n) {
    // console.log('start num: ' + n);
    const strNum = n.toString().split('');
    let numArr = [];
    if (strNum.length === 1 || strNum.every(n => n === strNum[0])) return -1;
    for (let i = strNum.length - 1; i > 0; i--) {
        let newStr = strNum.slice();
        for (let j = strNum.length - 1; j > 0; j--) {
            const tempDigit = newStr[i];
            newStr[i] = newStr[j - 1];
            newStr[j - 1] = tempDigit;
            numArr.push(parseInt(newStr.join('')));
        }
        console.log(newStr.sort());
    }
    // console.log(numArr.sort());
    return numArr.find(num => num > n) ? numArr.find(num => num > n) : -1;
}

function nextBigger3(n) {
    const strNum = n.toString().split('');
    let numArr = [];
    let numArr1 = [];
    let numArr2 = [];
    if (strNum.length === 1 || strNum.every(n => n === strNum[0])) return -1;
    // debugger
    let tempStr = strNum.slice();
    // debugger
    for (let i = 0; i < strNum.length; i++) {
        let tempDigit = tempStr.splice(-1, 1);
        for (let j = strNum.length; j > 1; j--) {
            // let newStr = tempStr.slice();
            tempStr.splice(j - 2, 0, ...tempDigit);
            numArr.push(parseInt(tempStr.join('')));
            if (j !== 2) tempStr.splice(j - 2, 1);
        }
    }
    for (let i = 1; i < strNum.length + 1; i++) {
        let tempStr2 = strNum.slice();
        let tempDigit = tempStr2.splice(-i, 1);
        for (let j = strNum.length; j > 1; j--) {
            // let newStr = tempStr.slice();
            tempStr2.splice(j - 2, 0, ...tempDigit);
            numArr1.push(parseInt(tempStr2.join('')));
            tempStr2.splice(j - 2, 1);
        }
    }
    for (let i = 1; i < strNum.length; i++) {
        for (let j = strNum.length; j > 0; j--) {
            let newStr = strNum.slice();
            const tempDigit = newStr.splice(-i, i);
            newStr.splice(j - 1 - i, 0, ...tempDigit);
            numArr2.push(parseInt(newStr.join('')));
        }
    }

    // console.log(n);
    console.log(numArr);
    console.log(numArr1);
    console.log(numArr2);
    // console.log(numArr.sort());

    // const result = numArr.sort().find(num => num > n);
    // return result ? result : -1;
    // return numArr.sort()
}

function nextBigger_my(n) {
    const findMinNum = (arr, minNum, maxNum) => {
        let result = {};
        arr.find((n, i) => {
            if (n > minNum && n <= maxNum) {
                result.num = n;
                result.id = i;
            }
        })
        return result;
    }
    let index = 0;
    let Arr1 = n.toString().split('').slice();
    if (Arr1.length === 1 || Arr1.every(n => n === Arr1[0])) return -1;
    for (let i = Arr1.length - 1, flag = true; i > 0 && flag; i--) {
        if (Arr1[i] > Arr1[i - 1]) {
            const minDigit = findMinNum(Arr1, Arr1[i - 1], Arr1[i]);
            const temp = Arr1[i - 1];
            Arr1[i - 1] = minDigit.num;
            Arr1[minDigit.id] = temp;
            index = i;
            flag = false;
        }
    }
    let Arr2 = [...Arr1];
    const Arr3 = Arr1.slice(index).sort()
    Arr2.splice(index, Arr3.length, ...Arr3)
    const result = parseInt(Arr2.join(''));
    return result > n ? result : -1;
}

function nextBigger(n) {
    function splitDigits(d) {
        return String(d).split('')
    }

    function sortDigits(d) {
        return Number(splitDigits(d).sort().join(''))
    }

    function reverseSortDigits(d) {
        return Number(splitDigits(d).sort().reverse().join(''))
    }

    if (n === reverseSortDigits(n)) return -1

    let nSorted = sortDigits(n)

    while (true) {
        n += 1
        if (sortDigits(n) === nSorted) return n
    }
} // very clever

// console.log(nextBigger(1233));
// console.log(nextBigger(297120));
// console.log(nextBigger(42));
// console.log(nextBigger(890));
console.log(nextBigger(64880));
// console.log(nextBigger(872520));
// console.log(nextBigger(4));
// console.log(nextBigger(222));
// console.log(nextBigger(77862));
// console.log(nextBigger(2874));
// console.log(nextBigger(96376));
// console.log(nextBigger(5987554));
