function solution(num1, num2) {
    if(num1>=0 && num1<=10000 && num2>=0 && num2<=10000)
    var answer = 0;
    if(num1 != num2){
        answer = -1;
    return answer;
    }
        
    else if(num1 == num2){
        answer = 1;
        return answer;
    }
}