var maxSlidingWindow = function(nums, k) {
    if(!nums.length) return []
    let arr = []
    for(let i = 0; i <= nums.length - k; i++){
        let max = null
        for(let j = i; j < i+k; j++){
            if(max === null){
                max = nums[j]
            }else{
                if(nums[j] > max){
                    max = nums[j]
                }
            }
        }
        arr.push(max)
    }
    return arr
};