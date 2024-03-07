function solution(s, n) {
    var alphabet = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXY                          ";
    
    return s.split('').map((e)=> alphabet[alphabet.indexOf(e)+n]).join('');
}