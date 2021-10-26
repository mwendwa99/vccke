const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();
const router = express.Router();
const app = express();
const PORT = process.env.PORT;

// build path
// const buildPath = path.join(__dirname, '..', 'build');
const buildPath = path.join(__dirname, './client/build');
app.use(express.static(buildPath));

// middlewares
app.use(cors());
app.use(express.json());
app.use('/', router);
app.listen(PORT, () => console.log(`server running on port: ${PORT}`));

// default SMTP service : gmail
const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.client,
        pass: process.env.password,
    },
});

contactEmail.verify((error) => {
    if (error) {
        console.log(error)
    } else {
        console.log('ready to send')
    }
});

// customer support route
router.post('/contact', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    const from = name && email ? `${name} <${email}>` : `${name || email}`
    const mail = {
        from: from,
        to: process.env.client,
        subject: "VCCKE form submission",
        html: `
        <p>Name: ${name} </p>
        <p>Email: ${email} </p>
        <p>Message: ${message} </p>`,
        replyTo: from,
    };
    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.json({ status: 'Something went wrong. Try again later' })
        } else {
            res.json({ status: 'Thanks for contacting us. We will get back to you shortly' })
        }

    });
});

// application form route
router.post('/application', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const number = req.body.number;
    const description = req.body.description;
    const message = req.body.message;
    const from = name && email ? `${name} <${email}>` : `${name || email}`
    const mail = {
        from: from,
        to: process.env.client,
        subject: "VCCKE SUPPORT APPLICATION",
        html: `
        <p>Name: ${name} </p>
        <p>Email: ${email} </p>
        <p>Phone: ${number} </p>
        <p>Description: Hello I am interested in applying for support as a ${description}. ${message}  </p>`,
        replyTo: from,
    };
    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.json({ status: 'Something went wrong. Try again later' })
        } else {
            res.json({ status: 'Thank you for sending your application us. We will get back to you shortly' })
        }

    });
});

//The 404 Route (ALWAYS Keep this as the last route)
app.use(function (req, res, next) {
    res.status(404).render('404_error_template', { title: "Sorry, page not found" });
});