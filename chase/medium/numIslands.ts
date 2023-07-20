function numIslands(grid: string[][]): number {
    if(!grid?.length)
        return 0

    let islandCount:number = 0
    let rows = grid.length
    let cols = grid[0].length
    const directions:number[][] = [[1,0],[-1,0],[0,1],[0,-1]]

    function bfs(r:number, c:number){
        let q = [[r,c]]
        while(q.length){
            const [ x, y ] = q.shift()!
            grid[x][y] = '*'
            for(let [i,j] of directions){
                let row = x + i
                let col = y + j
                if((row >= 0 && row < rows) && 
                   (col >= 0 && col < cols) &&
                   (grid[row][col] === '1')){
                        q.push([row,col])
                        grid[row][col] = '*'
                   }
            }
        }
    }

    function dfs(r:number, c:number){
    /*     if(r < 0 || c < 0 || r >= rows || c >= cols ||
           grid[r][c] !== '1')  return
        
           grid[r][c] = '*'

           dfs(r+1,c)
           dfs(r-1,c)
           dfs(r,c+1)
           dfs(r,c-1) */

        let q = [[r,c]]
        while(q.length){
            const [x,y] = q.pop()!
            for(let [i,j] of directions){
                let row = x + i
                let col = y + j
                if((row >= 0 && row < rows) && 
                   (col >= 0 && col < cols) &&
                   (grid[row][col] === '1')){
                    grid[row][col] = '*'
                    q.push([row,col])
                }
            }
        }
    }

    for(let row in grid)
        for(let col in grid[row])
            if(grid[row][col] === '1'){
                dfs(parseInt(row), parseInt(col))
                //bfs(parseInt(row), parseInt(col))
                islandCount++
            }

    return islandCount
};

let Input:string[][] = [["1","1","1","1","1","0","1","1","1","1","1","1","1","1","1","0","1","0","1","1"],
                        ["0","1","1","1","1","1","1","1","1","1","1","1","1","0","1","1","1","1","1","0"],
                        ["1","0","1","1","1","0","0","1","1","0","1","1","1","1","1","1","1","1","1","1"],
                        ["1","1","1","1","0","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"],
                        ["1","0","0","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"],
                        ["1","0","1","1","1","1","1","1","0","1","1","1","0","1","1","1","0","1","1","1"],
                        ["0","1","1","1","1","1","1","1","1","1","1","1","0","1","1","0","1","1","1","1"],
                        ["1","1","1","1","1","1","1","1","1","1","1","1","0","1","1","1","1","0","1","1"],
                        ["1","1","1","1","1","1","1","1","1","1","0","1","1","1","1","1","1","1","1","1"],
                        ["1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"],
                        ["0","1","1","1","1","1","1","1","0","1","1","1","1","1","1","1","1","1","1","1"],
                        ["1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"],
                        ["1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"],
                        ["1","1","1","1","1","0","1","1","1","1","1","1","1","0","1","1","1","1","1","1"],
                        ["1","0","1","1","1","1","1","0","1","1","1","0","1","1","1","1","0","1","1","1"],
                        ["1","1","1","1","1","1","1","1","1","1","1","1","0","1","1","1","1","1","1","0"],
                        ["1","1","1","1","1","1","1","1","1","1","1","1","1","0","1","1","1","1","0","0"],
                        ["1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"],
                        ["1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"],
                        ["1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"]]


let grid:string[][] = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
  ] 
//console.log(numIslands(Input))
console.log(numIslands(grid))
//let mt:string[][] = []
//console.log(numIslands(mt))





