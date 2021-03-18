function findKthLargest(nums: number[], k: number): number {
    let _nums = quickSort(nums)
    return _nums[_nums.length - k]
};

function quickSort(nums: number[]): number[]{
    if(nums.length <= 1) return nums

    let middle = Math.floor(nums.length/2)
    let pivot = nums.splice(middle,1)[0]
    let left = []
    let right = []

    for(let i =0 ; i < nums.length ; i++){
        if(nums[i] < pivot){
            left.push(nums[i])
        }else{
            right.push(nums[i])
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)]
}