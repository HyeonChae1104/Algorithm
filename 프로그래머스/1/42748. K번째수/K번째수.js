function solution(array, commands) {
    var answer = [];
    var sortArray = []; 
    
    for(var command of commands){
    var i = command[0];
    var j = command[1];
    var k = command[2];
    
    sortArray = array.slice(i - 1, j);
    sortArray.sort((a, b)=> a - b);
    
    answer.push(sortArray[k - 1]);
    }
    return answer;
}