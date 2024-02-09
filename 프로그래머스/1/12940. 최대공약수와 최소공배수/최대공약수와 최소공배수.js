function solution(n, m) {
    function gcd(a, b){
        while(b != 0){
            var temp = a % b;
            a = b;
            b = temp;
        }
        return a;
    }
    function lcm(a, b){
        return (a * b) / gcd(a, b);
    }
    return  [gcd(n, m), lcm(n, m)];
}
//최대공약수 : m % n == 0