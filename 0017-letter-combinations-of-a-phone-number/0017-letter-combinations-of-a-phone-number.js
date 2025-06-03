/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    obj = {
        "2":["a","b","c"],
        "3":["d","e","f"],
        "4":["g","h","i"],
        "5":["j","k","l"],
        "6":["m","n","o"],
        "7":["p","q","r","s"],
        "8":["t","u","v"],
        "9":["w","x","y","z"]
    }
    switch(digits.length){
        case 0:{
            return []
        }
        case 1:{
            return obj[digits]
        }
        case 2:{
            let ans = []
            for(let i=0;i<obj[digits[0]].length;i++){
                let tem = obj[digits[0]][i]
                for(let j=0;j<obj[digits[1]].length;j++){
                    ans.push(obj[digits[0]][i]+obj[digits[1]][j])
                }
            }
            return ans
        }
        case 3:{
            let ans = []
            for(let i=0;i<obj[digits[0]].length;i++){
                let tem = obj[digits[0]][i]
                for(let j=0;j<obj[digits[1]].length;j++){
                    for(let k=0;k<obj[digits[2]].length;k++){
                        ans.push(obj[digits[0]][i]+obj[digits[1]][j]+obj[digits[2]][k])
                    }
                }
            }
            return ans
        }
        case 4:{
            let ans = []
            for(let i=0;i<obj[digits[0]].length;i++){
                let tem = obj[digits[0]][i]
                for(let j=0;j<obj[digits[1]].length;j++){
                    for(let k=0;k<obj[digits[2]].length;k++){
                        for(let l=0;l<obj[digits[3]].length;l++){
                            ans.push(obj[digits[0]][i]+obj[digits[1]][j]+obj[digits[2]][k]+obj[digits[3]][l])
                        }
                    }
                }
            }
            return ans
        }
    }
};