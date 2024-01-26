function solution(num_list) {
    var answer = [];
    var newArr = num_list.sort((a,b)=> a-b);
    answer = newArr.slice(0, 5);
    return answer;
}