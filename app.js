const readline = require('readline');
const fs = require('fs')  //fs meaning file system module
/* LECTURE 4: CODE EXAMPLE
*********************************
READING INPUT & WRITING OUTPUT
************************************************************
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question("please enter your name: ", (name) => {
  console.log("You entered: " + name);
  rl.close();
})


rl.on('close', ()=>{
  console.log('Interface closed! Goodbye!')
  process.exit(0);
})*/

/* LECTURE 5: CODE EXAMPLE***************** 
READING & WRITING TO A FILE
***********************************************/
let textIn = fs.readFileSync('./Files/input.txt', 'utf-8');
console.log(textIn);

let content = `Data read from input.txt: ${textIn}. \ndate created ${new Date()}`
fs.writeFileSync('./Files/output.txt', content)


