function solution(myString) {
    var newArr = myString.split('');
    
    for(var i=0; i<newArr.length; i++){
        if(newArr[i] < 'l'){
            newArr[i] = 'l'
        }
    }
    return newArr.join('');
}