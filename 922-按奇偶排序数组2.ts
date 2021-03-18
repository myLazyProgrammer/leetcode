function sortArrayByParityII(A: number[]): number[] {
    let j = 1
    for(let i=0; i < A.length; i+=2){
        if (A[i] & 1) {
            while (A[j] & 1) {
                j += 2
            }
            swap(A, i, j)
        }
    }
    return A

};

function swap(nums: number[], n1: number, n2: number){
    let temp = nums[n1]
    nums[n1] = nums[n2]
    nums[n2] = temp
}