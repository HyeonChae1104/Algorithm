function solution(n) {
    var answer = 0;
    var digit = n.toString().split('');
    digit.sort((a,b) => b-a);
    answer = parseInt(digit.join(''));
    return answer;
}