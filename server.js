//사용할 모듈들을 require로 불러내 사용할 수 있게 해준다.
const http = require('http');
const url = require('url');
const fs = require('fs');

//http모듈에 포함된 createServer함수를 이용하여 서버를 만들어준다.
const server = http.createServer((request, response)=>{
    const parsedUrl = url.parse(request.url);
    //만약 Url의 querystring이 /index.html이라면 index.html을 콜백해준다.
    if(parsedUrl.query == 'index.html'){
        response.writeHead(200,{'Content-Type':'text/html'});
        fs.readFile(`./${parsedUrl.query}`, 'utf8',(err,data)=>{
            
            response.end(data);
            });
    //index.html이외의 query를 가지고 있다면, 오류페이지를 띄워준다.
    }else{
            response.writeHead(404,{'Content-Type':'text/html'});
            response.end("404 Page Not Found");
    }
    
});
//listen(PORT, function)으로 서버를 실행시켜준다.
server.listen(80,()=>{
    console.log("Server_running..");
}) 
