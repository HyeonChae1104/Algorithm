function solution(s) {
    let removeZeroCount = 0;
    let transformCount = 0;
    
    while(s !== "1"){
        const length = s.length; // 처음 문자열 길이
        s = s.replace(/0/g, ""); //0 제거
        const afterLength = s.length; // 0 제거된 문자열 길이
        removeZeroCount += length - afterLength;
        s = afterLength.toString(2) // 0 제거된 문자열에 이진수 처리
        transformCount++;
    }
   
    return [transformCount, removeZeroCount];
}