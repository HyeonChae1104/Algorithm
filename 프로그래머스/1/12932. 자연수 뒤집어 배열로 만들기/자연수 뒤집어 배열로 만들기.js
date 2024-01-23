function solution(n) {
    var newArray = [];
    var digit = n.toString();
    newArray = digit.split('').reverse().map(Number);
    return newArray;
}