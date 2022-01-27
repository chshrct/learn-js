function convertToRoman(num) {

  let romanian = '';
  let numArr = num.toString().split('').map(
    el=>+el
  )

function makeRomanianFromBasis(number,base){
  // data
  // matrix of romanian basis
  let bas = [
    ['I','V'], //1,5
    ['X','L'], //10,50
    ['C','D'], //100,500
    ['M','V"'] //1000,5000
  ];

  switch (number) {
    case 0:
      return ''
    case 1:
      return bas[base][0]
    case 2:
      return bas[base][0]+bas[base][0]
    case 3:
      return bas[base][0]+bas[base][0]+bas[base][0]
    case 4:
      return bas[base][0]+bas[base][1]
    case 5:
      return bas[base][1]
    case 6:
      return bas[base][1]+bas[base][0]
    case 7:
      return bas[base][1]+bas[base][0]+bas[base][0]
    case 8:
      return bas[base][1]+bas[base][0]+bas[base][0]+bas[base][0]
    case 9:
      return bas[base][0] + bas[base+1][0]

    default:
      break;
  }
}


for(let i = 0; i<numArr.length;i++){

romanian += makeRomanianFromBasis(numArr[i],numArr.length-i-1)

};
 return romanian;
}

convertToRoman(36);