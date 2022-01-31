function oddNumbers() {
    var arr = [];
    for (var i=1;i<=50;i++){
        if(i%2===1) {
            arr.push(i);
        }
    }
    return arr;
}