function solution(numbers, direction) {
    if(numbers.length <= 1){
        return numbers;
    }
    
    if(direction == "left"){
        const first = numbers.shift();
        numbers.push(first);
    }
    else if(direction == "right"){
        const last = numbers.pop();
        numbers.unshift(last);
    }
    return numbers;
}