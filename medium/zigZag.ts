function convert(s: string, numRows: number): string {
    let ret:string = ''
    if(numRows === 1)
        return s
    //PAHNAPLSIIGYIR
    let increment = 2 * (numRows - 1)
    for(let r = 0; r < numRows; r++){
        for(let i = r; i < s.length; i += increment){
            ret+=s[i]
            if((r > 0 && r < numRows - 1) && i + increment - 2 * r < s.length){
                ret+=s[i + increment - 2 * r]
            }
        }
    }

    return ret
};

console.log(convert('PAYPALISHIRING', 3))