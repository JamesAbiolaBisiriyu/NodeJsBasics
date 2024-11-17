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
/*let textIn = fs.readFileSync('./Files/input.txt', 'utf-8');
console.log(textIn);

let content = `Data read from input.txt: ${textIn}. \ndate created ${new Date()}`
fs.writeFileSync('./Files/output.txt', content)*/

/*LECTURE 7: CODE EXAMPLE *****************
READING & WRITING TO FILES ASYNCHRONOUSLY
**********************************************/
fs.readFile('./Files/start.txt', 'utf-8', (error1, data1)=>{
  console.log(data1);  
  fs.readFile(`./Files/${data1}.txt`, 'utf-8', (error2, data2)=> {
    console.log(data2);
    fs.readFile('./Files/append.txt', 'utf-8', (error3, data3)=> {
      console.log(data3);
      fs.writeFile('./Files/output.txt', `${data2}\n\n${data3}\n\ndate created ${new Date()}`, ()=>{
        console.log('file written Successfully')
      });
      
    })
    
  })
})
console.log('Reading File .............');




