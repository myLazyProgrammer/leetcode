var nextGreaterElement = function(nums1, nums2) {
    let result = []
    let stack = []
    for(let i = 0; i< nums1.length; i++){
        let nextNum = -1
        for(let j = 0; j < nums2.length; j++){
            if(nums2[j] === nums1[i]){
                stack.push(nums1[i])
            }
            if(stack.length && nums2[j] > nums1[i]){
                nextNum = nums2[j]
                break
            }
        }
        stack.length = 0
        result.push(nextNum)
    }

    return result
};