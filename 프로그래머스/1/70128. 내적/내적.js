function solution(a, b) {
    var answer = 0;
    var n = a.length;
    for(var i=0; i<n; i++){
        for(var j=0; j<n; j++){
            if(i == j){
            answer += a[i]*b[j];
            }
        }
    } 
    return answer;
}