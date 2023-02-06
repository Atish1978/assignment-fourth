// Propblem 1:

// function mindGame(positiveNumber){

// let totalValue=(((positiveNumber*3)+10)/2)-5;

// return totalValue;
// }

// // console.log(mindGame(50));

// // Problem 2:

// function evenOdd(inputString){

//     if (inputString.length%2==0){
//         return 'Even';
//     }
//     else {
//         return 'Odd';
//     }

// }

// console.log(evenOdd('atishs'));

// Problem 3:

// function isLGSeven(compareSeven){

    
//     let difference=Math.abs(compareSeven-7);

//     if (difference<7){
//         return difference;
//     }
//     else {
//         return difference*2;
//        }
  
// }

// console.log(isLGSeven(14));

// Problem 4:

// function findingBadData(goodBadArr){

//     let badData=[];

//     for(let i=0; i<goodBadArr.length; i++){
//     if(goodBadArr[i]<0){
//         badData.push(goodBadArr[i])
// }
// }
// return badData.length;
// }

// let data=[1, 3, -4, 3, -56, 45, 80];
// console.log(findingBadData(data));

// Problem 5:

function gemsToDiamond(firstFrGems, secondFrGems, thirdFrGems){

    const firstFrGPower=firstFrGems*21;
    const secondFrGPower=secondFrGems*32;
    const thirdFrGPower=thirdFrGems*43;

    let totalDiamond=firstFrGPower+secondFrGPower+thirdFrGPower;

    if(totalDiamond>2000){

    let restTotalDiamond=totalDiamond-2000;

    return restTotalDiamond;
    }

    else{

        return totalDiamond;
    }




}

console.log(gemsToDiamond(100, 5, 1));