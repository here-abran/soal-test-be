function bracket(bracket){
  var stack = []
  for(i=0;i<bracket.length;i++){
    // Buka
    if(bracket[i]=='[' || bracket[i]=='(' || bracket[i]=='{'){
      // Naikin level
      stack.push(bracket[i])
    }
    // Nutup
    else {
      //  Cek level
      if(stack[stack.length-1]=='('){
        if(bracket[i]==')'){
          stack.pop()
        }else{
          break;
        }
      }
      else if(stack[stack.length-1]=='['){
        if(bracket[i]==']'){
          stack.pop()
        }else{
          break;
        }
      }
      else if(stack[stack.length-1]=='{'){
        if(bracket[i]=='}'){
          stack.pop()
        }else{
          break;
        }
      }
    }
  }
  if(stack.length==0){
    console.log("YES")
  }else{
    console.log("NO")
  }
}

bracket("{(([])[])[]}")

