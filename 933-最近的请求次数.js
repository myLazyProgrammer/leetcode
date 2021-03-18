var RecentCounter = function() {
    this.queue = []
    this.num = 0
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.queue.push(t)
    for(let i = this.num; i < this.queue.length; i++){
        if(t - this.queue[i] > 3000){
            this.num++
        }else{
            break
        }
    }
    return this.queue.length - this.num
};