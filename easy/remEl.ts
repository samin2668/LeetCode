//remove elements in place
function removeElement(nums: number[], val: number): number {
    let count = 0

    // let nextIndex = nums.length - 1
    // for(let i = 0; i < nums.length; i++){
    //     if(nums[i] === val){
    //         while(nums[nextIndex] === val){
    //             nextIndex--
    //         }
    //             nums[i] = nums[nextIndex]
    //             nextIndex--
    //     }
    //     else
    //         count++
    // }

    for(let num of nums){
        if(num !== val){
            nums[count] = num
            count++
        }
    }

    return count
};


console.log(removeElement([0,1,2,2,3,0,4,2], 2))