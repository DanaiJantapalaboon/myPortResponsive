const express = require('express')
const app = express()
const nodemailer = require('nodemailer')

const PORT = process.env.PORT || 5000

const path = require('path');
app.use(express.static(path.join(__dirname, '/page/')))
app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/page/')
})

app.post('/', (req, res) => {
    console.log(req.body)

    const transporter = nodemailer.createTransport({
        service: 'sodsaisoft',
        auth: {
            user: 'sodsaiso@sodsaisoft.com',
            pass: 'Xz*)IY735uae4N'
        }
    })

    const mailOptions = {
        from: req.body.email,
        to: 'sodsaiso@sodsaisoft.com',
        subject: `Message from ${req.body.email}`,
        text: req.body.message
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if(error) {
            console.log(error)
            res.send('error')
        }
        else {
            console.log('Email sent: ' + info.response)
            res.send('success')
        }
    })
})

app.listen(PORT, () => {
    console.log('app listening on localhost:' + PORT)
})