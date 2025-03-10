/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let count = 0

    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[i].length;j++){
            if(grid[i][j]){
                count+=4
            }
            if(i!=0 && grid[i-1][j] && grid[i][j]){
                count-=2
            }
            if(j!=0 && grid[i][j-1] && grid[i][j]){
                count-=2
            }
        }
    }
    return count
};