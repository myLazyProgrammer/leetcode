function search(nums: number[], target: number): number {
    let len = nums.length
    let pivotPoint = findMin(nums)
    let filterArr = []

    if(nums[pivotPoint] === target){
        return pivotPoint
    }else if(nums[len-1] === target){
        return len-1
    }

    if(nums[len-1] > target){
        filterArr = nums.slice(pivotPoint)
        return bSearch(filterArr, target) === -1 ? -1 : pivotPoint + bSearch(filterArr, target)
    }else{
        filterArr = nums.slice(0, pivotPoint)
        return bSearch(filterArr, target)
    }

    
    
};

function bSearch(nums: number[], target: number): number{
    let len = nums.length
    let left = 0
    let right = len - 1

    while(left <= right){
        let mid = Math.floor(left + (right-left)/2)
        if(nums[mid] < target){
            left = mid+1
        }else if(nums[mid] > target){
            right = mid-1
        }else{
            return mid
        }
    }

    return -1
}


function findMin(nums: number[]): number{
     let len = nums.length
    let left = 0
    let right = len -1

    while(left < right){
        let mid = Math.floor(left + (right-left)/2)
        if(nums[mid] > nums[right]){
            left = mid+1
        }else if(nums[mid] < nums[right]){
            right = mid
        }else{
            right--
        }
    }
    return left
}