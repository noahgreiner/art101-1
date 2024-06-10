const http = require('http')
const port = 3000

const server = http.createServer(function(req, res){
    const express = require('express');
    const nodemailer = require('nodemailer');
    const bodyParser = require('body-parser');
    const cors = require('cors');
    
    const app = express();
    const port = 3000;
    
    // Middleware
    app.use(cors());
    app.use(bodyParser.json());
    
    // API endpoint to send email
    app.post('/send-email', (req, res) => {
        const { fromEmail, toEmail, subject, message } = req.body;
    
        // Nodemailer transporter configuration
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'your-email@gmail.com', // Replace with your email
                pass: 'your-email-password'   // Replace with your email password
            }
        });
    
        const mailOptions = {
            from: fromEmail,
            to: toEmail,
            subject: subject,
            text: message
        };
    
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return res.status(500).send(error.toString());
            }
            res.status(200).send('Email sent: ' + info.response);
        });
    });
    
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
    
})

server.listen(port, function(error){
    if (error){
        console.log('Something went wrong', error)
    } else {
        console.log('Server is listening on port'+ port)
    }
})