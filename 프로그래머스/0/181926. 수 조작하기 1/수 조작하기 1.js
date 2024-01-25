function solution(n, control) {
    var newControl = control.split('');
    for(var i=0; i<newControl.length; i++){
        if(newControl[i] == 'w'){
            n += 1;
        }
        else if(newControl[i] == 's'){
            n += -1;
        }
        else if(newControl[i] == 'd'){
            n += 10;
        }
        else if(newControl[i] == 'a'){
            n += -10;
        }
    }
    return n;
}