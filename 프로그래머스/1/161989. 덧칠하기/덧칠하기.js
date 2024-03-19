function solution(n, m, section) {
    var answer = 0;
    var painted = 0;
    
    section.forEach((n)=> {
        if(n > painted){
            painted = n + m - 1;
            answer++;
        }
    })
    return answer;
}
