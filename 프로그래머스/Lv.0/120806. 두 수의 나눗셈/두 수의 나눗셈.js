function solution(num1, num2) {
    if(num1>0 && num1<=100 && num2>0 && num2<= 100){
    var answer = 0;
    answer = Math.floor((num1/num2)*1000)
    return answer;
    }
}