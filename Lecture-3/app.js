const http = require("http");

/* One WAY
function requestListner(req, res) {
  console.log(req);
}

http.createServer(requestListner);
*/

//Other WAY
const server = http.createServer((req, res) => console.log(req));

const PORT = 3000;
server.listen(PORT, () =>
  console.log(`Server running on address http://localhost:${PORT}`)
);
