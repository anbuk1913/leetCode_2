/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let ans = 0;
    const total = grid[0].length*grid.length
    for(let k=0;k<total;k++){
        let tem = false;
        let arr = [];
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                if (grid[i][j] == 2 && !arr.some(subArr => subArr[0] === i && subArr[1] === j)) {
                    // console.log(arr,i,j,"fdfgh")
                    // console.log(arr.some(subArr => subArr[0] === i && subArr[1] === j))
                    if (j != grid[i].length - 1 && grid[i][j + 1] == 1) {
                        // console.log(arr,i,j,"Hello")
                        // console.log(i,j+1)
                        grid[i][j + 1] = 2;
                        arr.push([i, j+1]);
                        tem = true;
                    }
                    if (i != grid.length - 1 && grid[i + 1][j] == 1) {
                        // console.log(i+1,j)
                        grid[i + 1][j] = 2;
                        arr.push([i+1, j]);
                        tem = true;
                    }
                    if (j != 0 && grid[i][j - 1] === 1) {
                        // console.log(i,j-1)
                        grid[i][j - 1] = 2;
                        arr.push([i, j-1]);
                        tem = true;
                    }
                    if (i != 0 && grid[i - 1][j] === 1) {
                        // console.log(i-1,j)
                        grid[i - 1][j] = 2;
                        arr.push([i-1, j]);
                        tem = true;
                    }
                    // console.log(arr,1)
                }
            }
            // console.log(arr,2)
            // console.log(grid)
        } 
        if(tem){
            tem = false
            ans++
        }else {
            for(let l=0;l<grid.length;l++){
                for(let m=0;m<grid[l].length;m++){
                    if(grid[l][m]==1)return -1
                }
            }
            return ans
        }
    }
};