module.exports = function check(str, bracketsConfig) {
  let x;
  let y = '';
  for (let i = 0;  i < bracketsConfig.length; i++) {
    x = bracketsConfig[i];
     for (let k = 0; k < x.length; k++) {
       y += x[k]
     }
  }
  if ( y  == str) {
    return true
  }
  else {
    let openingBrackets = ['[', '{', '(']
    let closingBrackets = [']', '}', ')']
    let stack = []
  
    for (let i = 0; i < str.length; i++) {
      let ch = str[i]
      if (closingBrackets.indexOf(ch) > -1) {
        matchingOpeningBracket = openingBrackets[closingBrackets.indexOf(ch)]
        if (stack.length == 0 || (stack.pop() != matchingOpeningBracket)) {
          return false
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
}