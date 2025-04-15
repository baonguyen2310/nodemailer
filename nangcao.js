const nodemailer = require('nodemailer');
require('dotenv').config()
const path = require('path');

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
  from: '"Nguyen Dev 👨‍💻" <your_email@gmail.com>',
  to: 'baonguyencoder1997@gmail.com',
  subject: '📧 Email HTML với ảnh inline và file đính kèm',
  
  html: `
    <h2>Chào bạn,</h2>
    <p>Đây là một email <b>HTML</b> có đính kèm file và hình ảnh nội dòng.</p>
    <p>Ảnh inline phía dưới:</p>
    <img src="cid:logo-img" alt="logo" style="width:200px;" />
    <p>Thân mến,<br>Nguyen</p>
  `,
  
  attachments: [
    // Ảnh nội dòng (inline image)
    {
      filename: 'logo.png',
      path: path.join(__dirname, 'images/logo.png'),
      cid: 'logo-img' // cid này sẽ được dùng trong HTML <img src="cid:logo-img" />
    },
    // File đính kèm
    {
      filename: 'tai_lieu.docx',
      path: path.join(__dirname, 'docs/tai_lieu.docx')
    }
  ]
};

// Gửi email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.error('Lỗi gửi email:', error);
  }
  console.log('Email đã gửi thành công:', info.response);
});
