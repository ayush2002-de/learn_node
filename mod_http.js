const http=require('http');

const server =http.createServer((req,res)=>{
    if(req.url==='/')
    {
        res.end('welcome to our world');
    }
    if(req.url==='/about'){
        res.end('you know about yourself');
    }
    res.end(
        `
        <h1>oops</h1>
        <p>you are wrong side of page</p>
        <a href='/'> back to home</a>
        `
        );

})
server.listen(5000);