var searchRange = function(nums, target) {
    return [searchFirstPosition(nums, target), searchLastPosition(nums, target)]
}

function searchFirstPosition(nums, target){
    let len = nums.length
    let left = 0
    let right = len-1
    while(left < right){
        let mid = Math.floor(left + (right-left)/2)
        if(nums[mid] < target){
            left = mid+1
        }else{
            right = mid
        }
    }
    if(nums[left] === target) return left
    return -1
}


function searchLastPosition(nums, target){
    let len = nums.length
    let left = 0
    let right = len-1
    while(left < right){
        let mid = Math.floor(left + (right-left+1)/2)
        if(nums[mid] > target){
            right = mid-1
        }else{
            left = mid
        }
    }
    if(nums[left] === target) return left
    return -1
}