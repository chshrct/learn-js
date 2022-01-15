'use strict'

function powAb(a,b) {
  return (b==1)?a:a*powAb(a,b-1)
}
console.log(powAb(2,3));