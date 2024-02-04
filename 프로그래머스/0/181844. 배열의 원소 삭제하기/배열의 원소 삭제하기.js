function solution(arr, delete_list) {
    var answer = [];
    answer = arr.filter((value) => !delete_list.includes(value) );
    return answer;
}