function combinationSum(candidates: number[], target: number): number[][] {
    let res = new Set<number[]>()

    function dfs(currSum:number, index:number, path:number[]){
        if(currSum === target){
            if(!res.has([...path]))
                res.add([...path])
            return
        }

        for(let i = index; i < candidates.length; i++){
            if(currSum + candidates[i] <= target)
                dfs(currSum + candidates[i], i+1, [...path, candidates[i]])
        }
    }
    candidates.sort((a,b)=>a-b)

    dfs(0, 0, [])


    return [...res]
}


console.log(combinationSum([10,1,2,7,6,1,5], 8))
console.log('done')