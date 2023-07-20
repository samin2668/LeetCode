function breakPalindrome(palindrome: string): string {
    if(palindrome.length <= 1)
        return ''

    let str = [...palindrome]
    for(let i = 0; i < Math.floor(str.length/2); i++){
        if(str[i]!=='a'){
            str[i]='a'
            return str.join('')
        }
    }        
    str[str.length - 1] = 'b'
    return str.join('')
};



console.log(breakPalindrome('aba'))
