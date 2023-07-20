function letterCombinations(digits: string): string[] {
    let outputArr:string[] = []
    if(digits.length === 0) return outputArr

    outputArr.push('')
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

    for(let i = 0; i < digits.length; i++){
        while(outputArr[0].length === i){
            let permutation = outputArr.shift()
            keypad.get(digits[i])?.forEach(c=> outputArr.push(permutation + c))
        }
    }

    return outputArr
};




console.log(letterCombinations('23'))