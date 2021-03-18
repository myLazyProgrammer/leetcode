function peakIndexInMountainArray(arr: number[]): number {
    let len = arr.length
    let l = 0
    let r = len-1
    while(l < r){
        let mid = Math.floor(l + (r-l)/2)
        if(arr[mid] > arr[mid+1]){
            r = mid
        }else{
            l = mid+1
        }
    }

    return l
};