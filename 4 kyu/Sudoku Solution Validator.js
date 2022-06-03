//My solution
function validSolution(board) {
    const template = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    if (board.reduce((acc, val) => [ ...acc, ...val ]).includes(0)) return false;
    const checkRow = (arr) => {
        let tempCheck = arr.map(t => [...t]);
        tempCheck = tempCheck.filter(t => (t.sort().every((t, i) => t === template[i])));
        return tempCheck.length === arr.length;
    }
    const checkColumns = (arr) => {
        let tempCheck = arr.map(t => [...t]);
        for (let i = 0; i < tempCheck.length; i++) {
            for (let j = 0; j < tempCheck.length; j++) {
                tempCheck[i][j] = arr[j][i];
            }
        }   //mirror rows and columns
        tempCheck = tempCheck.filter(t => (t.sort().every((t, i) => t === template[i])));
        return tempCheck.length === arr.length;
    }
    const divideOnSquares = (arr) => {
        let tempCheck = arr.map(t => [...t]);
        let flag = false;
        for (let y = 0; y < 9; y += 3) {
            for (let x = 0; x < 9; x += 3) {
                let temp = [];
                for (let i = x; i < x + 3; i++) {
                    for (let j = y; j < y + 3; j++) {
                        temp.push(tempCheck[i][j])
                    }
                }
                temp = temp.sort().filter((t, i) => t === template[i]);
                if (temp.length !== tempCheck.length) {
                    flag = false;
                    return flag;
                } else flag = true;
            }
        }
        return flag
    }
    return checkRow(board) && checkColumns(board) && divideOnSquares(board);
}
//Best solution on codewars
function equals45(n){
    return n == 45;
}

function validSolution2(board){
    var sumh = [0,0,0,0,0,0,0,0,0];
    var sumv = [0,0,0,0,0,0,0,0,0];
    osums = [[0,0,0],[0,0,0],[0,0,0]];
    for (var i=0;i<9;i++){
        for (var j=0;j<9;j++){
            sumh[i] += board[i][j];
            sumv[j] += board[i][j];
            osums[Math.floor(i/3)][Math.floor(j/3)] += board[i][j];
        }
    }
    for (var i=0;i<3;i++) if (!osums[i].every(equals45)) return false;
    return (sumh.every(equals45) && sumv.every(equals45));
}

console.log(validSolution([[5, 3, 4, 6, 7, 8, 9, 1, 2],
                                 [6, 7, 2, 1, 9, 5, 3, 4, 8],
                                 [1, 9, 8, 3, 4, 2, 5, 6, 7],
                                 [8, 5, 9, 7, 6, 1, 4, 2, 3],
                                 [4, 2, 6, 8, 5, 3, 7, 9, 1],
                                 [7, 1, 3, 9, 2, 4, 8, 5, 6],
                                 [9, 6, 1, 5, 3, 7, 2, 8, 4],
                                 [2, 8, 7, 4, 1, 9, 6, 3, 5],
                                 [3, 4, 5, 2, 8, 6, 1, 7, 9]]));
console.log(validSolution([[5, 3, 4, 6, 7, 8, 9, 1, 2],
                                 [6, 7, 2, 1, 9, 0, 3, 4, 8],
                                 [1, 0, 0, 3, 4, 2, 5, 6, 0],
                                 [8, 5, 9, 7, 6, 1, 0, 2, 0],
                                 [4, 2, 6, 8, 5, 3, 7, 9, 1],
                                 [7, 1, 3, 9, 2, 4, 8, 5, 6],
                                 [9, 0, 1, 5, 3, 7, 2, 1, 4],
                                 [2, 8, 7, 4, 1, 9, 6, 3, 5],
                                 [3, 0, 0, 4, 8, 1, 1, 7, 9]]));
