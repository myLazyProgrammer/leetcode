function findInMountainArray(target: number, mountainArr: MountainArray) {
    let len = mountainArr.length()
	let max = findMax(mountainArr, len)
    if(mountainArr.get(max) === target )return max
    let leftResult = findLeftResult(mountainArr, target, max)
    if(leftResult !== -1) return leftResult
    let rightResult = findRightResult(mountainArr, target, max, len)
    return rightResult
}

function findRightResult(mountainArr: MountainArray, target: number, max: number, len: number){
    let left = max
    let right = len-1
    while(left <= right){
        let mid = Math.floor(left + (right-left)/2)
        let midNum = mountainArr.get(mid)
        if(midNum < target){
            right = mid-1
        }else if(midNum > target) {
            left = mid+1
        }else{
            return mid
        }
    }
    return -1
}

function findLeftResult(mountainArr: MountainArray, target: number, max: number){
    let left = 0
    let right = max
    while(left <= right){
        let mid = Math.floor(left + (right-left)/2)
        let midNum = mountainArr.get(mid)
        if(midNum > target){
            right = mid-1
        }else if(midNum < target) {
            left = mid+1
        }else{
            return mid
        }
    }
    return -1
}

function findMax(mountainArr: MountainArray, len: number){
    let l = 0
    let r = len-1
    while(l < r){
        let mid = Math.floor(l + (r-l)/2)
        if(mountainArr.get(mid) > mountainArr.get(mid+1)){
            r = mid
        }else{
            l = mid+1
        }
    }

    return l
}