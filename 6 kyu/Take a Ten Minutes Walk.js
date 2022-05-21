function isValidWalk(walk) {
    let n = 0;
    let e = 0;
    if (walk.length !== 10) return false;
    for (let i = 0; i < walk.length; i++) {
           switch (walk[i]) {
                case "n":
                    n++;
                    break
                case "s":
                    n--;
                    break
                case "e":
                    e++;
                    break
                case "w":
                    e--
                    break
            }
        }
    return n === 0 && e === 0
}

console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));