const sumRequestHandler = (req, res) => {
  console.log("In sum request handler", req.url);
  const body = [];
  req.on("data", (chunk) => {
    console.log(chunk);
    body.push(chunk);
  });
  req.on("end", () => {
    const bodyStr = Buffer.concat(body).toString();
    console.log(bodyStr);
    const params = new URLSearchParams(bodyStr);
    const bodyObj = Object.fromEntries(params);
    console.log(bodyObj);
    const result = Number(bodyObj.first) + Number(bodyObj.second);
    console.log(result);
  });
};

exports.sumRequestHandler = sumRequestHandler;
