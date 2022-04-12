const fs=require('fs');
const path=require('path');

const absolute=path.resolve(__dirname,'test_purpose','subfolder','helloworld.txt');


const absolute1=path.resolve(__dirname,'test_purpose','subfolder','hellonode.txt');


const world=fs.readFileSync(absolute,'utf-8');
const node=fs.readFileSync(absolute1,'utf-8');

fs.writeFileSync('./test_purpose/result.txt',`${world} it help to acheive goal and ${node}`);