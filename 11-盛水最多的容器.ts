function maxArea(height: number[]): number {
    let len = height.length
    let left = 0
    let right = len-1
    let volume = 0
    while(left < right){
        volume = Math.max(volume, (right-left)*Math.min(height[left], height[right]))
        if(height[left] > height[right]) --right
        else ++left
    }
    return volume
};