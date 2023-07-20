function maxProfit2(prices: number[]): number {
    let left = 0 
    let right = 1
    let maxProfit = 0

    while(right < prices.length){
        if(prices[left] < prices[right])
            maxProfit = Math.max(prices[right] - prices[left], maxProfit)
        else
            left = right
        
        right++
    }
    return maxProfit
};


console.log(maxProfit2([7,1,5,3,6,4]))