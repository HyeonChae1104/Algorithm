function solution(arr) {
    var sum = 0;
    for(var i=0; i<arr.length; i++){
        sum += arr[i]
    }
    var answer = 0;
    answer = sum/arr.length;
    return answer;
}