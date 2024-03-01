function solution(n_str) {
    var answer = [];
    var newArr = n_str.split('');
    answer = newArr.slice(newArr.findIndex(num => num !== '0'))
    return answer.join('');
}