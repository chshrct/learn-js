'use strict'

let company = {
  sales: [{
    name: 'John',
    salary: 1000
  }, {
    name: 'Alice',
    salary: 600
  }],

  development: {
    sites: [{
      name: 'Peter',
      salary: 2000
    }, {
      name: 'Alex',
      salary: 1800
    }],

    internals: [{
      name: 'Jack',
      salary: 1300
    }]
  }
};


function salaries(params) {
  let sumSal = 0;
  if(Array.isArray(params)){

    return params.reduce(
      (sum,curr)=>sum+curr.salary
      ,0
    )
  }else{
    let sum = 0;
    for (let arr of Object.values(params) ){
      sum += salaries(arr)
    }
    return sum
  }
}

console.log(salaries(company)); 