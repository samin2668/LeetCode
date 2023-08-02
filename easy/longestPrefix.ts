function longestCommonPrefix(strs: string[]): string {
    let ret:string = ''
    let str = strs[0]

    for(let i = 0; i < str.length; i++){
        let count = 0
        for(let j = 1; j < strs.length; j++){
            if(str[i] === strs[j][i])
                count++
            else
                return ret
        }
        if(count === strs.length-1)
            ret+=str[i]
    }
    
    return ret
};


console.log(longestCommonPrefix(["cir","car"]))
