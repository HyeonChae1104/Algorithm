function solution(price, money, count) {
    var answer = 0;
    var totalPrice = 0;
    
    for(var i=1; i<=count; i++){
        totalPrice += i*price
    }
    
    if(totalPrice > money){
    answer = totalPrice - money;
    }
    else if(totalPrice = money){
        answer = 0;
    }
    return answer;
}

//price N배 