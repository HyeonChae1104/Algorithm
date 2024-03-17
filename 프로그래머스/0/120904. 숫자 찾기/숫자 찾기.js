function solution(num, k) {
    var answer = 0;
    var arr = num.toString().split(''); //[2,9,1,8,3]
    
    for(var i=0; i<arr.length; i++){
        if(arr[i] == k){
            answer = i+1;
            break;
        }
        else{ 
            answer = -1;
        }
    }
    return answer;
}