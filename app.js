const readline = require('readline');
const fs = require('fs')  //fs meaning file system module
const http = require('http');
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
/*fs.readFile('./Files/start.txt', 'utf-8', (error1, data1)=>{
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
console.log('Reading File .............');*/

/*LECTURE 8: CODE EXAMPLE ***********************
CREATING A SIMPLE WEB SERVER
*********************************************/
const html = fs.readFileSync('./Template/index.html', 'utf-8')
let products = JSON.parse(fs.readFileSync('./Data/products.json', 'utf-8'))
// STEP 1: CREATE A SERVER
const server = http.createServer((request, response)=>{
  let path = request.url;

  if (path === '/'|| path.toLocaleLowerCase()=== '/home'){
    response.writeHead(200, {
      'Content-Type': 'text/html',
      'my-header' : 'hello world'
    });
    response.end(html.replace('{{%CONTENT%}}', 'You are in Home page'))
  } else if (path.toLocaleLowerCase() === '/about') {
    response.writeHead(200, {
      'Content-Type': 'text/html',
      'my-header' : 'hello world'
    });
    response.end(html.replace('{{%CONTENT%}}', 'You are in About page'))
  } else if (path.toLowerCase()=== '/contact'){
    response.writeHead(200, {
      'Content-Type': 'text/html',
      'my-header' : 'hello world'
    });
    response.end(html.replace('{{%CONTENT%}}', 'You are in Contact page'));
  } else if (path.toLocaleLowerCase()==='/products'){
    response.writeHead(200, {   'Content-Type': 'application/json',  });  
    response.end('You are in products page') 
    console.log(products);
     
  } 
  else {
    response.writeHead(404, {
      'Content-Type': 'text/html',
      'my-header' : 'hello world'
    });
    response.end(html.replace('{{%CONTENT%}}', 'PAGE NOT FOUND, ERROR 404'))
  }
  
  
})

//STEP 2: START THE SERVER
server.listen(8000, '127.0.0.1', ()=>{
  console.log('Server has started!');
  
})



