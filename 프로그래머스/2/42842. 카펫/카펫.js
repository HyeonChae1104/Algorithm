function solution(brown, yellow) {
    var answer = [];
    
    for(var i=3; i<=(brown + yellow)/i; i++){
        var j = Math.floor((brown + yellow)/i);
        
        if((j-2)*(i-2) == yellow){
        break;
        } 
    }
    return [j, i];
}
//세로 i, 가로 j