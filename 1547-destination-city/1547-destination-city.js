/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    let t=paths[0][1]
    for(let i=1;i<paths.length;i++){
        for(let j=1;j<paths.length;j++){
            if(t==paths[j][0]){
                t=paths[j][1]
            }
        }
    }
    return t
};