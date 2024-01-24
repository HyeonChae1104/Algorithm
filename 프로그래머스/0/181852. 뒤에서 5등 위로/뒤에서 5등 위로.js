function solution(num_list) {
    var answer = [];
    var n = num_list.length;
    var new_list = num_list.sort((a, b) => a-b);
    answer = new_list.slice(5, n)
    return answer;
}