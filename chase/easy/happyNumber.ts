function isHappy(n: number): boolean {
    let num:number[] = []
    num.push(n)

    while(n != 1){
        let str:string = n.toString()
        let sum:number = 0
        for(let i = 0; i < str.length; i++){
            sum += Math.pow(parseInt(str[i]), 2)
        }
        n = sum
        if(num.find((i)=>i===n))
            return false
        else
            num.push(n)
    }
    return true
};


console.log(isHappy(19))