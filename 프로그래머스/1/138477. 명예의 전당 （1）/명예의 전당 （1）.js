function solution(k, score) {
    var answer = [];
    var stack = [];
    
    for(var i=0; i<score.length; i++){
        if(stack.length < k){
            stack.push(score[i]);
        }
        else if(stack.length >= k){
            if(stack[stack.length-1] < score[i]){
                stack.pop();
                stack.push(score[i]);
            }
        }
        stack.sort((a, b)=> b - a);
        answer.push(stack[stack.length-1]);
    }
    return answer;
}