function solution(num_list) {
    var answer = 0;
    var ans1=1
    var ans2 = 0;
    
    for(var i=0; i<num_list.length; i++){
        ans1 *= parseInt(num_list[i]);
        ans2 += parseInt(num_list[i]);
    }
    
    if(ans1< ans2**2){
        answer = 1;
    }
    else{
        answer = 0;
    }
    return answer;
}