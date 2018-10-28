const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head> <title> My Form </title> </head> ");
    res.write("<body>");
   
    res.write('<form action ="/grisha" method = "POST">');
    res.write(' <input type ="text" name="ssz" >');
    res.write(" <button>add </button>");
    res.write("</form >");
    res.write("</body>");
    res.write("</html>");
    return res.end;
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<body>");
  res.write("<h1> AAA </h2>");
  res.write("</body>");
  res.write("</html>");
  res.end;
});

server.listen(3000, () => {
  console.log("gaga");
});
