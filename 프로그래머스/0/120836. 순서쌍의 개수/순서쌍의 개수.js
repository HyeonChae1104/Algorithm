function solution(n) {
    var ncount = 0;
   
    for(var a=1; a <= n; a++){
        if(n % a == 0){
        var b = n / a;
                ncount++
    }
        
    }
    return ncount;
}