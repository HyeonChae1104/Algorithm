function solution(my_strings, parts) {
    var answer = '';
    for(var i=0; i<my_strings.length; i++){
        var index = parts[i];
        var part = my_strings[i].substring(index[0], index[1]+1);
        answer += part;
    }
    return answer;
}