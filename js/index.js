function rot13(str) {

  let alphArr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  let rot13 = makeRot13(alphArr);
  
  function makeRot13(alphArr){
    let newArr = [...alphArr];
    
    for (let i =0;i<13;i++){
      newArr.push(newArr.shift())
    }
    return newArr
  }
  
    return str.split('').map(
      el=>{
        if(alphArr.indexOf(el)>=0){
          return rot13[alphArr.indexOf(el)]
        }else{
          return el
        }      
      }     
    )
    .join('')
  }
  
  rot13("SERR PBQR PNZC");