// express
// not default node library
const express = require('express');

// creating hospital
const app = express();

function calculateSum(n) {
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    ans = ans + i;
  }
  return ans;
}

// functionality of the doctor
app.get('/', function (req, res) {
  const n = req.query.n; // query parameter => giving i/p
  const ans = calculateSum(n);
  res.send(ans.toString())
});

app.listen(3000);  // address of the clinic