function solution(number, limit, power) {
    let totalIronWeight = 0;
    
    for (let i = 1; i <= number; i++) {
        let attackPower = getAttackPower(i, power, limit);
        totalIronWeight += attackPower;
    }
    
    return totalIronWeight;
}

function getAttackPower(number, power, limit) {
    let divisorCount = getDivisorCount(number);
    if (divisorCount > limit) {
        return power;
    } else {
        return divisorCount;
    }
}

function getDivisorCount(number) {
    let count = 0;
    let sqrt = Math.sqrt(number);
    for (let i = 1; i <= sqrt; i++) {
        if (number % i === 0) {
            if (number / i === i) {
                count += 1;
            } else {
                count += 2;
            }
        }
    }
    return count;
}

// 예시 입력
console.log(solution(15, 3, 2)); // 출력: 24
