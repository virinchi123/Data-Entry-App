const sort = (arr) => {
    console.log(arr)
    arr.sort(function (a, b) {
        console.log(a)
        console.log(b)
        if(a['name']>b['name']){
            return -1
        }
        else{
            return 1
        }
    });
    console.log(arr)
    return arr.reverse();
}

export default sort