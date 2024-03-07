function solution(s) {
    var answer = [];
    var arr = s.split(' ');
    
    for(var i=0; i<arr.length; i++){
        var word = arr[i]
        var processWord = ''
        
        for(var j=0; j<word.length; j++){
             if(j%2 ==0){
                 processWord += word[j].toUpperCase();
        }
            else {
                processWord += word[j].toLowerCase();
        }
            }
        answer.push(processWord);
    }
    return answer.join(' ');
}