var Mocha = require('mocha')
var chai = require('chai')
var assert = chai.assert;
var mocha = new Mocha()

// Bit of a hack, sorry!
mocha.suite.emit('pre-require', this, 'solution', mocha)

/* 
The world is in quarantine! Corona virus struggles mankind. 
Each continent got isolated from each other but infected people have spread before the warning.

- The virus can't spread in the other side of the ocean.
- If one person is infected every person in this continent gets infected too.
- Your task is to find the percentage of human population that got infected in the end.
- The first and the last continent are not connected.
- For maps without oceans "X" the whole world is connected.
- For maps without "0" and "1" return 0 as there is no population.

Example:

start: map1 = "01000000X000X011X0X"
end:   map1 = "11111111X000X111X0X"
total = 15
infected = 11
percentage = 100*11/15 = 73.33333333333333
*/

/*
@param {string} mapOfWorld - where 0's are uninfected ppl, 1's are infected ppls and X's represent ocean bodies.
@returns {float} percentage of the total population that got infected.
*/


function infected(mapOfWorld) {
  let population = 0;
  let infectedPeople =0;
  let infected = false;
  let char="";
  let contX=0;
  let contInfected=0;
  let contHealthy=0;
  let TempPopulation=0;
  //let percentage;

  for (let i=0;i<=mapOfWorld.length;i++){
    char=mapOfWorld.charAt(i);
    
    if(char=='1'){
      infected=true;
      contInfected++;
    }else if(char=='0'){
       contHealthy++;
    }

    if(char=='X'){
      contX++;
      if(infected){
        infectedPeople=infectedPeople+TempPopulation;
        TempPopulation=0;
        infected=false;
      }else{
        TempPopulation=0;
      }
    }else{
      TempPopulation++;
    }
  
    if(i==mapOfWorld.length && infected){
      infectedPeople=infectedPeople+TempPopulation-1;
  }
  }

  if(contX==0){
    if(infected){
      //console.log(TempPopulation);
      infectedPeople=TempPopulation-1;
     
    }
  }
  
   
  
  population=contHealthy+contInfected;
  /*console.log(mapOfWorld);
  console.log(population);
  console.log(infectedPeople);
  console.log(contX);*/
  
  if(population!=0){
    return ((100*infectedPeople)/population);
  }else{
    return 0;
  }
  
 
}


/* DO NOT MODIFY BELOW THIS LINE */

const EPSILON = 0.000001;

describe("Pandemia",()=>{
  it("example tests",()=>{
    assert.approximately( infected("01000000X000X011X0X"), 73.33333333333333, EPSILON );
    assert.approximately( infected("01X000X010X011XX"), 72.72727272727273, EPSILON );
    assert.approximately( infected("XXXXX"), 0, EPSILON );
    assert.approximately( infected("0000000010"), 100, EPSILON );
    assert.approximately( infected("X00X000000X10X0100"), 42.857142857142854, EPSILON );
    
  });
});

mocha.run()