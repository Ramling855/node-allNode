const http =require('http');
const server=http.createServer((req,res)=>{
res.end('hii Ramling');
}); 
server.listen(8000,'127.0.0.1',()=>{
  console.log('listen all')
});

// for runn this command line put downnnnnnnnnnnn

//node ./http/http.js