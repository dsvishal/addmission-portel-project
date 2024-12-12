const express = require('express')
const app = express()
const port = 3000
const web = require('./routing/web')
const connectDb = require('./db/connectDb')
var cookieParser = require('cookie-parser')
app.use(cookieParser())



//images upload
const fileUpload = require('express-fileupload')
//image upload
app.use(fileUpload({
  useTempFiles:true,
  tempFileDir:'/tmp'
}));


//ejs a.ejs  (html css)
app.set('view engine', 'ejs')
//connect Dbpii-[]
connectDb()

//css image link
app.use(express.static('public'))

//parse application/x-www-form-urlencoded     
app.use(express.urlencoded({ extended: false }))

//connect flash and sessions
const session = require('express-session')
const flash = require('connect-flash');
//messages
app.use(session({
    secret: 'secret',
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: false,
  }));
//Flash messages
app.use(flash());



//localhost:3000  (router load)
app.use('/',web)


//Server Run
app.listen(port,console.log("server start localhost:3000"))