function coinChange(coins:number[], amount:number):number{
    //make table for bottom up tabulation
    let table:number[] = new Array(amount+1).fill(Infinity)
    //at amount 0, no coins can be used
    table[0] = 0
    //loop through coins
    for(let coin of coins){
        //loop through table starting at coin
        for(let i = coin; i <= amount; i++){
            if(i - coin < 0) break;
            if(table[i - coin] !== Infinity) table[i] = Math.min(table[i], 1 + table[i - coin])
        }
    }

    return table[amount] === Infinity ? -1 : table[amount]
};


console.log(coinChange([1,2,5], 11))