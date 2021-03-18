function shipWithinDays(weights: number[], D: number): number {
    let right = weights.reduce(
        (prev, curr) => prev + curr, 0
    )
    let left = Math.max(...weights)

    while(left < right){
        let mid = Math.floor(left + (right-left)/2)
        let days = getDays(weights, mid)
        if(days > D){
            left = mid+1
        }else {
            right = mid
        }
    }
    return right
};

function getDays(weights: number[], n: number): number{
    let day = 0
    let sum = 0
    for(let i = -1; i < weights.length-1; i++){
        if(sum + weights[i+1] > n){
            day++
            sum = 0
        }

        sum += weights[i+1] || 0
    }
    if(sum){
        day++
    }
    return day
}