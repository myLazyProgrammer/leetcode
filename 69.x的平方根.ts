function mySqrt(x: number): number {
    let left = 0
    let right = x
    while(left < right){
        let mid = Math.floor((left+right+1)/2)
        if(mid*mid > x){
            right = mid-1
        }else{
            left = mid
        }
    }

    return left
}