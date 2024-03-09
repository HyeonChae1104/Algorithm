function solution(t, p) {
    var count = 0;
    
    for(var i=0; i <= t.length - p.length; i++){
        const sub = t.substr(i, p.length);
        if(parseInt(sub) <= parseInt(p)){
            count++
        }
    }
    return count;
}