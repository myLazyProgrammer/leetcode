function frequencySort(s: string): string {
    let hash:{
        [propName:string]: number
    } = {}
    for(let i in s.split('')){
        if(hash[s[i]]){
            hash[s[i]] ++
        }else{
            hash[s[i]] = 1
        }
    }
    let arr = Object.keys(hash)
    let res = arr
        .sort((a, b) => hash[b] - hash[a])
        .reduce(
            (prev: string[], next: string) => {
                return [...prev, ...new Array(hash[next]).fill(next)]
            },
            []
        )
        .join('')
        
    return res
};