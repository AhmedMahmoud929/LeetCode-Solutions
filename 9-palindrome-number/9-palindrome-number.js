/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let result = false;
    let rx = Array.from(String(x)).reverse().join("");

    if (x == rx && x >= 0) {
        result = true;
    } else {
        result = false
    }
    return (result)

};