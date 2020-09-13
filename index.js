const http = require('http')
const fs = require('fs');

const port = 3000

const server= http.createServer(function(request,response){
    response.writeHead(200,{'content-Type':'text/html'});

    fs.readFile('index.html',function(error,data){
        if(error){
            response.writeHead(404)
            var errorcode = "400"
            response.write(errorcode)
            response.end()
        }
        else{
            response.write(data)
            response.end()
        }
        
        
    });
    
});


server.listen(port,function(error){
    if(error){
        console.log('Something went wrong',error)
    }else{
        //console.log('server started on port',port)
        console.log(`Server started on port ${port} ....`)
    }
});

