function solution(num_list) {
    var answer = 0;
    var sum1 = 0;
    var sum2 = 0;
    for(var i=0; i<num_list.length; i++){
        if((i+1) % 2 !=0){
             sum1 += num_list[i];
        }
        else{
            sum2 += num_list[i];
        }
    }
    answer = sum1 > sum2 ? sum1 : sum2;
    return answer;
}