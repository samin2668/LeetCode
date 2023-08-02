function myAtoi(s: string): number {
    let max = Math.pow(2, 31) - 1
    let min = Math.pow(-2, 31)
    let num = 0
    let sign = 1
    s = s.replace(' ', '')

    let regex:RegExp = /([0-9]+)/
    let str = regex.exec(s)
    console.log(str![0])
    if(s.includes('.'))
        s = s.substring(0, s.indexOf('.'))
    let pow = 0
    for(let i = s.length-1; i >= 0; i--){
        switch(s[i]){
            case '0':
                pow++
                break
            case '1':
                num += 1 * Math.pow(10, pow)
                pow++
                break
            case '2':
                num += 2 * Math.pow(10, pow)
                pow++
                break
            case '3':
                num += 3 * Math.pow(10, pow)
                pow++
                break
            case '4':
                num += 4 * Math.pow(10, pow)
                pow++
                break
            case '5':
                num += 5 * Math.pow(10, pow)
                pow++
                break
            case '6':
                num += 6 * Math.pow(10, pow)
                pow++
                break
            case '7':
                num += 7 * Math.pow(10, pow)
                pow++
                break
            case '8':
                num += 8 * Math.pow(10, pow)
                pow++
                break
            case '9':
                num += 9 * Math.pow(10, pow)
                pow++
                break
            case '-':
                sign = -1
                break
            case '+':
                sign = 1
                break
            case '.':
                return num * sign
                break
        }
    }

    num =  num * sign

    if(num > max)
        return max
    else if(num < min)
        return min
    else
        return num * sign
};

console.log(myAtoi("+-"))