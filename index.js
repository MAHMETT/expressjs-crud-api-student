require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');

// database
const database = require('./src/config/database');
database();

// env
const PORT = process.env.PORT;

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// route
const studentRoute = require('./src/routes/studentRoute');
app.use('/mahasiswa', studentRoute);

app.listen(PORT, () => {
    console.log(`Server is running in http://lacalhost:${PORT}/`);
});
