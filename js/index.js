function solution(roman){
    // complete the solution by transforming the 
    // string roman numeral into an integer  
    
    const romanValue = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000,
    };

    let result = roman.split('').reduce(
        (sum,el,index)=>{
            if(romanValue[el]>=romanValue[roman.split('')[index+1]] || !(romanValue[roman.split('')[index+1]])){
                return sum+romanValue[el]
            }else{
                return sum-romanValue[el]
            }
        },0
    )
    
    return result
    
    
  }

solution('XXI'); 