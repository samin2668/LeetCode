/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let subString = '';
    let hash = {}
    let len = 0
    for(char of s){
        if(subString.){
            console.log('letter found')
        }
        else{
            subString.push(char)
        }

    }
    return 1
};

console.log(lengthOfLongestSubstring("dvdf"));

//dvdf


