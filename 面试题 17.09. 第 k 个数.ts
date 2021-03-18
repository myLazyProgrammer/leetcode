function getKthMagicNumber(k: number): number {
    let result = []
    result[0] = 1
    let num3 = 0
    let num5 = 0
    let num7 = 0
    for(let i = 1; i < k; i++){
        let resultN = Math.min(
            result[num3] * 3, 
            result[num5] * 5,
            result[num7] * 7
        )
        if (resultN % 3 == 0) {
            num3++
        }
        if (resultN % 5 == 0) {
            num5++
        }
        if (resultN % 7 == 0) {
            num7++
        }
        result[i] = resultN
    }
    return result[k-1]
};