function firstUniqChar(s: string): number {
    let index:number = -1
    let counts = new Map<string, number>()
    for(let char of s){
        let count = counts.get(char) ?? 0

        counts.set(char, count + 1)
    }
    for(let [key, value] of counts){
        if(value === 1){
            return s.indexOf(key)
        }
    }
    return index
};

console.log(firstUniqChar('Samin Yasar'))