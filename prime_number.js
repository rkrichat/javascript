let isPrime = (num) =>{
    let size = num/2;
    for(let index=2;index<=size;index++){
        if(num % index==0){
            return false;
        }
    }
    return true;
}

for(let index=2;index<10;index++){
    if(isPrime(index)){
        process.stdout.write(index+" ");
    }
}
