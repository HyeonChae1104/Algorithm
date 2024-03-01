function solution(my_string) {
    var answer = 0;
    var newString = my_string.split('')
    
    for(var i=0; i<my_string.length; i++){
        if(!isNaN(parseInt(my_string[i]))){
            answer += parseInt(my_string[i]);
        }
    }
    return answer;
}