function solution(my_string) {
    var answer = '';
    const str = 'aeiou';
    answer = my_string.split('').filter((el)=>(!str.includes(el))).join(''); 
    return answer;
}