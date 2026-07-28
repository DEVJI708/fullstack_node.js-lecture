//console.log("First File...");

const http = require('node:http');  //handle request , response

http.createServer((request,response)=>{
    response.writeHead(200,{'content-type' :'text/plain'});

    response.write("First node.js Application");
    response.write("HTTP  Module Example");
    response.end("");
    
    console.log("response sent");
}).listen(8081);