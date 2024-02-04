function identifyPrime(num) {
    let PrimeNumber=true;
    
    if(num>1){
        for(let i=2;i<num;i++){
        if(num%i !=0){
            PrimeNumber=false;
            break;
        }
    }
    if(PrimeNumber){
        console.log(`Yes,${num} is a Prime Number`)
    }
    else{
        console.log(`No, ${num} is not a prime number`)
    }
    }
    else{
        console.log(" 1 & Negative numbers cannot be prime")
    }
}

identifyPrime(13)