let express = require('express')
let superagent = require('superagent')
let bodyParser = require('body-parser')
let app = express()

let urlPrefix = 'https://maicai.api.ddxq.mobi'
let query = {
  'api_version': '8.3.0',
  'app_client_id': 3,
  'station_id': '58c4cdaa936edffe313e00fe'
}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

app.get('/home', function (req, res) {
  let latitude = req.query.latitude
  let longitude = req.query.longitude
  let sreq
  query = Object.assign({}, query, { latitude, longitude })
  sreq = superagent
    .get(`${urlPrefix}/homeApi/details`)
    .query(query)
    .end((err, sres) => {
      if (err) {
        res.send({
          success: false,
          code: err.status,
          msg: err.response,
          data: null
        })
      } else {
        res.send(sres.body)
      }
    })
})

app.get('/detail', function (req, res) {
  let latitude = req.query.latitude
  let longitude = req.query.longitude
  let id = req.query.productId
  let sreq
  query = Object.assign({}, query, { id, latitude, longitude })
  sreq = superagent
    .get(`${urlPrefix}/productApi/productDetail`)
    .query(query)
    .end((err, sres) => {
      if (err) {
        res.send({
          success: false,
          code: err.status,
          msg: err.response,
          data: null
        })
      } else {
        res.send(sres.body)
      }
    })
})

app.get('/categories', function (req, res) {
  let latitude = req.query.latitude
  let longitude = req.query.longitude
  let sreq
  query = Object.assign({}, query, { latitude, longitude })
  sreq = superagent
    .get(`${urlPrefix}/homeApi/categories`)
    .query(query)
    .end((err, sres) => {
      if (err) {
        res.send({
          success: false,
          code: err.status,
          msg: err.response,
          data: null
        })
      } else {
        res.send(sres.body)
      }
    })
})

app.get('/categoryDetail', function (req, res) {
  let latitude = req.query.latitude
  let longitude = req.query.longitude
  let category_id = req.query.categoryId
  let sreq
  query = Object.assign({}, query, { category_id, latitude, longitude })
  sreq = superagent
    .get(`${urlPrefix}/homeApi/categoriesdetail`)
    .query(query)
    .end((err, sres) => {
      if (err) {
        res.send({
          success: false,
          code: err.status,
          msg: err.response,
          data: null
        })
      } else {
        res.send(sres.body)
      }
    })
})

app.get('/search', function (req, res) {
  let latitude = req.query.latitude
  let longitude = req.query.longitude
  let keyword = req.query.keyword
  let count = req.query.pageSize
  let page = req.query.page
  let sreq
  query = Object.assign({}, query, { keyword, count, page, latitude, longitude })
  sreq = superagent
    .get(`${urlPrefix}/search/SearchSuggest`)
    .query(query)
    .end((err, sres) => {
      if (err) {
        res.send({
          success: false,
          code: err.status,
          msg: err.response,
          data: null
        })
      } else {
        res.send(sres.body)
      }
    })
})

app.get('/location', function (req, res) {
  let lat = req.query.latitude
  let lng = req.query.longitude
  let channel = 'ali'
  let api_version = '8.3.1'
  let sreq
  sreq = superagent
    .get(`https://ddxq.mobi/api/v1/user/location/around/`)
    .query({
      lat,
      lng,
      api_version,
      channel
    })
    .end((err, sres) => {
      if (err) {
        res.send({
          success: false,
          code: err.status,
          msg: err.response,
          data: null
        })
      } else {
        res.send(sres.body)
      }
    })
})

app.get('/searchLocation', function (req, res) {
  let latitude = req.query.latitude
  let longitude = req.query.longitude
  let keyword = req.query.keyword
  let sreq
  query = Object.assign({}, query, { keyword, latitude, longitude })
  sreq = superagent
    .get(`https://ddxq.mobi/api/v1/user/location/search/`)
    .query(query)
    .end((err, sres) => {
      if (err) {
        res.send({
          success: false,
          code: err.status,
          msg: err.response,
          data: null
        })
      } else {
        res.send(sres.body)
      }
    })
})

app.get('/allOrder', function (req, res) {
  let page = req.query.page
  let sreq
  query = Object.assign({}, query, { page })
  sreq = superagent
    .get(`${urlPrefix}/order/list`)
    .query(query)
    .end((err, sres) => {
      if (err) {
        res.send({
          success: false,
          code: err.status,
          msg: err.response,
          data: null
        })
      } else {
        res.send(sres.body)
      }
    })
})

app.get('/waitPay', function (req, res) {
  let page = req.query.page
  let sreq
  query = Object.assign({}, query, { page })
  sreq = superagent
    .get(`${urlPrefix}/order/NotPayList`)
    .query(query)
    .end((err, sres) => {
      if (err) {
        res.send({
          success: false,
          code: err.status,
          msg: err.response,
          data: null
        })
      } else {
        res.send(sres.body)
      }
    })
})

app.get('/waitRecieve', function (req, res) {
  let page = req.query.page
  let sreq
  query = Object.assign({}, query, { page })
  sreq = superagent
    .get(`${urlPrefix}/order/DoingList`)
    .query(query)
    .end((err, sres) => {
      if (err) {
        res.send({
          success: false,
          code: err.status,
          msg: err.response,
          data: null
        })
      } else {
        res.send(sres.body)
      }
    })
})

app.get('/waitComment', function (req, res) {
  let page = req.query.page
  let sreq
  query = Object.assign({}, query, { page })
  sreq = superagent
    .get(`${urlPrefix}/order/EvaluateList`)
    .query(query)
    .end((err, sres) => {
      if (err) {
        res.send({
          success: false,
          code: err.status,
          msg: err.response,
          data: null
        })
      } else {
        res.send(sres.body)
      }
    })
})

app.listen(3000, function () {
  console.log('app listening on port 3000!')
})
