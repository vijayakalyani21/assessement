const http=require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'txt/html'});
    res.end("Hello,World!");
}).listen(2002);