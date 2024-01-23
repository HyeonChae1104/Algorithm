function solution(s) {
    var answer = '';
    var numbers = s.split(' ').map(Number);
    answer = Math.min(...numbers) + ' ' + Math.max(...numbers);
    return answer;
}