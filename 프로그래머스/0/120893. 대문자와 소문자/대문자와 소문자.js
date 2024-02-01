function solution(my_string) {
    var answer = [];
    for(var i=0; i<my_string.length; i++){
    if('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.includes(my_string[i])){
        answer.push(my_string[i].toLowerCase());
    }
    else{
        answer.push(my_string[i].toUpperCase());
    }   
    }
    return answer.join('');
}