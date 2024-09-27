const express = require('express');
const app = express();

function sum(n, m) {
  const ans = n + m;
  return ans;
}

app.get('/', function (req, res) {
  const n = parseInt(req.query.n);
  const m = parseInt(req.query.m);
  const ans = sum(n, m);
  res.send(ans.toString());
});

app.listen(3000);