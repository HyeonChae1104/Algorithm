function solution(n) {
    var answer = 0;
    var x = Math.sqrt(n);
    
    if(Math.sqrt(n) % 1 ==0){
        answer = (x+1)**2
        }
    
    else if(Math.sqrt(n)/1 != 0){
        answer = -1
    }
    return answer;
}