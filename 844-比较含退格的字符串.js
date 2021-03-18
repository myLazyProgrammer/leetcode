var backspaceCompare = function(S, T) {
    const getStr = (str) => {
        let stack = []
        for(let i in str){
            if(str[i] !== '#'){
                stack.push(str[i])
            }else{
                stack.length = stack.length - 1 < 0 ? 0 : stack.length -1
            }
        }
        return stack.join('')
    }

    return getStr(S) === getStr(T)
};