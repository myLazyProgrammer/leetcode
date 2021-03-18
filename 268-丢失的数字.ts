function missingNumber(nums: number[]): number {
    let obj:{
        [propName: string]: number
    } = {}
    nums.forEach(
        i => obj[i] = 1
    )
    let i = 0
    for(; i < nums.length; i++){
        if(!obj[i]){
            return i
        }
    }
    return i
};