const path=require('path');

console.log(path.sep);

const filepath=path.join('/test_purpose','subfolder','test.txt');
console.log(filepath);

const base =path.basename(filepath);
console.log(base);

const absolute=path.resolve(__dirname,'test_purpose','subfolder','test.txt');
console.log(absolute);