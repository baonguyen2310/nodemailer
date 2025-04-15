require('dotenv').config()
const nodemailer = require('nodemailer');

// Tạo transporter (đối tượng dùng để gửi email)
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.GMAIL_APP_EMAIL,        // thay bằng email của bạn
//     pass: process.env.GMAIL_APP_PASS,      // dùng app password nếu là Gmail
//   },
// });

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // true nếu dùng port 465
  auth: {
    user: process.env.GMAIL_APP_EMAIL,        // thay bằng email của bạn
    pass: process.env.GMAIL_APP_PASS,      // dùng app password nếu là Gmail
  },
});

// Cấu hình email
const mailOptions = {
  from: 'your_email@gmail.com',
  to: 'baonguyencoder1997@gmail.com',
  subject: 'Hello from Node.js',
  text: 'Chào bạn, đây là email gửi từ Nodemailer!',
};

// Gửi email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log('Lỗi khi gửi email:', error);
  }
  console.log('Email đã được gửi:', info.response);
});
