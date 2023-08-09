function fourSum(nums: number[], target: number): number[][] {
    let ret:number[][] = []
    let quad:number[] = []
    nums.sort((a,b)=>a-b)

    function kSum(k:number, start:number, target:number,){
        if(k === 2){
            let l = start
            let r = nums.length-1
            while(l < r){
                if(nums[l] + nums[r] < target)
                    l+=1
                else if(nums[l] + nums[r] > target)
                    r-=1
                else{
                    ret.push([...quad, nums[l], nums[r]])
                    l+=1
                    r+=1
                    while(l<r && nums[l] === nums[l-1])
                        l+=1
                    while(l<r && nums[r] === nums[r+1])
                        r-=1
                }
            }
        }
        else{
            for(let i = start; i < nums.length - k + 1; i++){
                if(i > start&& nums[i] === nums[i-1])
                    continue
                quad.push(nums[i])
                kSum(k-1, i+1, target - nums[i])
                quad.pop()
            }
        }
    }

    kSum(4,0,target)

    return ret
};

console.log(fourSum([1,0,-1,0,-2,2],0))