var findMin = function(nums) {
    let len = nums.length
    if(nums[0] < nums[len - 1] || len === 1) return nums[0] 
    let left = 0
    let right = len -1
    while(left <= right){
        let mid = Math.floor(left+(right-left)/2)
        if(nums[mid] > nums[right]){
            left = mid+1
        }else if(nums[mid] < nums[right]){
            right = mid
        }else{
            return nums[mid]
        }
    }
};