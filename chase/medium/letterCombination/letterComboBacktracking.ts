function letterCombinationsIter(digits: string): string[] {
    let keypad = new Map<string,string[]>([
        ['2', ['a','b','c']],
        ['3', ['d','e','f']],
        ['4', ['g','h','i']],
        ['5', ['j','k','l']],
        ['6', ['m','n','o']],
        ['7', ['p','q','r','s']],
        ['8', ['t','u','v']],
        ['9', ['w','x','y','z']],
    ])
    let results:string[] = []
    function backTracking(currStr:string, digit:number){
        if(currStr.length === digits.length){
            results.push(currStr)
            return
        }
        else
           keypad.get(digits[digit])?.forEach(c => backTracking(currStr + c, digit + 1)) 
    }

    if(digits.length > 0)
        backTracking('', 0)
    
    return results
    
};




console.log(letterCombinationsIter('23'))