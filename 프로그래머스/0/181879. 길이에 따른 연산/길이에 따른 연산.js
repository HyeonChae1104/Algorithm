function solution(num_list) {
    var answer = 0;
    var length = num_list.length;
    if(length >= 11){
        for(var i=0; i<length; i++){
            answer += num_list[i];
        }
    }
    
    else if(length <=10){
        var answer = 1;
        for(var i=0; i<length; i++){
        answer *= num_list[i];
        }
    }
    return answer;
}