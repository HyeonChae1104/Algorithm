function solution(n) {
    var answer = 0;
    if(n<0 || Math.sqrt(n)%1 != 0){
        answer = 2;
    }
    else { Math.sqrt(n)%1 == 0
        answer = 1;
    }
    return answer;
}