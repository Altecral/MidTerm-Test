let mongoose = require('mongoose');

let employeeModel = mongoose.Schema(
    {
        "id": Number,
        "name": String,
        "address": String,
        "contactNumber": String
    },
    {
        collection: "employee"
    }
);

module.exports = mongoose.model('Employee', employeeModel);
