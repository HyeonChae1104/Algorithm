function solution(arr, k) {
    var answer = [];
    if(k % 2 != 0){
        for(var i=0; i<arr.length; i++){
            answer.push(k*arr[i]);
        }
    }
    else if(k % 2 == 0){
        for(var i=0; i<arr.length; i++){
            answer.push(k+arr[i]);
        }
    }
    return answer;
}