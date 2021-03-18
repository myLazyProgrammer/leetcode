/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    var re = new RegExp(/[^A-Za-z0-9]/g)
    let str = s.replace(re, '').toLowerCase()
    let midpoint = parseInt(str.length / 2)
    let flag = true
    for(let i = 0 ; i < midpoint; i++){
        if(str[i] !== str[str.length - 1 - i]){
            flag = false
        }
    }
    return flag
};