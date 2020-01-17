// Sevenish numbers
// 1, 7, 8, 49, 50
sevenish_number(10);
function sevenish_number(n){
    let lastPower = 0;
    let addIndex = 0;
    let mem = [];
    mem[0] = 1;

    for(let i = 1; i < n ; i++){
        if (addIndex == lastPower){
            addIndex = 0;
            mem[i] = mem[lastPower] * 7;
            lastPower =i
        }
        else{
            mem[i] = mem[lastPower] + mem[addIndex];
            addIndex+=1;
        }
    }
    console.log(mem);
}