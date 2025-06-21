const ngrok = require('@ngrok/ngrok');
const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

// database
const database = require('./src/config/database');
database();

// env
const ENV = process.env;
const PORT = ENV.PORT || 8080;

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// route
const studentRoute = require('./src/routes/studentRoute');
app.use('/student', studentRoute);

app.listen(PORT, async () => {
    console.log(`Server is running in http://lacalhost:${PORT}/`);

    if (ENV.NGROK.toString().toLowerCase() === 'true') {
        if (ENV.DOMAIN != '' && ENV.DOMAIN != null && ENV.DOMAIN) {
            try {
                const connectNgrok = await ngrok.connect({
                    addr: ENV.PORT,
                    hostname: ENV.DOMAIN,
                    ...(ENV.AUTH_TOKEN && ENV.AUTH_TOKEN != ''
                        ? { authtoken: ENV.AUTH_TOKEN }
                        : {}),
                });

                console.log(`Ingress established at: ${connectNgrok}`);
            } catch (error) {
                console.log(`Could'nt tunnel ngrok: ${error}`);
            }
        }
    }
});
