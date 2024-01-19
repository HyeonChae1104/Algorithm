function solution(array, n) {
    var answer = 0;
    var ncount = 0;
    
    for(var i=0; i<array.length; i++){
        if(array[i] == n){
            ncount++
        }
        answer = ncount
    }
    
    return answer;
}