function solution(my_string, index_list) {
    var answer = [];
    
        for(var j=0; j<index_list.length; j++){
            answer.push(my_string[(index_list[j])]);
        }
    return answer.join('');
}