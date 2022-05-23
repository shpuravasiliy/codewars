function anagrams(word, words) {
    return words.filter((currentValue) => {
        return word.length === currentValue.length && currentValue.split('').sort().every((v, i) => v === word.split('').sort()[i]);
    });
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));
console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));