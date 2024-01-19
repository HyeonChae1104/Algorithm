function solution(num_list) {
    var oddcount= 0;
    var evencount = 0;
    
    for(var i=0; i<num_list.length; i++){
        if(num_list[i]%2 == 0){
            evencount++;
        }
        else if(num_list[i]%2 != 0){
            oddcount++;
        }
    }
    var answer = [];
    answer = [evencount, oddcount]
    return answer;
}