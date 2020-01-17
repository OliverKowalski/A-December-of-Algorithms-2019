function hIndex(x, arry){
    let count = 0;
    for (let i = 0; i < arry.length; i ++){
        if (arry[i] > 0 && arry[i] < x)
            count++;
    }
    return count;
}
hIndex(6, [4, 5, 2, 0, 6, 4])