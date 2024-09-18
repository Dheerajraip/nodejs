const arthimetic = require("./arthimetic.js");
const fs = require("fs");

const a = 10;
const b = 5;

const sum = arthimetic.add(a, b);
const diff = arthimetic.sub(a, b);
const prod = arthimetic.multiply(a, b);
const quotient = arthimetic.divide(a, b);

const results = `
Sum: ${sum}
Difference: ${diff}
Product: ${prod}
Quotient: ${quotient}
`;

fs.writeFile("results.txt", results, (err) => {
  if (err) {
    console.error("Error Writing to file", err);
  } else {
    console.log("Results written to results.txt");
  }
});

fs.readFile("results.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading from file", err);
  } else {
    console.log("Content of results.txt");
    console.log(data);
  }
});
