function solution(my_string) {
    var answer = [];
    var newArr = my_string.split(' ');
    for(var i=0; i<newArr.length; i++){
        if(newArr[i] != ''){
            answer.push(newArr[i]);
        }
    }
    return answer;
}