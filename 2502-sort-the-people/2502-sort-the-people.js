/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    for(let i=1;i<heights.length;i++){
        let curr = heights[i]
        let tem = names[i]
        let j = i-1
        while(j>=0 && curr>heights[j]){
            heights[j+1] = heights[j]
            names[j+1] = names[j--]
        }
        heights[j+1] = curr
        names[j+1] = tem
    }
    return names
};