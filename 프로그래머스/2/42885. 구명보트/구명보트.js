function solution(people, limit) {
    var answer = 0;
    var newArr = people.sort((a, b) => a - b); // 50 50 70 80
    var i = 0;
    var j = newArr.length - 1;
    
    while(i <= j){
        if(newArr[i] + newArr[j] > limit){
            answer++;
            j--;
        }
        else if(newArr[i] + newArr[j] <= limit){
            answer++;
            i++;
            j--;
        }    
    }
    
    return answer;//구명보트 개수의 최솟값
}