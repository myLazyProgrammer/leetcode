function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let len = m+n
    let last = len-1
    //nums1的最后一位
    let i = m-1
    //nums2的最后一位
    let j = n-1
    for(let k = 0; k < m+n; k++){
       if(nums2[j] > nums1[i] || i===-1){
            nums1[last] = nums2[j]
            j--
       }else{
            let temp = nums1[i]
            nums1[i] = nums1[last]
            nums1[last] = temp
            i--
       }
        last--
    }
};