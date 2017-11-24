const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use(morgan('combined'))
app.use(cors())

//app.set('view engine', 'ejs')


app.get('/status', function(req, res){
  res.send({
    message: "hello world"
  })
});

// const  = require('./routes/')
// app.use('/', )

app.listen(process.env.PORT||8081);
