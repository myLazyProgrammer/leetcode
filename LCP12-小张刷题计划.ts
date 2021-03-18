function minTime(time: number[], m: number): number {
    let max = time.reduce(
        (prev, next) => prev+next,0
    )
    let left = 0
    let right = max
    while(left < right){
        let mid = Math.floor(left + (right-left)/2 +1)
        let midNum =  getTime(time, mid)
        if(midNum > m){
            left = mid
        }else{
            right = mid-1
        }
    }
    return left
};

function getTime(time: number[], max: number): number{
    let day = 0
    let curr = 0
    let _max = 0
    for(let i = 0; i < time.length; i++){
        if(time[i] > _max){
            _max = time[i]
        }
        if(curr + time[i] >= max){
            day++
            curr = curr + time[i] - _max
            let _curr = curr
            for(let j=i+1; j <time.length; j++){
                if(!time[j] || _curr + time[j] < max){
                    i++
                    _curr += time[j]
                }else{
                    curr = 0
                    break
                }
            }
            curr = 0
            _max = 0
        }else{
            curr += time[i]
        }
    }
    if(curr!==0){
        day++
    }
    return day
}