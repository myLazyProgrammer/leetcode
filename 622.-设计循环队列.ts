class MyCircularQueue {
    private n: number = 0
    private headIndex: number = 0
    private count: number = 0
    private queue: number[] = []

    constructor(k: number) {
        this.n = k
    }

    enQueue(value: number): boolean {
        if(this.count === this.n) return false
        this.queue[this.headIndex + this.count === this.n ? 0 : this.headIndex + this.count] = value
        this.count++  
        return true
    }

    deQueue(): boolean {
        if(this.count === 0) return false
        this.headIndex = this.headIndex +1 === this.n ? 0 : this.headIndex +1
        this.count--
        return true
    }

    Front(): number {
        if(this.isEmpty()) return -1
        return this.queue[this.headIndex]
    }

    Rear(): number {
        if(this.isEmpty()) return -1
        let idx = this.headIndex + (this.count-1) === this.n ? 0 : this.headIndex + (this.count-1)
        return this.queue[idx]
    }

    isEmpty(): boolean {
        return this.count === 0
    }

    isFull(): boolean {
        return this.count === this.n
    }
}