function correctMistake(line,chartobeReplaced,what) {
    // write code here
    // return the output , do not use console.log here
   const newStr = line.replace(chartobeReplaced, what);
      return newStr;
  
   }
  
   const str = correctMistake("Hi World world", "world", "of coding");
   console.log(str);