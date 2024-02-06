function solution(a, b) {
    var answer = 0;
    if(parseInt(a.toString() + b.toString()) > parseInt(b.toString() + a.toString())){
        answer = parseInt(a.toString() + b.toString());
    }
    else{
        answer = parseInt(b.toString() + a.toString());
    }
    return answer;
}