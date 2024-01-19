function solution(num_list) {
    var length = num_list.length;
    var answer = [];
    
    if(num_list[length-1]> num_list[length-2]){
       answer.push(num_list[length-1]-num_list[length-2]);
    }
    else if(num_list[length-1]<= num_list[length-2]){
        answer.push(num_list[length-1]*2);
    }
    num_list.push(answer[0]);
    
    return num_list
}