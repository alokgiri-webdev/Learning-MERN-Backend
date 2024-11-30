const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Complete Coding</title></head>");
    res.write("<body><h1>Enter your Details:</h1>");
    res.write("<form action='/submit-details' method='POST'>");
    res.write(
      "<input type='text' name='username' placeholder='Enter your name'>"
    );
    res.write("<label for='gender'>Gender:</label>");
    res.write("<label for='male'>Male</label>");
    res.write("<input type='radio' id='male' name='gender' value='Male'/>");
    res.write("<label for='female>Female</label>");
    res.write("<input type='radio' id='female' name='gender' value='Female'/>");
    res.write("<button type='submit'>Submit</button>");
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (
    req.url.toLowerCase() === "/submit-details" &&
    req.method === "POST"
  ) {
    fs.writeFileSync("user.txt", "Alok Kumar Giri");
    res.statusCode = 302;
    res.setHeader("Location", "/");
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Complete Coding</title></head>");
  res.write("<body><h1>Hello World</h1></body>");
  res.write("</html>");
  return res.end();
  //process.exit();
});

const PORT = 3000;

server.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
