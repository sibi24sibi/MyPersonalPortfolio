require('dotenv').config(); // Load environment variables

const nodemailer = require('nodemailer');

const { EMAIL_ADDRESS, EMAIL_PASSWORD, RECEIVER_EMAIL } = process.env;

const sendEmail = async (name, email, message) => {
  try {
    // Create a Nodemailer transporter
    let transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: EMAIL_ADDRESS,
        pass: EMAIL_PASSWORD,
      },
    });

    // Email content
    let mailOptions = {
      from: EMAIL_ADDRESS,
      to: RECEIVER_EMAIL,
      subject: 'New Message from Your Website',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send email
    let info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ', info.response);
    return true;
  } catch (error) {
    console.error('Error sending email: ', error);
    return false;
  }
};

module.exports = sendEmail;
