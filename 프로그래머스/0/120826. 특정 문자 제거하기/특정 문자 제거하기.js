function solution(my_string, letter) {
    var answer = '';
    answer = my_string.split('').filter(char => char !== letter).join('');
    return answer;
}