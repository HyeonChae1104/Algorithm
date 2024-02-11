function solution(arr) {
    var answer = [];
    for(var i=0; i<arr.length; i++){
        answer = answer.concat(Array(arr[i]).fill(arr[i]));
        
    }
    return answer;
}