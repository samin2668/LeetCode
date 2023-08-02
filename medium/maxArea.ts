function maxArea(height: number[]): number {
    let n = height.length
    let i = 0
    let j = height.length - 1
    let max = 0
    while(i < j){
        max = Math.max(max, (j-i) * Math.min(height[i], height[j]))
        if(height[i] < height[j])
            i++
        else
            j--
    }
    
    return max
};

console.log(maxArea([1,2,4,3]))