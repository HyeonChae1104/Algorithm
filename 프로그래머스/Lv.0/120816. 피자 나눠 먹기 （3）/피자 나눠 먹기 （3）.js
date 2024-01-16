function solution(slice, n) {
    var answer = 0;
    if(slice>=2 && slice<=10){
    
        if(n%slice == 0){
            answer = (n/slice)
        }
        else if(n/slice != 0){
            answer = Math.floor(n/slice)+1
        }
    }    
    return answer;
}