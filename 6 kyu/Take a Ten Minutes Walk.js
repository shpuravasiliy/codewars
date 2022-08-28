function isValidWalk(walk) {
    let dy = 0, dx = 0;
    if (walk.length !== 10) return false;
    for (let i = 0; i < walk.length; i++) {
           switch (walk[i]) {
                case "n":
                    dy++;
                    break
                case "s":
                    dy--;
                    break
                case "e":
                    dx++;
                    break
                case "w":
                    dx--
                    break
            }
        }
    return dy === 0 && dx === 0
}

console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));