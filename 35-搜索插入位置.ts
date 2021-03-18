var searchInsert = function(nums, target) {
    if(nums.length === 0) return 0
    if(nums[nums.length-1] < target) return nums.length
    let low = 0
    let high = nums.length -1
    while(low < high){
        let mid = Math.floor(low + (high-low)/2)
        if(nums[mid] < target){
            low = mid+1
        }else{
            high = mid
        }
    }
    return low
};