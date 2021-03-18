function fib(n: number): number {
    if(n === 0 || n === 1) return n
    let result = 0
    let n1 = 1
    let n2 = 0
    for(let i = 2; i <= n; i++ ){
        result = (n1 + n2)% 1000000007
        n2 = n1
        n1 = result
    }
    return result
};