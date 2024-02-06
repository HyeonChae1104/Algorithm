function solution(numbers) {
    var answer = [];
    var sum = 0;
    for(var i=0; i<numbers.length; i++){
        for(var j = i+1; j<numbers.length; j++){
            sum = numbers[i] + numbers[j]; 
            if(!answer.includes(sum)){
                answer.push(sum);
            }
          }
        }
    answer.sort((a, b) => a - b);
    return answer;
}