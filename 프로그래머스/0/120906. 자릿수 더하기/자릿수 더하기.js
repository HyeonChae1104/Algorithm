function solution(n) {
    var answer = 0;
    var string= n.toString();  
    var digit = string.split('');
    
    for(var i=0; i<digit.length; i++){
        answer += parseInt(digit[i]);
    }
    return answer;
}