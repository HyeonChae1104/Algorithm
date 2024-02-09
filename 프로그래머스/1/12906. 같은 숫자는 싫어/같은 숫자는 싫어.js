function solution(arr){
    var answer = [];
    for(var i=0; i<arr.length; i++){
        if(arr[i] != arr[i+1]){ 
            answer.push(arr[i]);
        }
    }
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')
    
    return answer;
}
/*연속조건 없이 배열에서 하나만 남기고 중복 수 제거
    if(!answer.includes(arr[i])){
            answer.push(arr[i]); } */