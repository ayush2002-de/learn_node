const l=require('lodash');
const item=[1,[2,3,[4,5,[8,9]]]];
const newval=l.flattenDeep(item);
console.log(newval);