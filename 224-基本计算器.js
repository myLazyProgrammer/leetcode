var calculate = function(s) {
    let _s = s.split('').filter(i => i !== ' ')
    let numStack = []
    let operatorStack = []
    let result = 0
    if(_s.length < 3){
        return parseFloat(_s.join(''))
    }
    for(let i = 0 ; i < _s.length;  i++){
        let str = _s[i]
        if(str === '+' || str === '-' || str === '('){
            operatorStack.push(str)
        }else if(str === ')'){
            operatorStack.push(')')
            //监测到可以运算的最小区域
            for(let j = operatorStack.length; j>=0; j--){
                if(operatorStack[j] === '('){
                    let num = operatorStack.length - 1 - j
                    let minNum = 0
                    minNum += parseFloat(numStack[numStack.length - num])
                    for(let k = 1; k < num; k++ ){
                        if(operatorStack[j+ k] === '+'){
                            minNum += parseFloat(numStack[numStack.length - num + k])
                        }else{
                            minNum -= parseFloat(numStack[numStack.length - num + k])
                        }
                    }
                    numStack[numStack.length - num] = minNum
                    numStack.length = numStack.length - num +1
                    operatorStack.length = j
                    break
                }
            }
        }else{
            if(
                !_s[i-1] || (['+','-','(',')'].includes(_s[i-1])) || (['+','-','(',')'].includes(_s[i-1]))
            ){
                numStack.push(str)
            }else{
                if(numStack[numStack.length-1]){
                    numStack[numStack.length-1] = numStack[numStack.length-1] + str
                }
                
            }
        }
    }

    result += parseFloat(numStack[0])
    for(let i = 1; i <= operatorStack.length; i++  ){
        if(operatorStack[i-1] === '+'){
            result += parseFloat(numStack[i])
        }else{
            result -= parseFloat(numStack[i])
        }
    }

    

    return result
};