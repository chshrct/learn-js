function palindrome(str) {
    let newStr= str.split(/\W|_/)
        .filter(el=>!(el==''))
        .join('').toLowerCase();
    
    if(newStr===newStr.split('').reverse().join('')){
      return true
    }else{
      return false
    }
    }
    
    palindrome("My age is 0, 0 si ega ym.");