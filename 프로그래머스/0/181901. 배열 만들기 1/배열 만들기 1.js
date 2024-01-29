function solution(n, k) {
    var answer = [];
    var newArr = [];
    for(var i = k; i <= n; i += k){
        if(i != 0 && i % k == 0){
            newArr.push(i);
        }
        answer = newArr.sort((a, b)=> a - b);
    }   
    return answer;
}