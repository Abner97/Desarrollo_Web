/* 
Your task is to make a function that can take any non-negative integer as a argument and 
return it with its digits in descending order. 
Essentially, rearrange the digits to create the highest possible number.

Examples:

Input: 21445 Output: 54421
Input: 145263 Output: 654321
Input: 123456789 Output: 987654321
*/

/*
Re-arranges a number to get a bigger number

@param {Number} num - a non-negative integer

@returns {Number} the highest possible number
*/

function descendingOrder(num){
  let arr = num.toString().split("");
  let len = arr.length;
    
      //Bubble sort
      for (var i = 0; i < len ; i++) {
        for(var j = 0 ; j < len - i - 1; j++){ 
        if (arr[j] > arr[j + 1]) {
          // swap
          let temp = arr[j];
          arr[j] = arr[j+1];
          arr[j + 1] = temp;
        }
       }
      }


      
      return parseInt(arr.reverse().join(""));

}

/* DO NOT MODIFY BELOW THIS LINE */
function testEqual(x,y) {
  const isEqual = require('lodash/isEqual');
  if (isEqual(x,y)) {
    console.log('PASSED !!');
  } else {
    console.log(`Expected ‘${JSON.stringify(x)}’ to equal ‘${JSON.stringify(y)}’`);
  }
}

testEqual(descendingOrder(0), 0);
testEqual(descendingOrder(1), 1);
testEqual(descendingOrder(123456789), 987654321);
testEqual(descendingOrder(345654), 655443);
testEqual(descendingOrder(1000009), 9100000);
testEqual(descendingOrder(91025), 95210);