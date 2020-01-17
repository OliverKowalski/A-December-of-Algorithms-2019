// Credit card if valid
console.log(validCreditCard(61789372994));
function validCreditCard(n){
    let temp = [];
    let testArray =[];
    let counter = 0;
    let sum1 =0;
    let sum2 = 0;
    // reverse values
    for (let i = 0 ; i < 11; i ++){
        temp[i] = n % 10;
        n = Math.floor(n/ 10);
    }
    // reverse the array 
    for (let i = 0 ; i < temp.length ; i ++){
        testArray[i] = temp[11-(i+1)];
    }
    // summ up the evens
    for (let i = 0 ; i < temp.length; i +=2){
        sum1 += testArray[i];
    }
    // sum up the odds
    for(let i = 1; i < temp.length; i += 2){
        if (testArray[i] *2 > 9)
            sum2 += (testArray[i] *2) -9;
        else
            sum2 += testArray[i] *2;
    }
    if ((sum1 + sum2) % 10 == 0)
        return true;
    else
        return false;
   

}