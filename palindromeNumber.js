var isPalindrome = function(x) {
    let text = x.toString()
    let reverseText = text.split('').reverse().join('')

    return text === reverseText ? true : false
};


console.log(isPalindrome(123))