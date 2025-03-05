/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function(grid) {
    let ans = 0
    while(grid[0].length!=0){
        let maxNum = -Infinity
        for(let i=0;i<grid.length;i++){
            let temMaxNum = -Infinity
            let temMaxind = 0
            for(let j=0;j<grid[i].length;j++){
                if(temMaxNum<grid[i][j]){
                    temMaxNum=grid[i][j]
                    temMaxind = j
                }
            }
            if(maxNum<temMaxNum){
                maxNum=temMaxNum
            }
            grid[i].splice(temMaxind,1)
        }
        ans+=maxNum
    }
    return ans
};