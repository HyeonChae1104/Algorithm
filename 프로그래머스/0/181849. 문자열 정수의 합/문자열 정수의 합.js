function solution(num_str) {
    var answer = 0;
    var newArr = num_str.split('')
    for(var i=0; i<newArr.length; i++){
        answer += Number(newArr[i]);
    }
    return answer;
}