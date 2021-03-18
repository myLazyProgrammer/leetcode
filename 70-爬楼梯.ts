function climbStairs(n: number): number {
    if (n == 1) return 1
    if (n == 2) return 2

    let ret = 0
    let n1 = 2
    let n2 = 1
    for(let i = 2; i < n; i++){
        ret = n1 + n2
        n2 = n1
        n1 = ret
    }
    return ret
};