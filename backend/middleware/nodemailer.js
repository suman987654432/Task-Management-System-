const nodemailer = require('nodemailer');

// Create a transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "sumanqaj9876@gmail.com",
        pass: "pbvq xfvd ldop pyid"
    },
});

// Verify the transporter
transporter.verify((error, success) => {
    if (error) {
        console.error('Error connecting to email service:', error);
    } else {
        console.log('Email service ready to send messages');
    }
});

// Example function to send an email and log the result
function sendEmail(mailOptions) {
    return new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                console.error('Error sending email:', err);
                reject(err);
            } else {
                console.log('Email sent successfully:', info.response);
                resolve(info);
            }
        });
    });
}

module.exports = {
    transporter,
    sendEmail
};