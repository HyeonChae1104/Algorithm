function solution(array) {
    var answer = 0;
    array.sort((a, b) => a-b);
    
    var length = array.length;
    
    answer = array[Math.floor(length / 2)];
    return answer;
}