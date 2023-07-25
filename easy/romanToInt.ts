/* 
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
    Symbol       Value
    I             1
    V             5
    X             10
    L             50
    C             100
    D             500
    M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. 
The number 27 is written as XXVII, which is XX + V + II.
Roman numerals are usually written largest to smallest from left to right. 
However, the numeral for four is not IIII. Instead, the number four is written as IV.
Because the one is before the five we subtract it making four. 
The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:
    I can be placed before V (5) and X (10) to make 4 and 9. 
    X can be placed before L (50) and C (100) to make 40 and 90. 
    C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.
*/

function romanToInt(s: string): number {
    let sum = 0

    let charMap = new Map<string, number>([
        ['I',1],
        ['V',5],
        ['X',10],
        ['L',50],
        ['C',100],
        ['D',500],
        ['M',1000]
    ])

    for(let i = 0; i < s.length; i++){
        if((s[i] === 'I' && i+1 < s.length) && (s[i+1] === 'V' || s[i+1] === 'X')){
            sum += charMap.get(s[i+1])! - charMap.get(s[i])!
            i++
        }
        else if((s[i] === 'X' && i+1 < s.length) && (s[i+1] === 'L' || s[i+1] === 'C')){
            sum += charMap.get(s[i+1])! - charMap.get(s[i])!
            i++
        }
        else if((s[i] === 'C' && i+1 < s.length) && (s[i+1] === 'D' || s[i+1] === 'M')){
            sum += charMap.get(s[i+1])! - charMap.get(s[i])!
            i++
        }
        else{
            sum += charMap.get(s[i])!
        }
    }

    return sum
};

console.log(romanToInt('XCIX'))