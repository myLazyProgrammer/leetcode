function firstMissingPositive(nums: number[]): number {
    let obj:{
        [propName: string]: number
    } = {}
    nums.forEach(
        i => obj[i] = 1
    )
    let i = 1
    while(true){
        if(!obj[i]){
            return i
        }
        i++
    }
};