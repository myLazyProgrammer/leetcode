var MovingAverage = function(size) {
    this.queue = []
    this.num = 0
    this.size = size
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    if(this.num === this.size){
        this.num = 0
    }
    this.queue[this.num] = val
    this.num ++
    return this.queue.reduce(
        (prev, curr) => prev +curr,
        0 
    )/this.queue.length
};