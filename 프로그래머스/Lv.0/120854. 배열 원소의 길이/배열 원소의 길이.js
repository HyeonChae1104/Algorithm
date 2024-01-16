function solution(strlist) {
    var lengthArray = [];
   
    for(var i=0; i<strlist.length; i++){
        var strLength = strlist[i].length
        lengthArray.push(strLength);
    }
    return lengthArray;
}