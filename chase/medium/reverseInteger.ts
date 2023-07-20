function reverse(x: number): number {
    let max = Math.pow(2, 31) -1
    let min = Math.pow(-2, 31)
    let xR:string = x.toString().split("").reverse().join("")
    if(xR[xR.length-1]==='-'){
        xR = '-' + xR.slice(0, xR.length -1)
    }

    let result = parseInt(xR)
    if(result >= min && result <= max){
        return result
    }

    return 0
};

console.log(reverse(-123))

