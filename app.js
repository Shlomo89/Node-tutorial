const http = require('http');


const server = http.createServer( (req,res) =>{

    res.setHeader('Content-Type','text/html');
    res.write("<html>")
    res.write('<head> <title> My first Node </title> </head> ')
    res.write('<body> <h1> Hello World </h1></body>')
    res.write('</html>')
    res.end()    
    
});

server.listen(3303, () => console.log('I have guest')
)

