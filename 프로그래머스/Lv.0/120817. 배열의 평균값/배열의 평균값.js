function solution(numbers) {
    var length = numbers.length;
    var sum = 0;
    for (var i = 0; i < length; i++) {
        sum += numbers[i];
    }

    var average = sum / length;

    if (average % 1 == 0 || average % 1 == 0.5) {
        return average;
    } else {
        return Math.round(average);
    }
}

