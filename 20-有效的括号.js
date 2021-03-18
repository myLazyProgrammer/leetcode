var isValid = function(s) {
    let stack = []
    for(let i in s){
        let stackTail = stack[stack.length-1]
        if(
            (s[i] === ')' && stackTail === '(')||
            (s[i] === ']' && stackTail === '[')||
            (s[i] === '}' && stackTail === '{')
        ){
            stack.length = stack.length - 1
        }else{
            stack.push(s[i])
        }
    }
    return !stack.length
};