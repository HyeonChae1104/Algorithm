function solution(s) {
    var answer = [];
    for(var i = 0; i < s.length; i++){
        if(i == 0 || s[i - 1] == ' '){
            answer.push(s[i].toUpperCase());
        }
        else{
            answer.push(s[i].toLowerCase());
        }
    }
    return answer.join('');
}