console.log("Alok is the best");

const fs = require("fs");
fs.writeFile("output.txt", "writing File", (err) => {
  if (err) throw err;
  else console.log("File written successfully");
});
