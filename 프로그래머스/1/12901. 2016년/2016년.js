function solution(a, b) {
    let dayInMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var dayOfWeek = ['SUN', 'MON' ,'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    var totalDay = dayInMonth.slice(0, a-1).reduce((acc, cur) => acc + cur , 0) + b - 1;
    var dayOfWeekIndex = (totalDay + 5) % 7
       
    return dayOfWeek[dayOfWeekIndex];
}