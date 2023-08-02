function removeDuplicates(nums: number[]): number {
    let k = 0
    
    for(let i = 0; i < nums.length; i++){
        nums[k++] = nums[i]
        while(nums[i] === nums[i+1]){
            i++
        }
    }

    return k
};


console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))