let http = require('http'),
    fs = require('fs'),
    path = require('path')

let server = http.createServer((req, res) => {
    // DO NOT DO THIS
    // const fileContents = fs.readFileSync(path.join(__dirname, 'index.html'), { encoding : 'utf-8'})
    console.log(req.url)
    switch (req.url) {
        case "/":
            fs.readFile(path.join(__dirname, 'index.html'), { encoding: 'utf-8' }, (err, fileContents) => {
                res.write(fileContents);
                res.end()
            })
            break;
        case "/products":
            res.write("All products requests will be served")
            res.end()
            break;
        case "/customers":
            res.write("All customers requests will be served")
            res.end()
            break;
        default:
            res.writeHead(404, "Resource not found!")
            res.end()
            break;
    }
    
    
})
server.listen(8080)
