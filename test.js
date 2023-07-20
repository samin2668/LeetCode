function letterCombinations(digits) {
    var keypad = new Map([
        ['2', ['a', 'b', 'c']],
        ['3', ['d', 'e', 'f']],
        ['4', ['g', 'h', 'i']],
        ['5', ['j', 'k', 'l']],
        ['6', ['m', 'n', 'o']],
        ['7', ['p', 'q', 'r', 's']],
        ['8', ['t', 'u', 'v']],
        ['9', ['w', 'x', 'y', 'z']],
    ]);
    var results = [];
    function helper(currStr, digit) {
        var _a;
        if (digits.length === currStr.length) {
            results.push(currStr);
            return;
        }
        else
            (_a = keypad.get(digits[digit])) === null || _a === void 0 ? void 0 : _a.forEach(function (i) { return helper(currStr + i, digit + 1); });
    }
    if (digits) {
        helper('', 0);
    }
    return results;
}
;
console.log(letterCombinations('23'));
