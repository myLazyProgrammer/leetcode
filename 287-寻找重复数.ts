
function findDuplicate(nums: number[]): number {
    let obj:{
        [propName: string]: number
    } = {}

    for(let i = 0; i < nums.length; i++){
        if(obj[nums[i]]){
            return nums[i]
        }else{
            obj[nums[i]] = 1
        }
    }
    return 0
};