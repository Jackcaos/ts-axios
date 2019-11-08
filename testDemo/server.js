const express = require('express')
const bodyParser = require('body-parser')
// const cookieParser = require('cookie-parser')
// const multipart = require('connect-multiparty')
// const atob = require('atob')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const WebpackConfig = require('./webpack.config')
const path = require('path')

const app = express()
const compiler = webpack(WebpackConfig)

app.use(webpackDevMiddleware(compiler, {
  publicPath: '/__build__/',
  stats: {
    colors: true,
    chunks: false
  }
}))

app.use(webpackHotMiddleware(compiler))

app.use(express.static(__dirname))

app.use(bodyParser.json())
// app.use(bodyParser.text())
app.use(bodyParser.urlencoded({ extended: true }))

const router = express.Router()

app.use(router)

const port = process.env.PORT || 8080
module.exports = app.listen(port, () => {
  console.log(`Server start`)
})

router.get('/easy/get', function(req, res) {
  res.json({
    msg: `hello world`
  })
})

router.get('/urlParams/get',function(req,res) {
    res.json(req.query)
})

router.get('/extend/get',function(req,res) {
    res.json({msg: 'hello extend'})
})

router.get('/interceptor/get',function(req,res){
    res.end('hello interceptor')
})

router.post('/headerTest/post',function(req,res) {
    res.send({a:1})
})

router.post('/extend/post',function(req,res) {
    res.send({a:1})
})

router.get('/error/get',function (req,res) {
    res.status(500)
    res.json("请求失败")
    res.end()
})