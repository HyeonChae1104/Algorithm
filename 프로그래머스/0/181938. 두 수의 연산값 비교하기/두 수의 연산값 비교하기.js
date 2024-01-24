function solution(a, b) {
    var answer = 0;
    var stringA = a.toString();
    var stringB = b.toString();
    var sum =  stringA + stringB;
    if(sum> 2*a*b){
        answer = parseInt(sum)
    }
    else{
        answer = 2*a*b
    }
    return answer;
}