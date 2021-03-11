module.exports = function reverse (n) {
    let res = 0;
    for(; n; n = Math.floor(n / 10)) {
        res *= 10;
        res += n % 10;
    }
    return res;
}
