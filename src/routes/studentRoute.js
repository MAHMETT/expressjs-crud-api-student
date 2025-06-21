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
route.get('/nis/:nis', getDataByNis);
route.get('/:id', getDataById);
route.put('/edit/:id', updateData);
route.delete('/delete/:id', deleteData);

module.exports = route;
