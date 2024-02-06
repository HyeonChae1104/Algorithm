function solution(answers) {
    var correct = [0, 0, 0]; // 각 학생의 맞은 문제 수를 저장하는 배열

    var string1 = [1, 2, 3, 4, 5];
    var string2 = [2, 1, 2, 3, 2, 4, 2, 5];
    var string3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    var patterns = [string1, string2, string3];

    // 각 학생의 답안 패턴과 실제 답안 배열을 비교하여 맞은 문제 수를 계산
    for (var i = 0; i < answers.length; i++) {
        for (var j = 0; j < patterns.length; j++) {
            if (answers[i] === patterns[j][i % patterns[j].length]) {
                correct[j]++;
            }
        }
    }

    // 가장 많은 문제를 맞은 학생(들)을 찾기
    var maxCorrect = Math.max(...correct);
    var result = [];
    for (var k = 0; k < correct.length; k++) {
        if (correct[k] === maxCorrect) {
            result.push(k + 1); // 배열의 인덱스를 학생 번호로 변환하여 저장
        }
    }

    return result;
}
