function solution(s) {
    var answer = true;
    
    for(var i=0; i<s.length; i++){
    if((s.length == 4 || s.length == 6) && !isNaN(s[i])){
        answer = true;
    }
    else{
        answer = false;
        break;
    }
        }
    return answer;
}