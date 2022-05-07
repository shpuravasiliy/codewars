function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    var yourTime = pontoonDistance / youSpeed;
    var sharkTime = 0;
    var answer;
    if (dolphin) {
        sharkTime = sharkDistance / (sharkSpeed / 2);
    } else {
        sharkTime = sharkDistance / sharkSpeed;
    }
    if (yourTime > sharkTime) {
        return answer = 'Shark Bait!';
    } else {
        return answer = 'Alive!';
    }
}

// describe("Example tests",() =>{
//     Test.assertEquals(shark(12, 50, 4, 8, true), "Alive!");
//     Test.assertEquals(shark(7, 55, 4, 16, true), "Alive!");
//     Test.assertEquals(shark(24, 0, 4, 8, true), "Shark Bait!");
// });

console.log(shark(12, 50, 4, 8, true));
console.log(shark(7, 55, 4, 16, true));
console.log(shark(24, 0, 4, 8, true));