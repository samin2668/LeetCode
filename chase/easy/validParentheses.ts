function isValid(s: string): boolean {
    let stack:string[] = []
    if(s[0] === ')' || s[0] === ']' || s[0] === '}')
        return false
    
    else if(s.at(-1) === '(' || s.at(-1) === '[' || s.at(-1) === '{')
        return false
    
    for(let i = 0; i < s.length; i++){
        if(s[i] === '(' || s[i] === '[' || s[i] === '{')
            stack.push(s[i])

        switch(s[i]){
            case ')':
                if(stack.at(-1) === '(')
                    stack.pop()
                else
                    return false
                break;
            case ']':
                if(stack.at(-1) === '[')
                    stack.pop()
                else
                    return false
                break;
            case '}':
                if(stack.at(-1) === '{')
                    stack.pop()
                else
                    return false
                break;
        }
        
    }
    if(stack.length === 0)
        return true
    else 
        return false
};

console.log(isValid('(])'))