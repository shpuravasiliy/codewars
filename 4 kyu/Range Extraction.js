function solution(list) {
    let temp = [];
    debugger
    let result = list.reduce((acc, current, index, arr) => {
            if (index === 1) {
                if (current === acc + 1) {
                    temp.push(acc, current);
                    return [];
                } else {
                    temp.push(current)
                    return [acc];
                }
            }
            if (index === arr.length - 1) {
                if (current === arr[index - 1] + 1) {
                    temp.push(current);
                    acc = temp.length > 2 ? [...acc, temp[0] + '-' + temp[temp.length - 1]] : [...acc, ...temp];
                    return acc;
                } else {
                    acc = temp.length > 2 ? [...acc, temp[0] + '-' + temp[temp.length - 1]] : [...acc, ...temp];
                    acc = [...acc, current];
                    return acc;
                }
            }
            if (current === arr[index - 1] + 1) {
                temp.push(current);
                return acc;
            } else {
                acc = temp.length > 2 ? [...acc, temp[0] + '-' + temp[temp.length - 1]] : [...acc, ...temp];
                temp = [current];
                return acc;
            }
        }
    )
    return result.join(',');
}


console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));
console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7]));
console.log(solution([-69,-68,-66,-64,-61,-58,-56,-53,-51,-48,-45,-43,-42,-39,-36,-35,-33,-32,-29,-26,-25,-24,-21]));
console.log(solution([-68,-67,-65,-62,-60,-59,-56,-55,-54,-53,-50]));

// "-6,-3-1,3-5,7-11,14,15,17-20"
