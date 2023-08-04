function intToRoman(num: number): string {
    let len = num.toString().length
    let ret = ''
    let pow = 0
    while(num > 0){
        pow++
        let n = num % Math.pow(10, pow)
        num = num - n
        if(n % 4 === 0 || n % 9 === 0){
            switch(n){
                case 4: 
                    ret = 'IV' + ret
                    continue
                case 40:
                    ret = 'XL' + ret
                    continue
                case 400:
                    ret = 'CD' + ret
                    continue
                case 9: 
                    ret = 'IX' + ret
                    continue 
                case 90:
                    ret = 'XC' + ret
                    continue
                case 900:
                    ret = 'CM' + ret
                    continue
                    
            }
        }
        if(n % 1000 === 0){
            for(let j = 0; j < n/1000; j++)
                ret = 'M' + ret
            continue
        }
        if(n % 100 === 0){
            let str = ''
            if(n >=500){
                str = str + 'D' 
                n = n - 500
            }
            while(n){
                str = str + 'C'
                n = n - 100
            }
            ret = str + ret
            continue
        }
        if(n % 10 === 0){
            let str = ''
            if(n >=50){
                str = str + 'L'
                n = n - 50
            }
            while(n){
                str = str + 'X'
                n = n - 10
            }
            ret = str + ret
            continue
        }
        else{
            let str = ''
            if(n >=5){
                str = str + 'V'
                n = n - 5
            }
            while(n){
                str = str + 'I'
                n = n - 1
            }
            ret = str + ret
        }
    }


    

    return ret
};


console.log(intToRoman(600))