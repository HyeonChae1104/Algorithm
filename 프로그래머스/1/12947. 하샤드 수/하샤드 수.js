function solution(x) {
    var answer = true;
    var sum = 0;
    var digit = x.toString();
    var newArray = digit.split('');
    for(var i=0; i<newArray.length; i++){
        sum += parseInt(digit[i]);
        if(x%sum==0){
            answer = true
        }
        else{
            answer = false
        }
    }
    return answer;
}