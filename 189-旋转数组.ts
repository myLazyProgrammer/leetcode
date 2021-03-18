//解法1
// function rotate(nums: number[], k: number): void {
//     let len = nums.length
//     k %= len     
//     for(let i = 0; i < k; i++){
//         let temp = nums[len-1]
//         for(let j = len-1; j >0; j--){
//             nums[j] = nums[j-1]
//         }
//         nums[0] = temp
//     }
// };



//解法2
function rotate(nums: number[], k: number): void {
    let len = nums.length
    k %= len     
    reverse(nums, 0, len-1)
    reverse(nums, 0, k-1)
    reverse(nums, k, len-1)
};

function reverse(nums: number[], start: number, end: number){
    let middle = Math.floor((end+start)/2)
    for(let i = 0; i <= middle-start; i++){
        let temp = nums[i+start]
        nums[i+start] = nums[end-i]
        nums[end-i] = temp
    }
}