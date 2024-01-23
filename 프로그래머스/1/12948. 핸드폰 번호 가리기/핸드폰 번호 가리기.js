function solution(phone_number) {
    var answer = '';
    answer = '*'.repeat(Math.max(0, phone_number.length - 4) )+ phone_number.slice(-4);
    return answer;
}