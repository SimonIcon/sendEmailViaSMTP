const express = require('express')
const app = express()
const PORT = 5000;
const nodemailer = require('nodemailer')
const dotenv = require('dotenv')

dotenv.config();
// middleware
app.use(express.static('public'))
app.use(express.json())
// creating home route
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/contactForm.html")
})
app.post('/', (req, res) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    })
    const mailOptions = {
        from: req.body.email,
        to: process.env.EMAIL,
        subject: `message from ${req.body.name}`,
        text: req.body.message,
    }
    transporter.sendMail(mailOptions).then(() => {
        res.send("success")
    }).catch((error) => {
        res.send(error)
    })
})

// creating server
app.listen(PORT, () => {
    console.log(`server started on port ${5000}`)
})