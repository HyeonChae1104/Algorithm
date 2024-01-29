function solution(rsp) {
    var answer = [];
    var rsp2 = rsp.split('');
    for(var i=0; i<rsp2.length; i++){
        if(rsp2[i] == '2'){
            answer.push('0');
        }
        else if(rsp2[i] == '0'){
            answer.push('5');
        }
        else if(rsp2[i] == '5'){
            answer.push('2');
        }
    }
    return answer.join('');
}