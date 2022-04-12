const fs=require('fs');
const path=require('path');

const absolute=path.resolve(__dirname,'test_purpose','subfolder','helloworld.txt');


const absolute1=path.resolve(__dirname,'test_purpose','subfolder','hellonode.txt');


fs.readFile(absolute,'utf-8',(err,res)=>{
    if(err){
        return;
    }
    for(let i=0;i<10;i++){
        console.log(`${i}hello read1`);
    }
    const result1=res;
   fs.readFile(absolute1,'utf-8',(err,res1)=>{
    if(err){
        return;
    }
    for(let i=0;i<10;i++){
        console.log(`${i}hello read2`);
    }
       const result2=res1;
       fs.writeFile('./test_purpose/result_async.txt',`${result1} ...... ${result2}`,(err,res)=>{
           if(err){
               return;
           }
           for(let i=0;i<10;i++){
               console.log(`${i}hello write`);
           }
       });
       for(let i=0;i<10;i++){
        console.log(`${i}hello after write`);
    }
   })
   for(let i=0;i<10;i++){
    console.log(`${i}hello  after read2`);
}
})
for(let i=0;i<10;i++){
    console.log(`${i}hello  after read1`);
}

