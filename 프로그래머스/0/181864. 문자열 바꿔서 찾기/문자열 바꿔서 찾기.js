function solution(myString, pat) {
    var answer = 0;
    var newString = [];
    
    for(var i=0; i<myString.length; i++){
        if(myString[i] == 'A'){
            newString +=  'B';
        }
        else if(myString[i] == 'B'){
            newString += 'A';
        }
    
    if(newString.includes(pat)){
        answer = 1;
    }
    else{
        answer = 0;
    }
            
    }
    return answer;
}