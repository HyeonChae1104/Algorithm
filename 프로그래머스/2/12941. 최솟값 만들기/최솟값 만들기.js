function solution(A, B){
     A.sort((a, b)=> b - a); 421
     B.sort((a, b)=> a - b); 445
     var acc = 0;
    
    for(var i=0; i<A.length; i++){ 4
        acc += A[i] * B[i];
    }
    return acc;
}