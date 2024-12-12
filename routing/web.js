const express = require('express')
const FrontController = require('../controllers/FrontController')
const AdminController = require('../controllers/admin/AdminController')
const route = express.Router()
const checkAuth = require('../middleware/auth')
const CourseController = require('../controllers/CourseController')
const ContectContoller = require('../controllers/ContectController')
const adminrole = require('../middleware/admin_role')
const isLogin = require('../middleware/is_login')

//Routing...

route.get('/home', checkAuth, FrontController.home)  //path
route.get('/about', checkAuth, FrontController.about)
route.get('/', isLogin, FrontController.login)
route.get('/register', FrontController.register)
route.get('/contect', checkAuth, FrontController.contect)

//insert Data
route.post('/insertStudent', FrontController.studentInsert)
//verifyLogin
route.post('/verifyLogin', FrontController.verifyLogin)
route.get('/logout', FrontController.logout)
route.get('/profile', checkAuth, FrontController.profile)
route.post('/changePassword', checkAuth, FrontController.changePassword)
route.post('/updateProfile', checkAuth, FrontController.updateProfile)



// AdminController
route.get('/admin/dashboard', checkAuth, adminrole('admin'), AdminController.dashboard)
route.get('/admin/studentDisplay', checkAuth, adminrole('admin'), AdminController.studentDisplay)
route.get('/admin/studentView/:id', checkAuth, adminrole('admin'), AdminController.studentView)
route.get('/admin/studentDelete/:id', checkAuth, adminrole('admin'), AdminController.studentDelete)
route.get('/admin/studentEdit/:id', checkAuth, adminrole('admin'), AdminController.studentEdit)
route.post('/admin/studentUpdate/:id', checkAuth, adminrole('admin'), AdminController.studentUpdate)
route.post('/admin/insertStudent/', checkAuth, adminrole('admin'), AdminController.studentInsert)
route.get('/admin/courseDisplay', checkAuth, adminrole('admin'), AdminController.courseDisplay)
route.post('/update_status/:id', checkAuth, adminrole('admin'), AdminController.update_status)

//CourseController Method
route.post('/course_insert', checkAuth, CourseController.courseinsert)
route.get('/coursedisplay', checkAuth, CourseController.coursedisplay)
route.get("/courseView/:id", checkAuth, CourseController.courseView)
route.get("/courseEdit/:id", checkAuth, CourseController.courseEdit)
route.post("/courseUpdate/:id", checkAuth, CourseController.courseUpdate)
route.get("/courseDelete/:id", checkAuth, CourseController.courseDelete)

// contactcontoller
route.post('/contect_insert', checkAuth, ContectContoller.contectinsert)
// route.get('/admin/contectdisplay', checkAuth, AdminController.contectdisplay)

// forget password
route.post('/forgot_Password', FrontController.forgetPasswordVerify)
route.get('/reset-password', FrontController.reset_Password)
route.post('/reset_Password1', FrontController.reset_Password1)

// verify mail
route.get('/verify', FrontController.verifyMail)

module.exports = route