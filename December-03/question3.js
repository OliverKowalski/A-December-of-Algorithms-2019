// remove half the list, keep going until list is sorted or one item remain

let testNum = [1,2,3,4,3,1,8,2,7,3,9,1,10,15,2,7,3,9];


function ifSorted(arr){
    for(let i = 0 ; i < arr.length-1; i ++)
        if (!(arr[i] < arr[i+1] || arr[i] == arr[i+1]))
            return false;
    return true;
}

function removeHalf(arr){
    let arrLen = arr.length;
    let tempArr = [];
    for ( let i =0, j =0 ; j < arr.length; i ++, j +=2 )
        tempArr[i] = arr[j];
    console.log(tempArr);
    return tempArr;
}

do {
    if (ifSorted(testNum)){
        console.log(testNum);
        return;
    } else {
        testNum = removeHalf(testNum);
    }
} while (!ifSorted(testNum) );