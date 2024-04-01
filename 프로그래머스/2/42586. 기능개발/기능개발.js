function solution(progresses, speeds) {
    var answer = [];
    var arr = [];
    
    for(var i=0; i<progresses.length; i++){
        arr.push(Math.ceil((100 - progresses[i]) / speeds[i])) // 7 3 9
    }
    
    var maxdays = arr[0];
    var count = 1;
    for(var i=1; i<arr.length; i++){
       if(maxdays >= arr[i]){
           count++;
       }
        else{
            answer.push(count);
            count = 1;
            maxdays = arr[i];
        }
     
    }
    answer.push(count);
    return answer;
}