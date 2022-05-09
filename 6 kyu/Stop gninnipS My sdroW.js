function spinWords(string){
    var arrWords = string.split(' ')
    for (const arrWordsKey in arrWords) {
        if (arrWords[arrWordsKey].length >= 5) arrWords[arrWordsKey] = arrWords[arrWordsKey].split('').reverse().join('')
    }
    return arrWords.join(' ')
}

console.log(spinWords('Just kidding there is still one more'))