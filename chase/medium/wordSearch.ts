function exist(board: string[][], word: string): boolean {
    let rows = board.length
    let cols = board[0].length


    function dfs(r:number, c:number, i:number):boolean{
        let found:boolean = false
        if(i === word.length) return true

        if(r < 0 || r >= rows || c < 0 || c >= cols 
            || board[r][c] != word[i] || board[r][c] === '*') return false

        
        let char = board[r][c]
        board[r][c] = '*'

        found = dfs(r+1, c, i+1) ||
                dfs(r-1, c, i+1) ||
                dfs(r, c+1, i+1) ||
                dfs(r, c-1, i+1)

        board[r][c] = char
        
        return found
    }

    let index = 0
    let bool = false
    for(let row in board)
        for(let col in board[row]){
            if(word === board[row][col]) return true
            bool = dfs(parseInt(row), parseInt(col), 0)
            if(bool)
                return true
        }

    return bool
};

let b:string[][] = [["A","B","C","E"],
                    ["S","F","C","S"],
                    ["A","D","E","E"]]

console.log(exist(b,"ABCCED"))