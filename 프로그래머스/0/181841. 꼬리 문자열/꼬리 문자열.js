function solution(str_list, ex) {
    const filterList = str_list.filter((str) => !str.includes(ex));
    const answer = filterList.join('');
    
    return answer;
}