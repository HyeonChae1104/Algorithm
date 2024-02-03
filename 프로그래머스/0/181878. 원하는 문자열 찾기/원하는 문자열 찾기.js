function solution(myString, pat) {
    var answer = 0;
    var newMyString = myString.toLowerCase();
    var newPat = pat.toLowerCase();
    
    if(newMyString.includes(newPat)){
        answer = 1;
    }
    else{
        answer = 0;
    }
    return answer;
}