const a=26788
for(let i=2;i*i<=a;i++){
    if(a%i!=0){
       console.log(i+`is not factor of${a}`);
    }
}