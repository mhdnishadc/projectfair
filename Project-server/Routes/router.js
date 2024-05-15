const express = require('express')
const userController = require('../Controller/userController')
const projectController = require('../Controller/projectController')
const jwtMiddleware = require('../Middlewares/jwtMiddleware')
const multerConfig = require('../Middlewares/multerMiddleware')

 
const router = new express.Router()

// register

router.post('/register',userController.register)
// login
router.post('/login',userController.login)
// add project
router.post("/add-project",jwtMiddleware,multerConfig.single('projectImage'),projectController.addProject)
// getallprojects
router.get('/all-projects',jwtMiddleware,projectController.getAllProjects)
//getuserprojects
router.get('/user-projects',jwtMiddleware,projectController.getUserProjects)
//gethomeprojects
router.get('/home-projects',projectController.getHomeProjects)
// edit projects
router.put('/edit-projects/:pid',jwtMiddleware,multerConfig.single('projectImage'),projectController.editProjects)
// remove projects
router.delete('/remove-projects/:pid',jwtMiddleware,projectController.removeProjects)
// edit user
router.put('/edit-user',jwtMiddleware,multerConfig.single("profileImage"),userController.editUser)

// export router
module.exports = router