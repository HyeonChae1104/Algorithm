function solution(hp) {
    var answer = 0;
    var general = Math.floor(hp / 5);
    var soldier = Math.floor((hp - general*5) / 3);
    let worker = hp - (general * 5) - (soldier * 3)
    return (general + soldier + worker)
}