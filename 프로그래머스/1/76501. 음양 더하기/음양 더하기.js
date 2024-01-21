function solution(absolutes, signs) {
    var answer = 0;
    var answer1 = 0;
    var answer2 = 0;
    
    for(var i=0; i<absolutes.length; i++){
        if(signs[i]==true){
            answer1 += absolutes[i];
        }
        else if(signs[i]==false){
            answer2 += -absolutes[i];
        }
        answer = answer1 + answer2;
    }
    
    return answer;
}