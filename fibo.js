let fibo = (size) =>{
    let results = [];
    for(let index=0;index<size;index++){
        if(index > 2){
            let temp = results[index-1]
            let temp2 = results[index-2] 
            results.push(temp+temp2);
        }else{
            results.push(index);
        }
    }
    return results;
}

console.log(fibo(5).length == 0 ? "please enter more than zero": fibo(10));
