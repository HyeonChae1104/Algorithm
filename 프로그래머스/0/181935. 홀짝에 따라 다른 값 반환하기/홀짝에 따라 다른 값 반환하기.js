function solution(n) {
    var answer = 0;
    if(n % 2 != 0){
        for(var i=0; i<=n; i++){
            if(i%2 !=0){
                answer += i
            }
        }
    }
    else if(n % 2 ==0){
        for(var j=0; j<=n; j++){
            if(j % 2 == 0){
                answer += j**2
            }
        }
    }
    return answer;
}