function solution(my_string) {
    var answer = '';
    for(var i=my_string.length -1; i>=0; i--){
        for(var j=my_string[i].length-1; j>=0; j--){
            answer += my_string[i][j]
        }
    }
    return answer;
}