function solution(myString) {
    var answer = [];
    var newArr = myString.split('x');
    
    answer = newArr.map(a  => a.length);
    return answer;
}