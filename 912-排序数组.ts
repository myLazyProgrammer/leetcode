//插入排序
// function sortArray(nums: number[]): number[] {
//     if(nums.length <= 1) return nums
//     for(let i = 0; i < nums.length-1; i++){
//         let min = nums[i]
//         let minIdx = i
//         for(let j = i+1; j < nums.length; j++){
//             if(nums[j] < min){
//                 min = nums[j]
//                 minIdx = j
//             }
//         }
//         let temp = nums[i]
//         nums[i] = min
//         nums[minIdx] = temp
//     }
//     return nums
// };


//选择排序
// function sortArray(nums: number[]): number[] {
//     if(nums.length <= 1) return nums
//     for(let i = 1; i < nums.length; i++){
//         let val = nums[i]
//         let j = i-1
//         for(; j >= 0; --j){
//             if(nums[j] > val){
//                 nums[j+1] = nums[j]
//             }else{
//                 break
//             }
//         }
//         nums[j+1] = val
//     }
//     return nums
// };



//归并排序
// function sortArray(nums: number[]): number[] {
//     let len = nums.length
//     mergeSort(nums, 0, len-1)
//     return nums
// };
// function mergeSort(nums: number[], left:number, right:number){
//     if(left === right) return 
//     let mid = Math.floor(left + (right-left)/2)
//     mergeSort(nums, left, mid)
//     mergeSort(nums, mid+1, right)
//     merge(nums, left, mid, right)
// }
// function merge(nums:number[], left:number, mid: number, right:number){
//     let len = right - left + 1
//     let temp = new Array(len)

//     for(let i = 0; i < len; i++){
//         temp[i] = nums[left + i]
//     }
//     let i = 0
//     let j = mid-left+1
//     for(let k = 0; k < len; k++){
//         if(i === mid+1-left){
//             nums[left + k] = temp[j]
//             j++
//         }else if(j === right+1-left){
//             nums[left+k] = temp[i]
//             i++
//         }else if(temp[i] <= temp[j]){
//             nums[left+k] = temp[i]
//             i++
//         }else{
//             nums [left+k] = temp[j]
//             j++
//         }
//     }
// }



//归并排序1
// function sortArray(numS: number[]): number[] {
//     if(numS.length <= 1) return numS
//     let middle = Math.floor(numS.length /2)
//     let left = numS.slice(0, middle)
//     let right = numS.slice(middle)
//     return merge(sortArray(left), sortArray(right))
// }

// function merge(left: number[], right: number[]): any[]{
//     let result = []
//     while(left.length > 0 && right.length > 0){
//         if(left[0] < right[0]){
//             result.push(left.shift())
//         }else{
//             result.push(right.shift())
//         }
//     }
//     return [...result, ...left, ...right]
// }