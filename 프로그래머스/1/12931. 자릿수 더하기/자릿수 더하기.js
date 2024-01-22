function solution(n)
{
    var answer = 0;
    var digit = n.toString();
    var newArray = digit.split('');
    for(var i=0; i<newArray.length; i++){
        answer += parseInt(digit[i])
    }
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')

    return answer;
}