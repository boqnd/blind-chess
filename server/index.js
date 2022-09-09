const jsChessEngine = require('js-chess-engine')
const game = new jsChessEngine.Game()
const express = require('express')
const app = express()
const port = 4000

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => res.send('Hello World!'))


app.get('/isValid', (req, res) => {
  console.log(req.query)
  res.send(true);
})


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))