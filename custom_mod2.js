const sayHi=(name)=>{
    console.log(`hello ${name} how are you`);
   }
   const conversation=(name)=>{
    console.log(`hello ${name} what are you doing`);
   }
   const var_fun={
       fun1:sayHi,
       fun2:conversation
   }
   module.exports.fun=var_fun;