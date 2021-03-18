function sortColors(nums: number[]): void {
    if(!nums.length) return
    let pivotIdx = nums.indexOf(1) > -1 ? nums.indexOf(1) : nums.indexOf(0) > -1 ? nums.indexOf(0) : 0
    let pivot = nums[pivotIdx]
    swap(nums, 0, pivotIdx)
    let lt = 0
    let gt = nums.length
    let i = 1
    while(i < gt){
        if(nums[i] === pivot){
            i++
        }else if(nums[i] <  pivot){
            lt++
            swap(nums, lt, i)
            i++
        }else{
            gt--
            swap(nums, i, gt)
        }
    }
    swap(nums, 0, lt)
};

function swap(nums: number[], n1: number, n2: number){
    let temp = nums[n1]
    nums[n1] = nums[n2]
    nums[n2] = temp
}