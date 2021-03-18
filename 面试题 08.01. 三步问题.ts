function waysToStep(n: number): number {
    if(n<=2) return n
    if(n === 3) return 4
    let n1 = 1
    let n2 = 2
    let n3 = 4
    let result = 0
    for(let i = 4; i <= n; i++){
        result = ((n1 + n2) % 1000000007 + n3) % 1000000007
        n1 = n2
        n2 = n3
        n3 = result
    }
    return result
};