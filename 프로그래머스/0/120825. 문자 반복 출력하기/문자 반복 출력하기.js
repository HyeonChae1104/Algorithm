function solution(my_string, n) {
    var answer = '';
    var stringSplit = my_string.split('')
    
    for(var i=0; i< stringSplit.length; i++){
        answer += stringSplit[i].repeat(n)
    }
    return answer;
}