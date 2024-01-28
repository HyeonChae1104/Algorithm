function solution(n) {
    var answer = '';
    var str = '수박'.repeat(n);
    answer = str.slice(0, n);
    return answer;
}