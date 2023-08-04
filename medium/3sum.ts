function threeSum(nums: number[]): number[][] {
    if(nums.length < 3)
        return []
    nums.sort((a,b)=>a-b)
    if(nums[0] > 0)
        return []

    let ret:number[][] = []
    for(let i = 0; i < nums.length; i++){
        if(nums[i] > 0)
            break
        if(i > 0 && nums[i] === nums[i-1])
            continue
        let low = i+1
        let high = nums.length - 1
        let sum 
        while(low < high){
            sum = nums[i] + nums[low] + nums[high]
            if(sum > 0)
                high--
            else if(sum < 0)
                low++
            else{
                ret.push([nums[i], nums[low], nums[high]])
                let lastHigh = nums[high]
                let lastLow = nums[low]

                while(low < high && nums[low] === lastLow)
                    low++
                while(low < high && nums[high] === lastHigh)
                    high--
            }
        }
    }


    return ret
};

console.log(threeSum([-1,0,1,2,-1,-4]));
