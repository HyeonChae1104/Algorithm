function solution(my_string) {
    const newArr = my_string.split('').filter(char => !isNaN(char)).map(char => Number(char));
    newArr.sort((a, b) => a - b);
    
    return newArr;
}