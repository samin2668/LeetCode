function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let nums = [...nums1, ...nums2]
    nums.sort((a,b)=>a-b)
    console.log(nums)
    let ret:number
    return nums.length % 2 ? 
        nums[Math.floor(nums.length/2)] : 
        (nums[nums.length/2] + nums[nums.length/2 -1])/2
};


console.log(findMedianSortedArrays([2,1],[4,3]))