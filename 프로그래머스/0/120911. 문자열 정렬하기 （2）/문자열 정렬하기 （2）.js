function solution(my_string) {
    var answer = '';
    var lowerCase = my_string.toLowerCase();
    var arr = lowerCase.toString().split('');
    answer = arr.sort().join('');
    return answer;
}