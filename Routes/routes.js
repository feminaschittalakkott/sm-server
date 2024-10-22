const express = require('express')
const studentController = require('../Controllers/studentController')
const subjectController = require('../Controllers/subjectController')

const routes = express.Router()

routes.post('/addstud', studentController.addStudent)
routes.get('/getstud', studentController.getStudents)
routes.put('/editstud/:id', studentController.updateStudent)
routes.delete('/deletestud/:id', studentController.deleteStudent)
routes.post('/addsub', subjectController.addSubject)
routes.get('/getsub', subjectController.getSubjects)

module.exports = routes