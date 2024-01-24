function solution(arr) {
    var answer = [];
    var min = Math.min(...arr);
    
    answer = arr.filter((value) => value != min);
    
    if(answer.length == 0){
        answer.push(-1);
    }
    return answer;
}