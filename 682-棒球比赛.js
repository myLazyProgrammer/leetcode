var calPoints = function(ops) {
    let stack = []
    for(let i = 0; i < ops.length; i++){
        if(!['+', 'C', 'D'].includes(ops[i])){
            stack.push(parseFloat(ops[i]))
            continue
        }
        if(ops[i] === 'C'){
            stack.pop()
        }else if(ops[i] === 'D'){
            stack.push(stack[stack.length-1] * 2)
        }else if(ops[i] === '+'){
            stack.push(stack[stack.length-1] + stack[stack.length-2])
        }
    }

    return stack.reduce(
        (prev, curr) => prev + curr,
        0
    )
};