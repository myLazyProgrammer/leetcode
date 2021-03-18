function splitArray(nums: number[], m: number): number {
    let max = Math.max(...nums)
    let sum = nums.reduce(
        (prev, curr) => prev + curr,
        0
    )

    let left = max
    let right = sum
    while(left < right){
        let mid = Math.floor(left + (right-left)/2)
        let split = getSplitNum(nums, mid)
        if(split > m){
            left = mid + 1
        }else{
            right = mid
        }
    }
    return left
};

function getSplitNum(nums: number[], max: number): number{
    let curr = 0
    let split = 1
    for(let i = 0; i < nums.length; i++ ){
        if(curr + nums[i] > max){
            curr = 0
            split++
        }
        curr += nums[i]
    }
    return split
}