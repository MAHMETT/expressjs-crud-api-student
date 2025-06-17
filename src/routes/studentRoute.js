const express = require('express');
const {
    addData,
    getData,
    getDataByNis,
    getDataById,
    updateData,
    deleteData,
} = require('controller/studentController');
const route = express.Router();

route.post('/addData', addData);
route.get('/', getData);
route.get('/student/nis/:nis', getDataByNis);
route.get('/student/:id', getDataById);
route.put('/student/edit/:id', updateData);
route.delete('/student/delete/:id', deleteData);

module.exports = route;
