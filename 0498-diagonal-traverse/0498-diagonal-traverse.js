/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
    let dum = []
    for(let i=0;i<mat.length;i++){
        for(let j=0;j<mat[i].length;j++){
            dum.push(i+j)
        }
    }
    mat = mat.flat(2)
    let tem = 0
    let ans = []
    for(let i=0;i<mat.length;i++){
        if(tem%2){
            for(let j=0;j<=mat.length;j++){
                if(i==dum[j]){
                    ans.push(mat[j])
                }
            }
        } else {
            for(let j=mat.length-1;j>=0;j--){
                if(i==dum[j]){
                    ans.push(mat[j])
                }
            }
        }
        tem++
    }return ans
};