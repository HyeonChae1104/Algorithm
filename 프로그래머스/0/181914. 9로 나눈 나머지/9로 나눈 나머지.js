function solution(number) {
    var answer = 0;
    var sum = 0
    var arr = number.toString().split('');
    
    for(var i=0; i<arr.length; i++){
        sum += parseInt(arr[i]);
    }
    answer = sum % 9;
    return answer;
}