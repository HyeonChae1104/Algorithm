function solution(num_list) {
    var answer = 0;
    var even = [];
    var odd = [];
    
    for(var i=0; i<num_list.length; i++){
        if(num_list[i]%2 == 0){
            even.push(num_list[i])
        }
        else if(num_list[i]%2 != 0){
            odd.push(num_list[i])
        }
    }
    answer = parseInt(even.join('')) + parseInt(odd.join(''));
    return answer;
}