//write,read,writeFileSync,readFileSync,append
const fs = require('fs');

const data = 'This is my First Node File add readfile concept ,add file sync concept ';

//write file
fs.writeFile('FirstFile.txt',data,(err)=>{
   // if(err) throw err;
   // console.log('File has Been Written')
   if(err){
        console.log('Error Written File' , err);
     return;
   }
   else{
        console.log('File has Been Written')
   }
});

//read file
fs.readFile('FirstFile.txt','utf8',(err,data)=>{
    if(err){
        console.log('Error Reading FIle :',err);
    }
    console.log('file Content : ',data);
});

//write sync
fs.writeFileSync('FirstFile.txt',data);
console.log('File has Been Written');


//read sync
fs.readFileSync('FirstFile.txt','utf8',data);
console.log('file Content : ',data);

//append 

fs.appendFile('FirstFile.txt','\This is an appended text.',(err)=>{
    if(err){
        console.log('Error append this file :',err);
        return
    }
    console.log('Data has been append this file.')
});