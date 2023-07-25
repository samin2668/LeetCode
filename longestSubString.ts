function lengthOfLongestSubstring(s: string): number {
    let max = 0
    let str:string[] = []
    for(let i = 0; i < s.length; i++){
        str.push(s[i])
        if(str.includes(s[i+1])){
            let index = str.indexOf(s[i+1])
            max = Math.max(max, str.length)
            str.splice(0, index+1)
        }
    }

    return Math.max(max, str.length)
};

console.log(lengthOfLongestSubstring("dvdf"))