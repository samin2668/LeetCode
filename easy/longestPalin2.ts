function longestPalindrome2(s: string): string {
    //keeping track of indeces for palindrome
    let startIndex = 0, endIndex = 0
    
    //loop through each character in string treating it as a center
    //2 base cases, odd or even length palindrome
    for(let i = 0; i < s.length; i++){
        //starting point for odd palindrom
        let start = i, end = i
        while(start >= 0 && end < s.length && s[start] === s[end]){
            if(end - start + 1 > endIndex - startIndex + 1){
                //record starting and ending index
                startIndex = start
                endIndex = end
            }
            start--
            end++
        }

        //starting point for even palindrom
        start = i, end = i+1
        while(start >= 0 && end < s.length && s[start] === s[end]){
            if(end - start + 1 > endIndex - startIndex + 1){
                //record starting and ending index
                startIndex = start
                endIndex = end

            }
            start--
            end++
        }
    }
    //return substring
    return s.slice(startIndex,endIndex+1)
}

console.log(longestPalindrome2("babad"))