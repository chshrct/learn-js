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

    params.forEach(element => {
    sumSal += element.salary;

    });
    return sumSal;
    
  }else{
    for (let key in params){
      sumSal+=salaries(params[key])
    }
    return sumSal;
  }
}

console.log(salaries(company)); 