module.exports = function check(str, bracketsConfig) {
  let left = [];
  let right = [];
  
  for (let i = 0;  i < bracketsConfig.length; i++) {
    let x = bracketsConfig[i]
    left.push(x[0]);
    right.push(x[1]); 
  }
    let stack = []
  
    for (let i = 0; i < str.length; i++) {
      let ch = str[i]
      if (right.indexOf(ch) > -1) {
        matchingOpeningBracket = left[right.indexOf(ch)]
        if (stack.length == 0 || (stack.pop() != matchingOpeningBracket)) {
          stack.push(ch)
        }
      } else {
        stack.push(ch)
      }
    }
    if (stack.length === 0) {return true}
    else {
    let fin = []
    for (let k = 0; k < stack.length; k++) {
      let d = stack[k]
      if (fin.indexOf(d) > -1) {
        fin.splice(fin.indexOf(d), 1);}
      else { 
        fin.push(d);
      }
    }
     if (fin.length == 0) {return true}
     else {return false}
  }
}
