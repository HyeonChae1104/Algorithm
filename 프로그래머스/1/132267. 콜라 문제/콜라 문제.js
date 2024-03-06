function solution(a, b, n) {
    var sum = 0;
    while(n>=a){
        sum += parseInt(n/a) * b;
        n = parseInt(n/a) * b + n%a;
    }
    return sum;
}
