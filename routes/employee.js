let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to model
let Employee = require('../models/Employee');

router.get('/', (req, res, next) => {
    Employee.find((err, employeeList) => {
        if(err){
            return console.error(err);
        }else{
            res.render('employee/list', {title: 'Employee Info', EmployeeList: employeeList})
        }
    });
});

router.get('/add', (req, res, next) => {
    res.render('employee/add', {title: 'Add Employee'})
});

router.post('/add', (req, res, next) => {
    let newEmployee = Employee({
        "id": req.body.eid,
        "name": req.body.ename,
        "address": req.body.eaddress,
        "contactNumber": req.body.econtactNumber
    });

    Employee.create(newEmployee, (err, Employee) => {
        if(err){
            console.log(err);
            res.end(err);
        }else{
            res.redirect('/employees')
        }
    });
});

router.get('/edit/:id', (req, res, next) => {
    let id = req.params.id;

    Employee.findById(id, (err, employeeToEdit) => {
        if(err){
            console.log(err);
            res.end(err);
        }else{
            res.render('employee/edit', { title : 'Edit Employee', employee: employeeToEdit})
        }
    });
});

router.post('/edit/:id', (req, res, next) => {
    let id = req.params.id;

    let updatedEmployee = Employee({
        "_id": id,
        "id": req.body.eid,
        "name": req.body.ename,
        "address": req.body.eaddress,
        "contactNumber": req.body.econtactNumber
    });

    Employee.updateOne({_id: id}, updatedEmployee, (err) => {
        if(err){
            console.log(err);
            res.end(err);
        }else{
            res.redirect('/employees');
        }
    });
});

router.get('/delete/:id', (req, res, next) => {
    let id = req.params.id;

    Employee.remove({_id: id}, (err) => {
        if(err){
            console.log(err);
            res.end(err);
        }else{
            res.redirect('/employees');
        }
    });
});

module.exports = router;
