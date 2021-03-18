function minEatingSpeed(piles: number[], H: number): number {
    let maxVal = Math.max(...piles)
    let left = 1
    let right = maxVal
    while(left < right){
        let mid = Math.floor(left + (right-left)/2)
        if(getH(piles, mid) > H){
            left = mid+1
        }else{
            right = mid
        }
    }
    return right
};

function getH(piles: number[], num: number): number{
    let h = 0
    for(let i = 0; i < piles.length; i++){
        h += Math.ceil(piles[i] / num)
    }
    return h
}