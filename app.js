const http = require('http')

const port = 3000

const server= http.createServer(function(request,response){
    response.write('<h1>Hello,All</h1>')
    response.end()
});


server.listen(port,function(error){
    if(error){
        console.log('Something went wrong',error)
    }else{
        //console.log('server started on port',port)
        console.log(`Server started on port ${port}`)
    }
});