// CORE MODULES OF NODE-JS
const readline = require('readline');
const fs = require('fs')  //fs meaning file system module
const http = require('http');
const url = require('url'); //used for routing
const replaceHtml = require('./Modules/replaceHtml')
// USER DEFINED MODULES OR CUSTOM MODULES

// THIRD PARTY MODULE

/*LECTURE 8: CODE EXAMPLE ***********************
CREATING A SIMPLE WEB SERVER
*********************************************/
const html = fs.readFileSync('./Template/index.html', 'utf-8');
let products = JSON.parse(fs.readFileSync('./Data/products.json', 'utf-8'));
let productListHtml = fs.readFileSync('./Template/product-list.html', 'utf-8');
let productDetailHtml = fs.readFileSync('./Template/product-details.html', 'utf-8');

// STEP 1: CREATE A SERVER
// const server = http.createServer((request, response)=>{
//   let {query, pathname: path} = url.parse(request.url, true) //passes the query string from URL
//   // console.log(x);
  
//   // let path = request.url;

//   if (path === '/'|| path.toLocaleLowerCase() === '/home'){
//     response.writeHead(200, {
//       'Content-Type': 'text/html',
//       'my-header' : 'hello world'
//     });
//     response.end(html.replace('{{%CONTENT%}}', 'YOU ARE IN HOMEPAGE'))
//   } else if (path.toLocaleLowerCase() === '/about') {
//     response.writeHead(200, {
//       'Content-Type': 'text/html',
//       'my-header' : 'hello world'
//     });
//     response.end(html.replace('{{%CONTENT%}}', 'You are in About page'))
//   } else if (path.toLowerCase()=== '/contact'){
//     response.writeHead(200, {
//       'Content-Type': 'text/html',
//       'my-header' : 'hello world'
//     });
//     response.end(html.replace('{{%CONTENT%}}', 'You are in Contact page'));
//   } 
//   else if (path.toLocaleLowerCase()==='/products'){
//     if (!query.id){      
//       let productHtmlArray = products.map((prod)=>{
//        return replaceHtml(productListHtml, prod)
//       })
//     let productResponseHtml = html.replace('{{%CONTENT%}}', productHtmlArray.join(','));
//     response.writeHead(200, {   'Content-Type': 'text/html'  });  
//     response.end(productResponseHtml)
//     // console.log(productHtmlArray.join(','));
//     }else{
//       let prod = products[query.id]
//       let productDetailResponseHtml = replaceHtml (productDetailHtml, prod )
//       response.end(html.replace('{{%CONTENT%}}', productDetailResponseHtml))
//     }
//   } 
//   else {
//     response.writeHead(404, {
//       'Content-Type': 'text/html',
//       'my-header' : 'hello world'
//     });
//     response.end(html.replace('{{%CONTENT%}}', 'PAGE NOT FOUND, ERROR 404'))
//   } 
// })


const server = http.createServer();

server.on('request', (request, response)=>{
  let {query, pathname: path} = url.parse(request.url, true) //passes the query string from URL
  // console.log(x);
  
  // let path = request.url;

  if (path === '/'|| path.toLocaleLowerCase() === '/home'){
    response.writeHead(200, {
      'Content-Type': 'text/html',
      'my-header' : 'hello world'
    });
    response.end(html.replace('{{%CONTENT%}}', 'YOU ARE IN HOMEPAGE'))
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
  } 
  else if (path.toLocaleLowerCase()==='/products'){
    if (!query.id){      
      let productHtmlArray = products.map((prod)=>{
       return replaceHtml(productListHtml, prod)
      })
    let productResponseHtml = html.replace('{{%CONTENT%}}', productHtmlArray.join(','));
    response.writeHead(200, {   'Content-Type': 'text/html'  });  
    response.end(productResponseHtml)
    // console.log(productHtmlArray.join(','));
    }else{
      let prod = products[query.id]
      let productDetailResponseHtml = replaceHtml (productDetailHtml, prod )
      response.end(html.replace('{{%CONTENT%}}', productDetailResponseHtml))
    }
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



