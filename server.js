const http=require('http')

const server=http.createServer((req,res)=>{
    console.log(`request received for ${req.url}`)

    if(req.url==='/'){
        res.end('Welcome to Node Server')
    }else if(req.url==='/about'){
        res.end('About Page')
    }else if(req.url==='/contact'){
        res.end('Contact Page')
    }else{
        res.statusCode=404
        res.end('404 Error: Page Not Found')
    }
})

const PORT=3000

server.listen(PORT,()=>{
    console.log(`server running at http://localhost:${PORT}`)
})


