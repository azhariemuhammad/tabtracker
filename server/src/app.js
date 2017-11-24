const express = require('express');
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(morgan('combined'))
app.use(cors())


app.get('/', function(req, res){
  res.send('hello world');
});

app.listen(process.env.PORT||8081);
