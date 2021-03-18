var guessNumber = function(n) {
    let low = 0
    let high = n
    while(low < high){
        let mid = Math.floor(low + (high-low)/2)
        let num = guess(mid)
        if(num === 0){
            return mid
        }else if(num === -1){
            high = mid-1
        }else{
            low = mid+1
        }
    }
    if(guess(low) === 0) return low
    return -1
};