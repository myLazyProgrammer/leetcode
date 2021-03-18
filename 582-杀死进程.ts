function killProcess(pid: number[], ppid: number[], kill: number): number[] {
    if(kill === 0) return [0]
    let arr = []
    for(let i = 0; i < ppid.length; i++){
        if(ppid[i] === kill){
            arr.push(...killProcess(pid, ppid, pid[i]))
        }
    }
    return [kill, ...arr]
};