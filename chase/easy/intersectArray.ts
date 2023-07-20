function intersection(nums1: number[], nums2: number[]): number[] {
    let result = new Set<number>();
    for(let num of nums1){
        if(nums2.includes(num))
            result.add(num)
    }
    return Array.from(result)
};