function solution(nums){
    const uniquePonketmon = new Set(nums);
    const maxPonketmon = Math.min(uniquePonketmon.size, nums.length / 2);
    return maxPonketmon;
}
