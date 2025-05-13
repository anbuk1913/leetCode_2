/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stock = []
    for(let i=0;i<tokens.length;i++){
        if(tokens[i] == "+" || tokens[i] == "-" || tokens[i] == "*" || tokens[i] == "/"){
            let a = stock.pop()
            let b = stock.pop()
            switch (tokens[i]) {
                case "+":{
                    stock.push(a+b)
                    break
                }
                case "-":{
                    stock.push(b-a)
                    break
                }
                case "*":{
                    stock.push(a*b)
                    break
                }
                case "/":{
                    stock.push(Math.trunc(b/a))
                    break
                }
            }
        } else {
            stock.push(Number(tokens[i]))
        }
    }
    return stock[0]
};